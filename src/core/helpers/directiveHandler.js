import { effect } from "@vue/reactivity";

export default function (data, directives) {
  return [
    {
      match: name => name.startsWith("@"),
      handle: (el, name, value) => {
        const event = name.slice(1);
        const fn = new Function("event", "data", "el", `with (data) { const $el = el; ${value} }`);
        el.addEventListener(event, e => fn(e, data, el));
      }
    },
    {
      match: name => name.startsWith("s-on:"),
      handle: (el, name, value) => {
        directives["s-on"](el, value, data, name);
      }
    },
    {
      match: name => name.startsWith("s-bind:"),
      handle: (el, name, value) => {
        directives["s-bind"](el, value, name, data);
      }
    },
    {
      match: name => name.startsWith("s-copy."),
      handle: (el, name, value) => {
        const event = name.split(".")[1];
        directives["s-copy"](el, event, value, data);
      }
    },
    {
      match: name => name === "s-cloak",
      handle: el => {
        el.removeAttribute("s-cloak");
      }
    },
    {
      match: name => name === "s-for",
      handle: (el, _, value) => {
        directives["s-for"](el, value, data);
      }
    },
    {
      match: name => name === "s-model",
      handle: (el, _, value) => {
        directives["s-model"](el, value, data);
      }
    },
    {
      match: name => directives[name],
      handle: (el, name, value) => {
        const getValue = new Function("data", "el", `with (data) { const $el = el; return (${value}) }`);
        effect(() => directives[name](el, getValue(data, el)));
      }
    }
  ];
}