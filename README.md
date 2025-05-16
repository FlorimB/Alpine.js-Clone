# Alpine.js Clone

A minimal JavaScript reactive framework inspired by Alpine.js, designed for simplicity and ease of use.

## Features

- Reactive data binding with Vue.js reactivity system (`@vue/reactivity`)
- Directive based syntax similar to Alpine.js (`x-text`, `x-show`, `x-model`, `x-bind`, `x-on`, `x-html`, `x-if`, `x-for`)
- Additional directives like (`x-clipboard`)
- Supports custom directives and event handlers
- DOM walking and dynamic binding
- Lightweight and minimal footprint
- Easily extendable

## Installation

Clone the repo or download the source files directly:

```bash
git clone https://github.com/FlorimB/Alpine.js-Clone.git
```
```bash
npm install
```
Then include your scripts in your project.

## Usage

Basic example in HTML:

```html
<div x-data="{ message: 'Hello, World!' }">
  <input x-model="message" type="text" />
  <p x-text="message"></p>
  <button x-clipboard.click="message">Copy Message</button>
</div>
```

## Directives

- `x-text` — Updates element text content reactively.
- `x-show` — Toggles element visibility.
- `x-model` — Two-way binding for form elements.
- `x-bind` — Bind attributes dynamically.
- `x-on` / `@event` — Event listeners with inline handlers.
- `x-html` — Render raw HTML content.
- `x-if` — Conditionally render elements.
- `x-for` — Loop rendering over arrays or objects.
- `x-clipboard` — Copy text to clipboard on event (e.g., click).

## How it works

- Uses Vue’s reactivity system for tracking data changes and re-rendering the DOM.
- Parses custom directives on DOM elements and binds reactive handlers accordingly.
- Supports dynamic evaluation of expressions within directive values using `new Function()` with a `with` statement for scoping.
- Handles custom events, attribute bindings, and more.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

