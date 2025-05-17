export default (el, value) => {
    el.style.overflow = "hidden";
    el.style.transition = "height 300ms ease-in-out";

    requestAnimationFrame(() => {
        el.style.height = value ? el.scrollHeight + "px" : "0px";
    });
};