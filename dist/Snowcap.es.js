import { effect as u, reactive as w } from "@vue/reactivity";
const b = (t) => {
  let n = t.getAttribute("s-data");
  return new Function("root", `with (root) { return (${n}) }`)(t);
};
function d(t, n) {
  for (n(t), t = t.firstElementChild; t; )
    d(t, n), t = t.nextElementSibling;
}
function v(t, n) {
  return [
    {
      match: (e) => e.startsWith("@"),
      handle: (e, s, o) => {
        const a = s.slice(1), r = new Function("event", "data", "el", `with (data) { const $el = el; ${o} }`);
        e.addEventListener(a, (c) => r(c, t, e));
      }
    },
    {
      match: (e) => e.startsWith("s-on:"),
      handle: (e, s, o) => {
        n["s-on"](e, o, t, s);
      }
    },
    {
      match: (e) => e.startsWith("s-bind:"),
      handle: (e, s, o) => {
        n["s-bind"](e, o, s, t);
      }
    },
    {
      match: (e) => e.startsWith("s-copy."),
      handle: (e, s, o) => {
        const a = s.split(".")[1];
        n["s-copy"](e, a, o, t);
      }
    },
    {
      match: (e) => e === "s-cloak",
      handle: (e) => {
        e.removeAttribute("s-cloak");
      }
    },
    {
      match: (e) => e === "s-for",
      handle: (e, s, o) => {
        n["s-for"](e, o, t);
      }
    },
    {
      match: (e) => e === "s-model",
      handle: (e, s, o) => {
        n["s-model"](e, o, t);
      }
    },
    {
      match: (e) => n[e],
      handle: (e, s, o) => {
        const a = new Function("data", "el", `with (data) { const $el = el; return (${o}) }`);
        u(() => n[s](e, a(t, e)));
      }
    }
  ];
}
function g(t, n, e) {
  const s = v(n, e);
  d(t, (o) => {
    Array.from(o.attributes).forEach((r) => {
      const { name: c, value: l } = r;
      for (const { match: i, handle: h } of s)
        if (i(c)) {
          h(o, c, l);
          break;
        }
    });
  });
}
const x = (t, n) => t.textContent = n, $ = (t, n) => t.style.display = n ? "block" : "none", y = (t, n, e) => {
  t.value = e[n], t.addEventListener("input", (o) => e[n] = o.target.value), u(() => t.value = e[n]);
}, A = (t, n, e, s) => {
  const [o, a] = e.split(":");
  if (a === "style") {
    t.setAttribute(a, n);
    return;
  }
  const c = new Function("data", "el", `with (data) { const $el = el; return (${n}) }`)(s, t);
  t.setAttribute(a, c);
}, E = (t, n, e, s) => {
  const [, o] = s.split(":"), a = new Function("event", "data", `with (data) { const $el = el; ${n} }`);
  t.addEventListener(o, (r) => a(r, e));
}, C = (t, n) => t.innerHTML = n, F = (t, n) => {
  n || t.remove();
}, H = (t, n, e) => {
  let [s, o] = n.replaceAll(" ", "").split("in");
  const r = new Function("data", "el", `with (data) { const $el = el; return ${o} }`)(e, t), c = t.firstElementChild;
  c && (t.innerHTML = "", r.forEach((l) => {
    const i = c.cloneNode(!0), h = { ...e, [s]: l };
    if (i.hasAttribute("s-text")) {
      const p = i.getAttribute("s-text"), f = new Function("scope", `with (scope) { return ${p} }`);
      i.textContent = f(h), i.removeAttribute("s-text");
    }
    t.appendChild(i);
  }));
}, L = (t, n, e, s) => {
  const o = new Function("data", `
    with (data) { 
      const $el = el;
      return (${e});
    }
  `);
  t.addEventListener(n, () => {
    const a = o(s, t);
    navigator.clipboard.writeText(a).then(() => console.log("Text Copied:", a)).catch((r) => console.error("Clipboard write error:", r));
  });
}, S = (t, n) => {
  t.style.overflow = "hidden", t.style.transition = "height 300ms ease-in-out", requestAnimationFrame(() => {
    t.style.height = n ? t.scrollHeight + "px" : "0px";
  });
}, _ = {
  "s-text": x,
  "s-show": $,
  "s-model": y,
  "s-bind": A,
  "s-on": E,
  "s-html": C,
  "s-if": F,
  "s-for": H,
  "s-copy": L,
  "s-collapse": S
}, m = {
  _components: [],
  start() {
    document.querySelectorAll("[s-data]").forEach((n) => {
      const e = b(n), s = w(e);
      this._components.push({ root: n, data: s }), g(n, s, _);
    });
  },
  getComponents() {
    return this._components.map((t) => t.data);
  }
};
window.Snowcap = m;
m.start();
export {
  m as default
};
