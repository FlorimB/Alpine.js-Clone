# Snowcap.js

A minimal JavaScript reactive framework inspired by Alpine.js, designed for simplicity and ease of use.

## Features

- Reactive data binding with Vue.js reactivity system (`@vue/reactivity`)
- Directive based syntax similar to Alpine.js (`s-text`, `s-show`, `s-model`, `s-bind`, `s-on`, `s-html`, `s-if`, `s-for`)
- Additional directives like (`s-clipboard`)
- Supports custom directives and event handlers
- DOM walking and dynamic binding
- Lightweight and minimal footprint
- Easily extendable

## 📦 Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/FlorimB/Snowcap.js.git
   ```

   ```bash
   cd Snowcap.js
   ```

   ```bash
   npm install
   ```

   or

   ```bash
   npm install snowcap
   ```

3. **Open the Example**:

   Open `index.html` in your browser to see the directives in action.

## Usage

Basic example in HTML:

```html
<div s-data="{ message: 'Hello, World!' }">
  <input s-model="message" type="text" />
  <p s-text="message"></p>
  <button s-clipboard.click="message">Copy Message</button>
</div>
```

## Directives

### `s-data`
Initializes the reactive state for the component. All variables declared inside are tracked for changes.

```html
<div s-data="{ count: 0 }"></div>
```

### `s-text`
Binds a text node to a reactive expression.

```html
<p s-text="message"></p>
```

### `s-html`
Binds and renders raw HTML from a reactive expression.

```html
<div s-html="htmlContent"></div>
```

### `s-show`
Toggles visibility using `display: none` based on the expression's truthiness.

```html
<div s-show="isVisible">Visible if true</div>
```

### `s-bind`
Dynamically sets element attributes.

```html
<img s-bind:src="imageUrl">
```

### `s-on` / `@event`
Attaches an event handler. You can also use shorthand `@event`.

```html
<button s-on:click="count++">Click</button>
<!-- same as -->
<button @click="count++">Click</button>
```

### `s-model`
Creates a two-way binding between form inputs and the reactive data.

```html
<input s-model="name" type="text">
<p s-text="name"></p>
```

### `s-if`
Conditionally renders DOM nodes. Unlike `s-show`, this removes or adds the element to the DOM entirely.

```html
<div s-if="shouldShow">Rendered only if true</div>
```

### `s-for`
Repeats an element for each item in an array or object.

```html
<ul s-for="item in items">
  <li s-text="item"></li>
</ul>
```

### `s-clipboard`
Copies text to the clipboard on specified events (e.g., `click`).

```html
<button s-clipboard.click="textToCopy">Copy</button>
```

## How it works

- Uses Vue’s reactivity system for tracking data changes and re-rendering the DOM.
- Parses custom directives on DOM elements and binds reactive handlers accordingly.
- Supports dynamic evaluation of expressions within directive values using `new Function()` with a `with` statement for scoping.
- Handles custom events, attribute bindings, and more.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

