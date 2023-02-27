/* eslint-disable @typescript-eslint/ban-ts-comment */

import { writable, type Writable } from "svelte/store";

// https://zod.dev/
// https://morioh.com/p/cc9d89e8a10b
import type { ZodTypeAny } from 'zod';

interface ErrorObject {
    [key: string]: string[];
}
export interface FormType {
    success?: boolean;
    errors?: ErrorObject;
    data: { [key: string]: string };
    validate?: () => void;
}

export function getFormWritable() {
    return writable<FormType | null>(null);
}

// export let validate: () => void;

// export function validateFromEvent(ev) {
//     console.log('sss', ev);
//     return true;
// }

export function enhance(
    formNode: HTMLFormElement,
    bar: { form: Writable<FormType | null>; schema?: ZodTypeAny }
) {
    const { form, schema } = bar;

    function validateForm() {

        function formToObject() {
            //@ts-ignore
            const form = document.forms[formNode.id];
            const formData = new FormData(form);
            const keys = Array.from(formData.keys());

            const output: { [key: string]: string } = {};
            keys.forEach((key) => {
                output[key] = formData.get(key) as string;
            });

            return output;
        }

        let success = false;
        let errors: undefined | ErrorObject = undefined;
        let data = formToObject();

        if (schema) {
            const result = schema.safeParse(data);
            success = result.success;

            // add errros
            if (!result.success) {
                const errorsArray = result.error.errors.map((error) => {
                    return {
                        field: error.path[0],
                        message: error.message
                    };
                });

                errors = errorsArray.reduce((acc, obj) => {
                    //@ts-ignore
                    if (!acc[obj.field]) {
                        //@ts-ignore
                        acc[obj.field] = [];
                    }
                    //@ts-ignore
                    acc[obj.field].push(obj.message);
                    return acc;
                }, {});
            }

            if (result.success) data = result.data;
        }

        form.set({
            success,
            errors,
            data,
            validate: validateForm
        });
    }

    const submitHandler = (event: SubmitEvent) => {
        event.preventDefault();
        validateForm();
    };

    formNode.addEventListener('submit', submitHandler);


    return {
        destroy() {
            formNode.removeEventListener('submit', submitHandler);
        }
    };
}