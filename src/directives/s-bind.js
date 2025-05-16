export default (el, value, attrName, data) => {
  const [_, prop] = attrName.split(":");

  if (prop === "style") {
    el.setAttribute(prop, value);
    return;
  }

  const expr = new Function("data", `with (data) { return (${value}) }`);
  const evaluate = expr(data);
  el.setAttribute(prop, evaluate);
};
