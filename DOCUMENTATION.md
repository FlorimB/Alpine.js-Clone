# Snowcap.js Documentation

## Table of Contents
- [Installation](#installation)
- [Core Concepts](#core-concepts)
- [Directives Reference](#directives-reference)
- [Advanced Features](#advanced-features)
- [Best Practices](#best-practices)
- [Examples](#examples)

## Installation

### NPM
```bash
npm install snowcap
```

### CDN
```html
<script src="https://unpkg.com/snowcap"></script>
```

## Core Concepts

### Initialization
Snowcap.js needs to be initialized before use. You can do this in two ways:

1. Using ES modules:
```javascript
import Snowcap from "snowcap";
window.Snowcap = Snowcap;
Snowcap.start();
```

2. Using CDN:
```javascript
window.Snowcap.start();
```

### Reactive State
Snowcap.js uses Vue's reactivity system under the hood. All data declared within `s-data` directives becomes reactive.

```html
<div s-data="{ count: 0, name: 'John' }">
  <!-- Reactive scope -->
</div>
```

### Scope Access
You can access the current element using `$el` within your expressions:

```html
<div s-data>
  <p s-text="$el.getAttribute('id')" id="myId"></p>
</div>
```

## Directives Reference

### `s-data`
Initializes reactive state for a component.

```html
<div s-data="{ count: 0, items: [] }">
  <!-- Reactive scope -->
</div>
```

### `s-text`
Binds text content to a reactive expression.

```html
<p s-text="message"></p>
<p s-text="count + 1"></p>
```

### `s-html`
Renders HTML content from a reactive expression.

```html
<div s-html="htmlContent"></div>
```

### `s-show`
Toggles element visibility based on expression.

```html
<div s-show="isVisible">Content</div>
```

### `s-bind`
Binds element attributes dynamically.

```html
<img s-bind:src="imageUrl" s-bind:alt="imageAlt">
```

### `s-on` / `@event`
Attaches event handlers.

```html
<button @click="count++">Increment</button>
<button s-on:mouseover="handleHover">Hover me</button>
```

### `s-model`
Creates two-way data binding with form inputs.

```html
<input s-model="name" type="text">
<textarea s-model="description"></textarea>
<select s-model="selectedOption">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### `s-if`
Conditionally renders elements.

```html
<div s-if="isLoggedIn">Welcome back!</div>
<div s-if="!isLoggedIn">Please log in</div>
```

### `s-for`
Iterates over arrays or objects.

```html
<ul s-for="item in items">
  <li s-text="item"></li>
</ul>

<ul s-for="(value, key) in object">
  <li s-text="key + ': ' + value"></li>
</ul>
```

### `s-copy`
Copies text to clipboard on specified events.

```html
<button s-copy.click="textToCopy">Copy to Clipboard</button>
```

## Advanced Features

### Custom Directives
You can create custom directives by extending Snowcap's directive system:

```javascript
Snowcap.directive('my-directive', {
  mounted(el, binding) {
    // Directive logic
  }
});
```

### Event Modifiers
Snowcap supports event modifiers similar to Vue.js:

```html
<button @click.prevent="handleClick">Click me</button>
<button @keyup.enter="submitForm">Submit</button>
```

### Expression Evaluation
Snowcap evaluates expressions within directive values using a scoped context:

```html
<div s-data="{ count: 0, multiplier: 2 }">
  <p s-text="count * multiplier"></p>
</div>
```

## Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use meaningful variable names
   - Group related data in objects

2. **Performance**
   - Avoid complex expressions in templates
   - Use `s-show` for frequent toggles
   - Use `s-if` for conditional rendering that rarely changes

3. **Security**
   - Be careful with `s-html` directive
   - Sanitize user input
   - Validate data before rendering

## Examples

### Counter Component
```html
<div s-data="{ count: 0 }">
  <button @click="count++">Increment</button>
  <button @click="count--">Decrement</button>
  <p s-text="count"></p>
</div>
```

### Todo List
```html
<div s-data="{ todos: [], newTodo: '' }">
  <input s-model="newTodo" @keyup.enter="todos.push(newTodo); newTodo = ''">
  <ul s-for="todo in todos">
    <li s-text="todo"></li>
  </ul>
</div>
```

### Form Handling
```html
<div s-data="{ form: { name: '', email: '' } }">
  <input s-model="form.name" placeholder="Name">
  <input s-model="form.email" placeholder="Email">
  <button @click="submitForm">Submit</button>
</div>
``` 