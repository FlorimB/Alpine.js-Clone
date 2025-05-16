export default (el, value, data, attrName) => {
  const [, eventName] = attrName.split(":"); // destructure to get the event name
  const fn = new Function("event", "data", `with (data) { ${value} }`);
  el.addEventListener(eventName, event => fn(event, data));
};