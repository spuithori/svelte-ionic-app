import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData())

        const success = Math.random() > 0.3;
        const errors = {};
        Object.keys(formData).forEach(key => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            errors[key] = Math.random() > 0.3;
        })

        console.log('Logging to vite window', formData, errors, success)


        return { success, errors, formData }
    }

} satisfies Actions