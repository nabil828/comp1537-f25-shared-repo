
const unicorns = [
  {
    "_id": "641ba4876574593f27ad4323",
    "name": "Horny",
    "dob": "1992-03-13T15:47:00.000Z",
    "loves": [
      "carrot",
      "papaya"
    ],
    "weight": 600,
    "gender": "m",
    "vampires": 63,
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad4324",
    "name": "Aurora",
    "dob": "1991-01-24T21:00:00.000Z",
    "loves": [
      "carrot",
      "grape",
      "sugar"
    ],
    "weight": 450,
    "gender": "f",
    "vampires": 43,
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad4325",
    "name": "Unicrom",
    "dob": "1973-02-10T06:10:00.000Z",
    "loves": [
      "energon",
      "redbull"
    ],
    "weight": 984,
    "gender": "m",
    "vampires": 182,
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad4326",
    "name": "Roooooodles",
    "dob": "1979-08-19T01:44:00.000Z",
    "loves": [
      "apple"
    ],
    "weight": 575,
    "gender": "m",
    "vampires": 99,
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad4327",
    "name": "Solnara",
    "dob": "1985-07-04T09:01:00.000Z",
    "loves": [
      "apple",
      "carrot",
      "chocolate"
    ],
    "weight": 550,
    "gender": "f",
    "vampires": 80,
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad4328",
    "name": "Ayna",
    "dob": "1998-03-07T16:30:00.000Z",
    "loves": [
      "strawberry",
      "lemon"
    ],
    "weight": 733,
    "gender": "f",
    "vampires": 40,
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad4329",
    "name": "Kenny",
    "dob": "1997-07-01T17:42:00.000Z",
    "loves": [
      "grape",
      "lemon"
    ],
    "weight": 690,
    "gender": "m",
    "vampires": 39,
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad432a",
    "name": "Raleigh",
    "dob": "2005-05-03T07:57:00.000Z",
    "loves": [
      "apple",
      "sugar"
    ],
    "weight": 421,
    "gender": "m",
    "vampires": 2,
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad432b",
    "name": "Leia",
    "dob": "2001-10-08T21:53:00.000Z",
    "loves": [
      "apple",
      "watermelon"
    ],
    "weight": 601,
    "gender": "f",
    "vampires": 33,
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad432c",
    "name": "Pilot",
    "dob": "1997-03-01T13:03:00.000Z",
    "loves": [
      "apple",
      "watermelon"
    ],
    "weight": 650,
    "gender": "m",
    "vampires": 55,
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad432d",
    "name": "Nimue",
    "dob": "1999-12-21T00:15:00.000Z",
    "loves": [
      "grape",
      "carrot"
    ],
    "weight": 540,
    "gender": "f",
    "vaccinated": true
  },
  {
    "_id": "641ba4876574593f27ad432e",
    "name": "Dunx",
    "dob": "1976-07-19T01:18:00.000Z",
    "loves": [
      "grape",
      "watermelon"
    ],
    "weight": 704,
    "gender": "m",
    "vampires": 165,
    "vaccinated": true
  }
]

// console.log(unicorns);


const allUniqueFoodItems = []
unicorns.forEach(
  (aUnicorn) => {
    aUnicorn.loves.forEach(
      (aFoodItem) => {
        if (!allUniqueFoodItems.includes(aFoodItem)) {
          allUniqueFoodItems.push(aFoodItem)

          listOfFoodUl.innerHTML += `
            <li class="text-gray-700 p-2 hover:bg-blue-200 hover:text-blue-800 rounded cursor-pointer" onClick="listUnicornsFunction('${aFoodItem}')">
              ${aFoodItem}
            </li>
          `
        }
      }
    )
  }
)
// console.log(allUniqueFoodItems);

function listUnicornsFunction(aFoodItem) {
  const theUnicornsThatLikeTHATfoodItem = unicorns.filter(
    (aUnicorn) => {
      if (aUnicorn.loves.includes(aFoodItem))
        return true
    }
  )

  // console.log(theUnicornsThatLikeTHATfoodItem);
  listOfUnicornsUl.innerHTML = ``
  theUnicornsThatLikeTHATfoodItem.forEach((aUnicorn) => {
    listOfUnicornsUl.innerHTML += `
    <li class="text-gray-700 p-2 hover:bg-green-200 hover:text-green-800 rounded cursor-pointer"  onClick="displayAUnicornDetails('${aUnicorn.name}')">
      ${aUnicorn.name}
    </li>
    `
  })
}

displayAUnicornDetails = function (aUnicornName) {
  const THEUnicornsTHATIamLookingFor = unicorns.find(
    (aUnicorn) => {
      if (aUnicorn.name == aUnicornName)
        return true
    }
  )
  // console.log(THEUnicornsTHATIamLookingFor);

  detailsOfTheUnicornUl.innerHTML = ``
  detailsOfTheUnicornUl.innerHTML += `
  <li class="text-gray-700 p-2  rounded " >
    <span class="font-bold">Name</span>: ${THEUnicornsTHATIamLookingFor.name}
  </li>
  <li class="text-gray-700 p-2  rounded " >
    <span class="font-bold">loves</span>: ${THEUnicornsTHATIamLookingFor.loves}
  </li>
  `
}






