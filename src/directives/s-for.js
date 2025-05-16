export default (el, value, data) => {
    let [itemName, arrayName] = value.replaceAll(" ", "").split("in");

    const getArray = new Function("data", `with (data) { return ${arrayName} }`);
    const items = getArray(data);

    const template = el.firstElementChild;
    if (!template) return;

    el.innerHTML = ""; // Remove the old content

    items.forEach(item => {
        const cloned = template.cloneNode(true)
        const scope = { ...data, [itemName]: item };

        if (cloned.hasAttribute("s-text")) {
            const expr = cloned.getAttribute("s-text");
            const evaluate = new Function("scope", `with (scope) { return ${expr} }`);
            cloned.textContent = evaluate(scope);
            cloned.removeAttribute("s-text");
        }

        el.appendChild(cloned);
    });
};