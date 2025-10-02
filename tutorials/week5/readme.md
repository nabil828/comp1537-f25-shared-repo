# JavaScript Introduction - Part II

> Why did the const variable break up?  
> Because it couldn’t be changed. 😅

Alright, enough jokes. Let's dive deeper into JavaScript. In this tutorial, we'll cover:

- [JavaScript Introduction](#javascript-introduction)
- [JavaScript Output](#javascript-output)
- [JavaScript Statements](#javascript-statements)
- [JavaScript Syntax](#javascript-syntax)
- [JavaScript Comments](#javascript-comments)
- [JavaScript Variables](#javascript-variables)
- [JavaScript Operators](#javascript-operators)
  - [Arithmetic](#javascript-arithmetic)
  - [Assignment](#javascript-assignment)
- [JavaScript Data Types](#javascript-data-types)
- [JavaScript Functions](#javascript-functions)
- [JavaScript Objects](#javascript-objects)
- [JavaScript Strings](#javascript-strings)
  - [String Methods](#javascript-string-methods)
  - [String Templates](#javascript-string-templates)
- [JavaScript Random](#javascript-random)
- [JavaScript Comparisons](#javascript-comparisons)
- [JavaScript Control Flow](#javascript-if--else)
  - [If/Else Statements](#javascript-if--else)
  - [Switch Statements](#javascript-switch)
- [JavaScript Loops](#javascript-loops)
- [JavaScript Arrays](#javascript-arrays)
  - [Array Methods](#javascript-array-methods)
- [JavaScript Math](#javascript-math)

## JavaScript Introduction

- JavaScript adds interactivity to web pages.
- Runs in the browser.
- Used for:

  - Responding to user actions
  - Manipulating the DOM
  - Performing calculations
  - Communicating with servers

## JavaScript Output

- **`window.alert()`** → shows a popup alert.

```js
window.alert("Hello, world!");
```

- **`console.log()`** → prints to developer console.

```js
console.log("Debugging message");
```

## JavaScript Statements

- A **program** is a list of statements.
- A **statement** = one instruction.

```js
let x = 5; // statement
let y = 6; // statement
let z = x + y; // statement
```

- End with semicolons `;` (optional but recommended).
- Whitespace ignored (except inside strings).
- **Blocks**: multiple statements inside `{ ... }`.

```js
if (true) {
  let msg = "Hi";
  console.log(msg);
}
```

- Certain words are **keywords** (reserved).

## JavaScript Syntax

- **Variables vs. Literals**

```js
let x = 10; // variable
let name = "Nabil"; // literal string
```

- **Operators**: `+ - * / %`
- **Comments**: `// single-line` or `/* multi-line */`
- **Identifiers**: names for variables/functions.

  - Case-sensitive (`Name` ≠ `name`).
  - Convention: **camelCase**.

## JavaScript Comments

- For explanation / debugging.

```js
// Single-line comment
/* Multi-line
   comment */
```

## JavaScript Variables

- Declare with `let`, `var`, or `const`.

```js
let age = 20; // block scoped
var name = "Ali"; // function scoped
const PI = 3.14; // constant, cannot be reassigned
```

## JavaScript Operators

- **Arithmetic Operators** → `+ - * / % **`
- **Assignment Operators** → `= += -= *= /=`
- **Comparison Operators** → `== != === !== < > <= >=`
- **String Operators** → `+` (concatenation)
- **Logical Operators** → `&& || !`
- **Ternary Operator** → short if/else.

```js
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
```

## JavaScript Arithmetic

- **Exponentiation**: `**`

```js
let x = 5 ** 2; // 25
```

- **Operator Precedence**: `*` and `/` before `+` and `-`.

```js
let result = 5 + 3 * 2; // 11 (not 16)
```

## JavaScript Assignment

```js
let x = 10; // =
x += 5; // 15
x -= 3; // 12
x *= 2; // 24
x /= 4; // 6
x %= 5; // 1
x **= 3; // 1^3 = 1
```

## JavaScript Data Types

- **String**: `"Hello"`
- **Number**: `42`, `3.14`
- **BigInt**: `12345678901234567890n`
- **Boolean**: `true`, `false`
- **Undefined**: not assigned yet
- **Null**: empty value
- **Object**: container for data
- **Array**: ordered list of values
- **Date**: date/time object

## JavaScript Functions

- **Syntax**:

```js
function greet(name) {
  return "Hello " + name;
}
```

- **Invocation**:

```js
greet("Ali"); // "Hello Ali"
```

- **Return** → sends value back.

<details>
<summary>Arrow Functions (ES6+)</summary>

- Shorter syntax for functions.

```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

- If single parameter, parentheses optional.

```js
const square = (x) => x * x;
console.log(square(4)); // 16
```

- For multiple statements, use `{}` and `return`.

```js
const multiply = (a, b) => {
  let result = a * b;
  return result;
};
console.log(multiply(3, 4)); // 12
```

</details>

## JavaScript Objects

- Objects group properties & methods.

```js
let person = {
  name: "Sara",
  age: 25,
  greet: function () {
    console.log("Hi, " + this.name);
  },
};
person.greet();
```

<details>
<summary>Accessing Properties</summary>

- Dot notation: `obj.prop`
- Bracket notation: `obj["prop"]`
</details>

## JavaScript Strings

- **Length**:

```js
let text = "Hello";
console.log(text.length); // 5
```

- **Escape Characters**:

  - `\n` → New Line
  - `\t` → Tab
  - `\\` → Backslash

```js
console.log("Line1\nLine2");
```

## JavaScript Random

- Generate random numbers with `Math.random()`.

```js
let num = Math.random(); // 0 to <1
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice); // 1 to 6. 6 is inclusive
```

<details>
<summary> Test Your Understanding</summary>

What is the range of the randomNum in of the following code?

```js
let randomNum = Math.floor(Math.random() * 10) - 5;
console.log(randomNum);
```

## JavaScript Comparisons

- Use comparison operators:

```js
5 == "5"; // true
5 === "5"; // false
10 > 3; // true
```

## JavaScript If / Else

```js
let age = 18;
if (age < 18) {
  console.log("Minor");
} else {
  console.log("Adult");
}
```

## JavaScript Switch

```js
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apples are red");
    break;
  case "banana":
    console.log("Bananas are yellow");
    break;
  default:
    console.log("Unknown fruit");
}
```

## JavaScript Loops

### For Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### While Loop

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Break / Continue

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // skip
  if (i === 4) break; // stop
  console.log(i);
}
```

<details>
<summary>Test Your Understanding</summary>
What is the output of the following code?

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

</details>

## JavaScript String Methods

- `replace()`, `replaceAll()` → modify text.
- `toUpperCase()`, `toLowerCase()`
- `trim()`, `trimStart()`, `trimEnd()`
- `padStart()`, `padEnd()`
- `charAt()`, `charCodeAt()`
- `slice()`, `substring()`, `substr()` → extract parts.
- `split()` → convert to array.

```js
let str = " Hello World ";
console.log(str.trim()); // "Hello World"
console.log(str.slice(1, 5)); // "Hell"
```

<details>
<summary>More on Slicing</summary>

- `slice(start, end)` → extracts from start to end-1. Negative indices count from end.
- `substring(start, end)` → similar to slice, but swaps if start > end. Negative indices treated as 0. No negative indexing.
- `substr(start, length)` → extracts length characters from start.

</details>

<details>
<summary>Slice Example</summary>

```js
let text = "Hello, World!";
console.log(text.slice(7, 12)); // "World"
console.log(text.slice(-6, -1)); // "World"
console.log(text.substring(7, 12)); // "World"
console.log(text.substr(7, 5)); // "World"
```

</details>

<details>
<summary>Split Example</summary>

```js
let csv = "red,green,blue";
let colors = csv.split(",");
console.log(colors); // ["red", "green", "blue"]
```

</details>

<details>
<summary>padStart, trim, & replace </summary>

```js
let str = "  Hello  ";
console.log(str.trim()); // "Hello"
console.log(str.padStart(10, "*")); // "***  Hello"
console.log(str.replace("H", "J")); // "  Jello  "
```

</details>

<details> 
<summary>Test Your Understanding</summary>
What is the output of the following code?

```js
let message = "  JavaScript is fun!  ";
console.log(
  message.trim().toUpperCase().replace("FUN", "AWESOME").slice(0, 10)
);
```

</details>

## JavaScript String Templates

- Template literals use backticks `` ` ``.

```js
let name = "Ali";
console.log(`Hello, ${name}!`);
```

- Supports multi-line strings.

## JavaScript Arrays

- **Create**:

```js
let fruits = ["Apple", "Banana", "Mango"];
```

- **Access**:

```js
console.log(fruits[0]); // Apple
```

- **Change**:

```js
fruits[1] = "Orange";
```

## JavaScript Array Methods

```js
let arr = ["a", "b", "c"];
arr.push("d"); // add to end
arr.pop(); // remove last
arr.shift(); // remove first
arr.unshift("z"); // add to start
console.log(arr.length); // array size
```

<details>
<summary>Test Your Understanding 1</summary>

What is the output of the following code?

```js
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr);
console.log(arr.length);
console.log(arr.pop());
console.log(arr);
```

</details>

<details>
<summary>Test Your Understanding 2</summary>

What is the output of the following code?

```js
let cars = [
  { type: "Volvo", year: 2016, color: "red", options: ["sunroof", "leather"] },
  { type: "Saab", year: 2001, color: "blue", options: ["navigation"] },
  {
    type: "BMW",
    year: 2010,
    color: "black",
    options: ["heated seats", "bluetooth"],
  },
];
console.log(cars[1].options[0]);
console.log(cars[0]["type"]);
```

</details>

## JavaScript Math

- Built-in `Math` object with helpers.

```js
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.trunc(4.9)); // 4
```

<details>
<summary>Test Your Understanding</summary>

What is the output of the following code?

```js
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.ceil(-4.2));
```

</details>
