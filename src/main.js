import { reactive } from "@vue/reactivity";
import getInitialData from "./core/initialData.js";
import bindEffect from "./core/bindEffect";
import directives from "./core/directives.js";

const Snowcap = {
    _components: [],

    start() {
        const roots = document.querySelectorAll("[s-data]");
        roots.forEach(root => {
            const rawData = getInitialData(root);
            const data = reactive(rawData);
            this._components.push({ root, data });
            bindEffect(root, data, directives);
        }); 
    },

    getComponents() {
      return this._components.map(comp => comp.data);
    }
};

export default Snowcap;

window.Snowcap = Snowcap;

Snowcap.start();