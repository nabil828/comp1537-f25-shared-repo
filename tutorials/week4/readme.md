# JavaScript
Phew! That was a lot of HTML and CSS. Now we can add some behavior with JavaScript (JS). In this tutorial, we’ll cover:
- [JavaScript basics](#javascript-basics)
- [Functions](#functions)
- [Variables](#variables)
- [Types of values](#types-of-values)
- [Programming libraries](#programming-libraries)
- [jQuery basics](#jquery-basics)
  - [Modifying the page](#modifying-the-page)
  - [Events](#events-in-jquery)
  - [Debugging & fixing problems](#debugging--fixing-problems)

## JavaScript Basics

- JavaScript code runs when the HTML page loads.
- Example: `alert("Hello world!")` shows a popup.
  - `alert()` is a built-in function.
  - Arguments go inside `(...)` — some functions need them, some don’t.
  - `"Hello world!"` is a string (characters in quotes).
  - The line of code is a **statement** (one instruction).

## Responding to Events

- Code running immediately on page load is not always ideal.
- Usually, we want to respond to user actions.
- To do this:

  - Wrap logic in a function.
  - Attach that function to an event (e.g., a click).

- Example:

```
  function say_hello() {
    alert("Hello!");
  }
  <p onclick="say_hello()">Click me!</p>
```

## Functions

- Functions are variables that hold reusable code.
- Example:
  - `let say_hello = function() { alert("Hello!"); };`
- Body of the function goes inside `{ ... }`.
- Functions may take arguments (learn later).

## Defining Functions

- Example: create a function `say_hello`.
- Defining it means it won’t run immediately.
- Later, attach it to an event on an element.
- Result: clicking the element calls `say_hello()`, which shows the alert.

## Variables

- Variables store information to use later.
- Example:
  - `let count = 54;`
  - `count = count + 1;` → now `55`.
  - `alert(count);` → shows `55`.
- Variables can store numbers, strings, functions, etc.
- Variables can be reassigned many times.
- Use `let` to declare a variable (create it).

## Variables and Functions

- Variables can hold functions, just like numbers or strings.
- To run a function stored in a variable, add `()` after its name.
- Example: `say_hello();`
- Built-in functions (like `alert()`) work the same way.

## Types of Values

- **Numbers**: integers, floating-point, support arithmetic.
- **Strings**: sequences of characters, `"text"` or `'text'`.
- **Functions**: reusable blocks of logic stored in variables.
- **Objects**: containers for numbers, strings, functions, and other objects.

  - Access with the `.` operator: `object.property`.

## Programming Libraries

- Common problems don’t need to be solved from scratch.
- **Libraries** = collections of reusable code.
- Example in CSS: reset stylesheet / Normalize.css.
- In JS: libraries extend what we can do without reinventing.

## jQuery Basics

- A very common JavaScript library.
- Load it before your own JS code.
- Provides the `jQuery()` function.
- Always returns a **jQuery object** with powerful features.
- Separates concerns:

  - HTML = content
  - JavaScript = behavior

## jQuery Selectors

- Use CSS-like selectors to pick elements.
- Example: `jQuery("p")` → selects all `<p>` elements.
- Example with events:

  - `jQuery("p").click(say_hello);`
  - Calls `say_hello` when a paragraph is clicked.

## jQuery Objects

- `jQuery("p")` → jQuery object of all `<p>` elements.
- `.click(say_hello)` attaches a click handler.
- `.html("<b>text</b>")` changes content.
- One call packs **selection + behavior** together.

## Modifying the Page

- `.html()` → get or set inner HTML.
- `.text()` → get or set text content.
- `.val()` → get or set form values.
- `.attr("src", "image.png")` → change attributes.
- `.hide()` / `.show()` → toggle visibility.
- `.append("<p>new</p>")` → add new elements.
- `.css("color", "red")` → change styles.
- `.after("<hr>")` → insert after selected elements.
- `.remove()` → delete elements.
- `.before()`, `.prepend()`, `.empty()` also exist.
- Developer Tools (F12) let you inspect changes in real-time.

## Events in jQuery

- `.click()` → run code on click.
- `.mouseover()` / `.mouseleave()` → run on hover.
- `.ready()` → run code when page is loaded.
- `.on("event", handler)` → attach to any event (e.g., `touchstart`). Used for advanced cases.

## Debugging & Fixing Problems

- Step 1: Know what you want the code to do.
- Step 2: Check what’s actually happening.
- Tools:

  - `alert()` → quick checks.
  - `console.log()` → print to developer console.
  - Debugger tab → step through code.
