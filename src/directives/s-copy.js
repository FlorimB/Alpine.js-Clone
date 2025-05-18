export default (el, event, valueExpr, data) => {
  const getValue = new Function("data", `
    with (data) { 
      const $el = el;
      return (${valueExpr});
    }
  `);

  el.addEventListener(event, () => {
    const value = getValue(data, el);
    navigator.clipboard.writeText(value)
      .then(() => console.log("Text Copied:", value))
      .catch(err => console.error("Clipboard write error:", err));
  });
}; 