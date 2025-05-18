export default (el, value, attrName, data) => {
  const [_, prop] = attrName.split(":");

  if (prop === "style") {
    el.setAttribute(prop, value);
    return;
  }

  const expr = new Function("data", "el", `with (data) { const $el = el; return (${value}) }`);
  const evaluate = expr(data, el);
  el.setAttribute(prop, evaluate);
};
