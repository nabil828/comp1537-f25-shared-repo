// let unicorns = require('./data.js')
// // console.log(unicorns.length);

// //1. Find the male unicorns weigh more than 700 pounds
// // Imperative Programming
// // const result = [];
// // for (let i = 0; i < unicorns.length; i++) {
// //   if (unicorns[i].weight > 700 && unicorns[i].gender == "m")
// //     result.push(unicorns[i])
// // }
// // console.log(result.length);
// // console.log(result);

// // Declarative Programming
// // filter-map-reduce
// // const result = unicorns.filter(
// //   (aUnicorn) => {
// //     if (aUnicorn.weight > 700 && aUnicorn.gender == "m")
// //       return true
// //   }
// // )
// // console.log(result.length);
// // console.log(result);


// // 2. Find the unicorns that have no vampire field
// // const result = unicorns.filter(aUnicorn => !aUnicorn.vampires)
// // console.log(result.length);
// // console.log(result);


// // 3. Find the unicorns that like apples or carrots
// // const result = unicorns.filter(
// //   (aUnicorn) => {
// //     if (aUnicorn.loves.includes("apple") || aUnicorn.loves.includes("carrot"))
// //       return true
// //   }
// // )
// // console.log(result.length);
// // console.log(result);


// // 4 Find the female unicorns that either love apples or weigh less than 500 pounds
// // const result = unicorns.filter(
// //   (aUnicorn) => {
// //     if (
// //       aUnicorn.gender == "f" &&
// //       (aUnicorn.loves.includes("apple") ||
// //         aUnicorn.weight < 500)
// //     )
// //       return true
// //   }
// // )
// // console.log(result.length);
// // console.log(result);


// //  5. Decrease unicorn Pilot’s number of vampires by 2
// // const result = unicorns.map(
// //   (aUnicorn) => {
// //     if (aUnicorn.name == "Pilot")
// //       aUnicorn.vampires -= 2
// //     return aUnicorn
// //   }
// // )

// // console.log(result);

// // 6. Add “sugar” to the list of food unicorn Aurora loves to eat
// // const result = unicorns.map(
// //   (aUnicorn) => {
// //     if (aUnicorn.name == "Aurora")
// //       aUnicorn.loves.push("sugar")
// //     return aUnicorn
// //   }
// // )
// // console.log(result);

// // const result = unicorns.map(
// //   (aUnicorn) => {
// //     if (aUnicorn.name == "Aurora")
// //       return { ...aUnicorn, loves: [...aUnicorn.loves, "sugar"] }
// //     return aUnicorn
// //   }
// // )
// // console.log(result);

// // 7. Give all of the unicorns vaccine (set vaccinated to be true)
// // const result = unicorns.map(
// //   (aUnicorn) => {
// //     aUnicorn.vaccinated = true
// //     return aUnicorn
// //   }
// // )
// // console.log(result);

// // const result = unicorns.map(
// //   (aUnicorn) => {
// //     // aUnicorn.vaccinated = true
// //     // return aUnicorn
// //     return {...aUnicorn, vaccinated: true}
// //   }
// // )
// // console.log(result);


// // 8. Sort the unicorns based on weights decreasingly
// // const result = unicorns.sort(
// //   (a, b) => {
// //     if (a.weight > b.weight)
// //       return -1
// //     else
// //       return +1
// //   }
// // )
// // console.log(result);

// // const result = unicorns.sort(
// //   (a, b) => b.weight - a.weight
// // )
// // console.log(result);



// // 9. Sort the unicorns based on the names increasingly, then the number of vampires decreasingly
// // const result = unicorns.sort(
// //   (a, b) => {
// //     if (a.name < b.name)
// //       return -1
// //     else if (a.name > b.name)
// //       return +1
// //     else {
// //       // tie
// //       if (a.vampires < b.vampires)
// //         return +1
// //       else
// //         return -1
// //     }
// //   }
// // )
// // console.log(result);

// // 10. Get the second and third heaviest unicorns
// // const result = unicorns.sort(
// //   (a, b) => {
// //     if (a.weight > b.weight)
// //       return -1
// //     else
// //       return +1
// //   }
// // )
// // console.log(result[1]);
// // console.log(result[2]);
// // console.log(result.slice(1,3));


// // 12. Find the average weight of unicorns that love apples
// const love_apples_arr = unicorns.filter((u) => u.loves.includes("apple"));
// console.log(love_apples_arr);

// const sum = love_apples_arr.reduce(
//   (acc, aUnicorn) => {
//     return acc + aUnicorn.weight
//   }, 0)

// console.log(sum / love_apples_arr.length);
