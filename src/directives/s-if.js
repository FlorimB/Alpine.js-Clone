export default (el, value) => {
    if (value) return;
    el.remove();
}