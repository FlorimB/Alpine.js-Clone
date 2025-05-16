export default root => {
    let dataString = root.getAttribute("x-data");
    return eval(`(${dataString})`);
};