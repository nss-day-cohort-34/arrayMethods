// iterators
// foreach() - iterates the array and preforms an action on each item in the array
// map() - iterates the array and returns a new array from the values

// filter() - iterates the array and returns a new array with values that meet the condition
// find() - iterates the array and returns the first item in the array that meets the condition or returns undefined.

// sorting
// sort()- iterates and sorts the array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). Sorts the values as strings in alphabetical and ascending order by default.

// Returns True or False
// every() -iterates the array and returns true if every item in the array meets the condition and false if it does not.
// some() -iterates the array and returns true if one item in the array meets the condition and false if it does not.
// includes()- iterates the array and returns true if the array includes a certain element and false if it does not.

// reduce - iterates the array and preforms an action on each item in the array and reduces the array to a single value

const createAnimal = (
  stuffingMaterial,
  furMaterial,
  eyeballMaterial,
  color,
  hasClothing,
  species,
  price
) => {
  return {
    material: {
      stuffing: stuffingMaterial,
      fur: furMaterial,
      eyeball: eyeballMaterial
    },
    color: color,
    hasClothing: hasClothing,
    species: species,
    price: price
  }
}

const diggy = createAnimal(
  "cotton",
  "wool",
  "felt",
  "goldenrod",
  false,
  "Iguana",
  109
)

const sonic = createAnimal(
  "beans",
  "tortilla",
  "human",
  "fuschia",
  true,
  "Hedgehog",
  200
)

const barry = createAnimal(
  "acorns",
  "vines",
  "plastic",
  "purple",
  false,
  "Kangaroo",
  223
)

const truthy = createAnimal(
  "bees",
  "snakeskin",
  "coal",
  "green",
  true,
  "Honey Badger",
  49
)

const jeff = createAnimal(
  "grass",
  "bark",
  "giraffe",
  "teal",
  false,
  "Giraffe",
  1
)

const tom = createAnimal(
  "feathers",
  "peanut butter",
  "chocolate chips",
  "seadfoam green",
  false,
  "Duck",
  5
)

const animals = [tom, jeff, sonic, barry, truthy, diggy]
console.log("animals: ", animals)

// if the hasClothing property value is true change it to false and if false change to true for each item in the array.

// return a new array of just colors called animalColors

// return a new array of just prices called animalPrices

// return a new array of animals where the price is over 100

// return the animal that has coal for eyeballs.

// sort animalColors alphabetically

// sort the animalPrices

// return the sum of animalPrices


