export default function walkDom(el, callback) {
  callback(el);
  el = el.firstElementChild;
  while (el) {
    walkDom(el, callback);
    el = el.nextElementSibling;
  }
};