const orderInput = prompt(`Please enter your Froyo flavor order:`);

const orderArray = orderInput.split(",");
console.log(orderArray);

//ToDo
//Create array with user input
//cycle through array and count each flavor
//whenever a flavor is repeated add 1 to that flavors value count


for(let i = 0; i < students.length; i++) {
  const student = students[i];
  // console.log(student.name);
}


const favoriteCounts = {};
// bunnies: 3, ducks: 2, turtles: 1, cats: 2

// { bunnies: 1 }
// { bunnies: 2 }

const userFavoritesInput = prompt('Put your favorites (repeat based on how much you like it)', 'bunnies,bunnies,bunnies,ducks,ducks,turtles,cats,cats');
const favsArray = userFavoritesInput.split(',');
// console.log(favsArray);

// go through each item
// check if it already exists in the object
  // if it doesn't exist
    // add the key to the object with a count of 1
  // if it already exists
    // add one to the value




const orderInput = {};

def count_repeats(froyo, orderInput):

 count = 0
    for flavors in froyo:
        if flavors == orderInput:
            count += 1
    return count



const froyo = {
  flavorOne: `vanilla`,
  flavorTwo: `strawberry`,
  flavorThree: `coffee`,
};

for (let flavor in froyo) {
  console.log(froyo);
}

const flavorCounts = {};

function countFlavor(flavor) {
  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
}

countFlavor("strawberry");
countFlavor("vanilla");
countFlavor("coffee");

console.log(flavorCounts);

/* function getSum(numbers) {
  // TODO
  //run through numbers in array
  //add them up
  //return the result

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    total = total + currentNum;
  }
  return total; */




/* def count_repeats(obj, user_input):

 count = 0
    for key in obj:
        if key == user_input:
            count += 1
    return count */