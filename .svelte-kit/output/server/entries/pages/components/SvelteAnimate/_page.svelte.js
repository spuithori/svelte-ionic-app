import { h as assign, i as is_function, c as create_ssr_component, v as validate_component, e as each, f as escape } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
import "ionicons/icons";
import { c as cubicOut, q as quintOut } from "../../../../chunks/index3.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function crossfade(_a) {
  var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
  const to_receive = /* @__PURE__ */ new Map();
  const to_send = /* @__PURE__ */ new Map();
  function crossfade2(from, node, params) {
    const { delay = 0, duration = (d2) => Math.sqrt(d2) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing,
      css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }
  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, {
        rect: node.getBoundingClientRect()
      });
      return () => {
        if (counterparts.has(params.key)) {
          const { rect } = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade2(rect, node, params);
        }
        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [
    transition(to_send, to_receive, false),
    transition(to_receive, to_send, true)
  ];
}
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".board.svelte-pjyq2m{display:grid;grid-template-columns:50% 50%;grid-template-areas:'left right';grid-gap:1em;max-width:36em;margin:0 auto}.left.svelte-pjyq2m{grid-area:left}.right.svelte-pjyq2m{grid-area:right}h2.svelte-pjyq2m{font-size:2em;font-weight:200;user-select:none;margin:0 0 0.5em 0}label.svelte-pjyq2m{position:relative;line-height:1.2;padding:0.5em 2.5em 0.5em 2em;margin:0 0 0.5em 0;border-radius:2px;user-select:none;border:1px solid hsl(240, 8%, 70%);background-color:hsl(240, 8%, 93%);color:#333}input[type='checkbox'].svelte-pjyq2m{position:absolute;left:0.5em;top:0.6em;margin:0}.done.svelte-pjyq2m{border:1px solid hsl(240, 8%, 90%);background-color:hsl(240, 8%, 98%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  crossfade({
    duration: (d) => Math.sqrt(d * 2e3),
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;
      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
      };
    }
  });
  let uid = 1;
  let todos = [
    {
      id: uid++,
      done: false,
      description: "write some docs"
    },
    {
      id: uid++,
      done: false,
      description: "start writing blog post"
    },
    {
      id: uid++,
      done: true,
      description: "buy some milk"
    },
    {
      id: uid++,
      done: false,
      description: "mow the lawn"
    },
    {
      id: uid++,
      done: false,
      description: "feed the turtle"
    },
    {
      id: uid++,
      done: false,
      description: "fix some bugs"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Svelte Animate</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "SvelteAnimate" }, {}, {})}</ion-buttons>
			<ion-title>Svelte Animate </ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><p>Svelte aninate is part of Svelte&#39;s nifty runtime features to easily add animation to DOM
			elements.This code comes from the Svelte Tutorial on <a href="${"https://svelte.dev/tutorial/animate"}" target="${"_blank"}">https://svelte.dev/tutorial/animate
			</a></p>
		<br>

		&quot;In the previous chapter, we used deferred transitions to create the illusion of motion as
		elements move from one todo list to the other. To complete the illusion, we also need to apply
		motion to the elements that aren&#39;t transitioning. For this, we use the animate directive.&quot;
		<br><br>Add items using the input and/or click have them move on the kanban board.
		<br><br>

		<div class="${"board svelte-pjyq2m"}"><div class="${"left svelte-pjyq2m"}"><h2 class="${"svelte-pjyq2m"}">Todos</h2>
				<ion-input placeholder="${"what needs to be done?"}"></ion-input>
				${each(todos.filter((t) => !t.done), (todo) => {
        return `<ion-item><label class="${"svelte-pjyq2m"}"><input type="${"checkbox"}" class="${"svelte-pjyq2m"}">
							${escape(todo.description)}</label>
					</ion-item>`;
      })}</div>

			<div class="${"right svelte-pjyq2m"}"><h2 class="${"svelte-pjyq2m"}">Done</h2>
				${each(todos.filter((t) => t.done), (todo) => {
        return `<ion-item><label class="${"done svelte-pjyq2m"}"><input type="${"checkbox"}" checked class="${"svelte-pjyq2m"}">
							${escape(todo.description)}</label>
					</ion-item>`;
      })}</div></div></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
