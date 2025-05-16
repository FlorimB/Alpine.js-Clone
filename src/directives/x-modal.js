import { effect } from "@vue/reactivity";

export default (el, key, data) => {
    el.value = data[key];
    el.addEventListener("input", e => data[key] = e.target.value);
    const fn = () => el.value = data[key];
    effect(fn);
}