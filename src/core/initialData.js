export default root => {
    const dataString = root.getAttribute("s-data");
    return new Function("root", `with (root) { return (${dataString}) }`)(root);
};