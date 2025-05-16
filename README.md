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

## 📦 Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/FlorimB/Alpine.js-Clone.git
   ```

   ```bash
   cd Alpine.js-Clone
   ```

   ```bash
   npm install
   ```

   or

   ```bash
   npm install alpinejs-clone
   ```

3. **Open the Example**:

   Open `index.html` in your browser to see the directives in action.

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

### `x-data`
Initializes the reactive state for the component. All variables declared inside are tracked for changes.

```html
<div x-data="{ count: 0 }"></div>
```

### `x-text`
Binds a text node to a reactive expression.

```html
<p x-text="message"></p>
```

### `x-html`
Binds and renders raw HTML from a reactive expression.

```html
<div x-html="htmlContent"></div>
```

### `x-show`
Toggles visibility using `display: none` based on the expression's truthiness.

```html
<div x-show="isVisible">Visible if true</div>
```

### `x-bind`
Dynamically sets element attributes.

```html
<img x-bind:src="imageUrl">
```

### `x-on` / `@event`
Attaches an event handler. You can also use shorthand `@event`.

```html
<button x-on:click="count++">Click</button>
<!-- same as -->
<button @click="count++">Click</button>
```

### `x-model`
Creates a two-way binding between form inputs and the reactive data.

```html
<input x-model="name" type="text">
<p x-text="name"></p>
```

### `x-if`
Conditionally renders DOM nodes. Unlike `x-show`, this removes or adds the element to the DOM entirely.

```html
<div x-if="shouldShow">Rendered only if true</div>
```

### `x-for`
Repeats an element for each item in an array or object.

```html
<ul x-for="item in items">
  <li x-text="item"></li>
</ul>
```

### `x-clipboard`
Copies text to the clipboard on specified events (e.g., `click`).

```html
<button x-clipboard.click="textToCopy">Copy</button>
```

## How it works

- Uses Vue’s reactivity system for tracking data changes and re-rendering the DOM.
- Parses custom directives on DOM elements and binds reactive handlers accordingly.
- Supports dynamic evaluation of expressions within directive values using `new Function()` with a `with` statement for scoping.
- Handles custom events, attribute bindings, and more.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

