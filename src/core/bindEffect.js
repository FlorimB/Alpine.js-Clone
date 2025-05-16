import walkDom from "./walkDom";
import getDirectiveHandlers from "./helpers/directiveHandler.js";

export default function bindEffect(root, data, directives) {
  const directiveHandlers = getDirectiveHandlers(data, directives);
  
  walkDom(root, el => {
    const attributes = Array.from(el.attributes);

    attributes.forEach(attr => {
      const { name, value } = attr;

      for (const { match, handle } of directiveHandlers) {
        if (match(name)) {
          handle(el, name, value);
          break;
        }
      }
    });
  });
}