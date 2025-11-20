# Intro to JS Array Functions: filter, map, reduce

JavaScript’s **filter**, **map**, and **reduce** functions are powerful tools for working with arrays in a clean and expressive way. Instead of writing long, step-by-step loops (the _imperative_ style), these functions let you describe _what_ you want to achieve rather than _how_ to do it (the _declarative_ style).

For example,

- `filter` selects items based on a condition,
- `map` transforms each item into something new, and
- `reduce` combines all items into a single value.

This declarative approach leads to code that is shorter, easier to read, and less error-prone—perfect for data-processing tasks like analyzing our unicorns dataset!

# JS Array Functions - Unicorn Exercises

Use `filter`, `map`, `reduce`, and `sort` JS functions to solve each the following independently.

1. Find the male unicorns weigh more than 700 pounds
2. Find the unicorns that have no vampire field
3. Find the unicorns that like apples or carrots
4. Find the female unicorns that either love apples or weigh less than 500 pounds
5. Decrease unicorn Pilot’s number of vampires by 2
6. Add “sugar” to the list of food unicorn Aurora loves to eat
7. Give all of the unicorns vaccine (set vaccinated to be true)
8. Sort the unicorns based on weights decreasingly
9. Sort the unicorns based on the names increasingly, then the number of vampires decreasingly
10. Get the second and third heaviest unicorns
11. Count the number of unicorns who have more than 50 vampires
12. Find the average weight of unicorns that love apples

## Answers

### Question 1

```js
// 1. Find the male unicorns weigh more than 700 pounds
result = unicorns.filter(
  (aUnicorn) => aUnicorn.gender == "m" && aUnicorn.weight > 700
);
console.log(result);
```

The filter function takes a callback function that returns a boolean value. If the callback function returns true, the element is included in the result array. Otherwise, it is excluded. Notice that the arrow function does not have curly braces. This is because the function is a one-liner. Since the function is a one-liner, the return keyword is not needed. It is implicit in this case. If the function had more than one line, curly braces would be needed.

### Question 2

```js
// 2. Find the unicorns that have no vampire field
result = unicorns.filter((aUnicorn) => {
  if (aUnicorn.vampires == undefined) return aUnicorn;
});
console.log(result);
```

Similar to the previous question, the filter function is used to filter out the unicorns that have no vampire field. The callback function checks if the vampires field is undefined. If it is, the unicorn is included in the result array.

### Question 3

```js
// 3. Find the unicorns that like apples or carrots
const result = unicorns.filter(
  (aUnicorn) =>
    aUnicorn.loves.includes("carrot") || aUnicorn.loves.includes("apple")
);
console.log(result.length); // 8
```

Again, the filter function is used to filter out the unicorns that like apples or carrots. The callback function checks if the loves field includes either 'carrot' or 'apple'. If it does, the unicorn is included in the result array.

The console.log statement prints the length of the result array, which is the number of unicorns that like apples or carrots. Notice that the return number is less than 12 which is the total number of unicorns.

One last thing to note is that the includes function is used to check if an array includes a certain value. If the value is found, the function returns true. Otherwise, it returns false.

### Question 4

```js
// 4. Find the female unicorns that either love apples or weigh less than 500 pounds
const result = unicorns.filter(
  (aUnicorn) =>
    aUnicorn.gender == "f" &&
    (aUnicorn.loves.includes("apple") || aUnicorn.weight < 500)
);
console.log(result); //3
```

### Question 5

```js
// 5. Decrease unicorn Pilot’s number of vampires by 2
const unicorns = unicorns.map((aUnicorn) => {
  if (aUnicorn.name == "Pilot") {
    aUnicorn.vampires -= 2;
  }
  return aUnicorn;
});
console.log(unicorns);
```

In this solution, the `map` function is used to iterate over the unicorns array. The callback function checks if the unicorn's name is "Pilot". If it is, the number of vampires is decreased by 2. The function then returns the updated unicorn object. Since the `return` keyword is applied for each unicorn, the `map` function returns a new array with the updated unicorn objects. Again, the original array is not mutated.

### Question 5 Again

```js
// 5. Decrease unicorn Pilot’s number of vampires by 2
const unicorns = unicorns.map((aUnicorn) => {
  if (aUnicorn.name == "Pilot") {
    aUnicorn = { ...aUnicorn, vampires: aUnicorn.vampires - 2 };
  }
  return aUnicorn;
});
console.log(unicorns);
```

You may also use the spread operator to create a new object with the updated value. The spread operator, `...`,copies all the properties of the original object. In this case, the vampires property, if exists, is updated with the new value. Otherwise, the a new property is added to the object.

### Question 6

```js
// 6. Add “sugar” to the list of food unicorn Aurora loves to eat
unicorns = unicorns.map((aUnicorn) => {
  if (aUnicorn.name == "Aurora") {
    aUnicorn.loves.push("sugar");
  }
  return aUnicorn;
});
console.log(unicorns);
```

In this solution, the `map` function is used to iterate over the unicorns array. The callback function checks if the unicorn's name is "Aurora". If it is, the "sugar" string is added to the loves array. The function then returns the updated unicorn object. We used the `push` function to add the new value to the array. The `push` function adds the new value to the end of the array.
The order here does not matter, but if you want to add `sugar` to the beginning of the array, you can use the `unshift` function.

### Question 6 Again

```js
// 6. Add “sugar” to the list of food unicorn Aurora loves to eat
unicorns = unicorns.map((aUnicorn) => {
  if (aUnicorn.name == "Aurora") {
    aUnicorn.loves = [...aUnicorn.loves, "sugar"];
  }
  return aUnicorn;
});
console.log(unicorns);
```

Again, using the spread operator, `...`, we can create a new array with the updated value. In this case, the "sugar" string is added to the end of the loves array.

### Question 7

```js
// 7. Give all of the unicorns vaccine(set vaccinated to be true)
let unicorns = require("./data.js");

unicorns = unicorns.map((aUnicorn) => {
  aUnicorn.vaccinated = true;
  return aUnicorn;
});
console.log(unicorns);
```

### Question 7 Again

```js
let unicorns = require("./data.js");
unicorns = unicorns.map((aUnicorn) => {
  return {
    ...aUnicorn,
    vaccinated: true,
  };
});
console.log(unicorns);
```

### Question 8

```js
// 8. Sort the unicorns based on weights decreasingly
unicorns = unicorns.sort((a, b) => {
  if (a.weight > b.weight) return -1;
  else return +1;
});
console.log(unicorns);
```

In JS, the `sort` function is used to sort an array. The `sort` function takes a callback function that compares two elements of the array. If the callback function returns a negative number, the first element is placed before the second element. If the callback function returns a positive number, the second element is placed before the first element. If the callback function returns 0, the order of the elements is unchanged.

### Question 9

```js
// 9. Sort the unicorns based on the names increasingly, then the number of vampires decreasingly

unicorns = unicorns.sort((a, b) => {
  if (a.name == b.name) {
    if (a.vampires > b.vampires) return -1;
    else return +1;
  } else if (a.name < b.name) return -1;
  else return +1;
});
console.log(unicorns);
```

In this solution, the `sort` function is used to sort the unicorns array. The callback function compares two elements of the array. If the names of the two unicorns are the same, the function compares the number value of vampires to break the tie. If the names are different, the function compares the names. Remember, The function returns a negative number if the first element should be placed before the second element. It returns a positive number if the second element should be placed before the first element. If the two elements are equal, the function returns 0.

### Question 10

```js
// 10. Get the second and third heaviest unicorns
unicorns = unicorns.sort((a, b) => {
  if (a.weight > b.weight) return -1;
  else return +1;
});
console.log(unicorns.slice(1, 3));
```

The `slice` function is used to extract a portion of an array. The first argument is the starting index, and the second argument is the ending index. The ending index is not included in the result. In this case, the `slice` function extracts the second and third elements of the sorted array.

### Question 11

```js
// 11. Count the number of unicorns who have more than 50 vampires

const result = unicorns.filter((u) => u.vampires > 50);
console.log(result.length);
```

Simply using the `length` property of the result array will give you the number of unicorns who have more than 50 for vampires.

### Question 12

```js
// 12. Find the average weight of unicorns that love apples
const love_apples_arr = unicorns.filter((u) => u.loves.includes("apple"));
console.log(love_apples_arr);

sum = 0;
for (let i = 0; i < love_apples_arr.length; i++) {
  sum += love_apples_arr[i].weight;
}

console.log(sum / love_apples_arr.length);
```

A simple for loop is used to calculate the sum of the weights of the unicorns that love apples. The sum is then divided by the number of unicorns that love apples to get the average weight.

### Question 12 Again

```js
// 12. Find the average weight of unicorns that love apples
const love_apples_arr = unicorns.filter((u) => u.loves.includes("apple"));

sum = 0;
for (x of love_apples_arr) {
  sum += x.weight;
}

console.log(sum / love_apples_arr.length);
```

The `for...of` loop is used to iterate over the `love_apples_arr` array. Using the `for...of` loop is more concise and easier to read than the traditional `for` loop.

### Question 12 Again!

```js
// 12. Find the average weight of unicorns that love apples
const love_apples_arr = unicorns.filter((u) => u.loves.includes("apple"));

result = love_apples_arr.reduce((sum, aUnicorn) => {
  return sum + aUnicorn.weight;
}, 0);

console.log(result / love_apples_arr.length);
```

The JS `reduce` function generally used to reduce an array to a single value. In this case, the `reduce` function is used to calculate the sum of the weights of the unicorns that love apples.

1. The `reduce` function: takes a callback function and an initial value.
2. The callback function takes two arguments, the accumulator and the current value.
3. The accumulator is the value that is returned by the callback function.
4. The current value is the current element of the array.
5. The initial value is the initial value of the accumulator.

In this case, the initial value is 0. The `reduce` function returns the sum of the weights of the unicorns that love apples. Again, The sum is then divided by the number of unicorns that love apples to get the average weight.

Phew! That was a lot of work. But you did it!

## JS Array Functions - Read More

- [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

## JS For Control Structures - Read More

- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
