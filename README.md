# Snowcap.js

A minimal JavaScript reactive framework inspired by Alpine.js, designed for simplicity and ease of use.

## Features

- Reactive data binding with Vue.js reactivity system (`@vue/reactivity`)
- Directive based syntax similar to Alpine.js (`s-text`, `s-show`, `s-model`, `s-bind`, `s-on`, `s-html`, `s-if`, `s-for`)
- Additional directives like (`s-copy`)
- Supports custom directives and event handlers
- DOM walking and dynamic binding
- Lightweight and minimal footprint
- Easily extendable
- CDN support for quick prototyping
- Event modifiers support (`.prevent`, `.stop`, etc.)

## 📦 Installation

### NPM
```bash
npm install snowcap
```

### CDN
```html
<script src="https://unpkg.com/snowcap"></script>
```

## Quick Start

1. Add Snowcap to your project (NPM or CDN)
2. Initialize Snowcap:

```javascript
import Snowcap from "snowcap";
window.Snowcap = Snowcap;
Snowcap.start();
```

3. Use directives in your HTML:

```html
<div s-data="{ count: 0 }">
  <button @click="count++">Increment</button>
  <p s-text="count"></p>
</div>
```

## Documentation

For detailed documentation, examples, and best practices, please refer to [DOCUMENTATION.md](https://github.com/FlorimB/Snowcap.js/blob/main/DOCUMENTATION.md).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project in any way you want.

## Credits

- Inspired by [Alpine.js](https://github.com/alpinejs/alpine)
- Uses [Vue's Reactivity System](https://github.com/vuejs/core/tree/main/packages/reactivity)

