import { effect as u, reactive as f } from "@vue/reactivity";
const w = (n) => {
  const e = n.getAttribute("s-data");
  return new Function("root", `with (root) { return (${e}) }`)(n);
};
function h(n, e) {
  for (e(n), n = n.firstElementChild; n; )
    h(n, e), n = n.nextElementSibling;
}
function b(n, e) {
  return [
    {
      match: (t) => t.startsWith("@"),
      handle: (t, o, s) => {
        const a = o.slice(1), r = new Function("event", "data", `with (data) { ${s} }`);
        t.addEventListener(a, (c) => r(c, n));
      }
    },
    {
      match: (t) => t.startsWith("s-on:"),
      handle: (t, o, s) => {
        e["s-on"](t, s, n, o);
      }
    },
    {
      match: (t) => t.startsWith("s-bind:"),
      handle: (t, o, s) => {
        e["s-bind"](t, s, o, n);
      }
    },
    {
      match: (t) => t.startsWith("s-clipboard."),
      handle: (t, o, s) => {
        const a = o.split(".")[1] || "click";
        e["s-clipboard"](t, a, s, n);
      }
    },
    {
      match: (t) => t === "s-cloak",
      handle: (t) => {
        t.removeAttribute("s-cloak");
      }
    },
    {
      match: (t) => t === "s-for",
      handle: (t, o, s) => {
        e["s-for"](t, s, n);
      }
    },
    {
      match: (t) => t === "s-model",
      handle: (t, o, s) => {
        e["s-model"](t, s, n);
      }
    },
    {
      match: (t) => e[t],
      handle: (t, o, s) => {
        const a = new Function("data", `with (data) { return (${s}) }`);
        u(() => e[o](t, a(n)));
      }
    }
  ];
}
function v(n, e, t) {
  const o = b(e, t);
  h(n, (s) => {
    Array.from(s.attributes).forEach((r) => {
      const { name: c, value: l } = r;
      for (const { match: i, handle: d } of o)
        if (i(c)) {
          d(s, c, l);
          break;
        }
    });
  });
}
const g = (n, e) => n.textContent = e, x = (n, e) => n.style.display = e ? "block" : "none", A = (n, e, t) => {
  n.value = t[e], n.addEventListener("input", (s) => t[e] = s.target.value), u(() => n.value = t[e]);
}, E = (n, e, t, o) => {
  const [s, a] = t.split(":");
  if (a === "style") {
    n.setAttribute(a, e);
    return;
  }
  const c = new Function("data", `with (data) { return (${e}) }`)(o);
  n.setAttribute(a, c);
}, C = (n, e, t, o) => {
  const [, s] = o.split(":"), a = new Function("event", "data", `with (data) { ${e} }`);
  n.addEventListener(s, (r) => a(r, t));
}, F = (n, e) => n.innerHTML = e, $ = (n, e) => {
  e || n.remove();
}, y = (n, e, t) => {
  let [o, s] = e.replaceAll(" ", "").split("in");
  const r = new Function("data", `with (data) { return ${s} }`)(t), c = n.firstElementChild;
  c && (n.innerHTML = "", r.forEach((l) => {
    const i = c.cloneNode(!0), d = { ...t, [o]: l };
    if (i.hasAttribute("s-text")) {
      const m = i.getAttribute("s-text"), p = new Function("scope", `with (scope) { return ${m} }`);
      i.textContent = p(d), i.removeAttribute("s-text");
    }
    n.appendChild(i);
  }));
}, L = (n, e, t, o) => {
  const s = new Function("data", `with (data) { return (${t}) }`);
  n.addEventListener(e, () => {
    const a = s(o);
    navigator.clipboard.writeText(a).then(() => console.log("Text Copied:", a)).catch((r) => console.error("Clipboard write error:", r));
  });
}, _ = {
  "s-text": g,
  "s-show": x,
  "s-model": A,
  "s-bind": E,
  "s-on": C,
  "s-html": F,
  "s-if": $,
  "s-for": y,
  "s-clipboard": L
}, S = {
  _components: [],
  start() {
    document.querySelectorAll("[s-data]").forEach((e) => {
      const t = w(e), o = f(t);
      this._components.push({ root: e, data: o }), v(e, o, _);
    });
  },
  getComponents() {
    return this._components.map((n) => n.data);
  }
};
export {
  S as default
};
