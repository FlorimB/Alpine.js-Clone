export default root => {
    let dataString = root.getAttribute("s-data");
    return eval(`(${dataString})`);
};