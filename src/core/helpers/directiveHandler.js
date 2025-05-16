import { effect } from "@vue/reactivity";

export default function (data, directives) {
  return [
    {
      match: name => name.startsWith("@"),
      handle: (el, name, value) => {
        const event = name.slice(1);
        const fn = new Function("event", "data", `with (data) { ${value} }`);
        el.addEventListener(event, e => fn(e, data));
      }
    },
    {
      match: name => name.startsWith("x-on:"),
      handle: (el, name, value) => {
        directives["x-on"](el, value, data, name);
      }
    },
    {
      match: name => name.startsWith("x-bind:"),
      handle: (el, name, value) => {
        directives["x-bind"](el, value, name, data);
      }
    },
    {
      match: name => name.startsWith("x-clipboard."),
      handle: (el, name, value) => {
        const event = name.split(".")[1] || "click";
        directives["x-clipboard"](el, event, value, data);
      }
    },
    {
      match: name => name === "x-cloak",
      handle: el => {
        el.removeAttribute("x-cloak");
      }
    },
    {
      match: name => name === "x-for",
      handle: (el, _, value) => {
        directives["x-for"](el, value, data);
      }
    },
    {
      match: name => name === "x-model",
      handle: (el, _, value) => {
        directives["x-model"](el, value, data);
      }
    },
    {
      match: name => directives[name],
      handle: (el, name, value) => {
        const getValue = new Function("data", `with (data) { return (${value}) }`);
        effect(() => directives[name](el, getValue(data)));
      }
    }
  ];
}