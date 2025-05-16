export default (el, event, valueExpr, data) => {
  const getValue = new Function("data", `with (data) { return (${valueExpr}) }`);

  el.addEventListener(event, () => {
    const value = getValue(data);
    navigator.clipboard.writeText(value)
      .then(() => console.log("Text Copied:", value))
      .catch(err => console.error("Clipboard write error:", err));
  });
};
