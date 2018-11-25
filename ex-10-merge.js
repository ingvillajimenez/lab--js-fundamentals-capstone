/**
 *  merge()
 *
 *  Write a function called `merge()` that takes two objects and
 *  returns a new object with their combined properties & values.
 *
 *  If the two objects have the same property, make sure that you
 *  return the property-values from the object in the 2nd argument.
 *
**/



// ++ YOUR CODE HERE


function merge(firstObj, secondObj) {
  var mergedObj = {};
  for (var property in firstObj) {
      mergedObj[property] = firstObj[property];
  }
  for (var property in secondObj) {
      mergedObj[property] = secondObj[property];
  }
  return mergedObj;
}







// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-10');
  console.log('%cFunction: merge', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// merge(obj1, obj2)
//  should return:
//   {
//     accountActive: true,
//     age: 33,
//     balance: 38832,
//     id: 6288,
//     name: "Shaman Tilroy"
//    }
/* ------------------------------------------------------ */
console.log('TEST-1');

var obj1 = {name: "Shaman Tilroy", age: 33, id: 6288}
var obj2 = {id: 6288, balance: 38832, accountActive: true }

var merged = merge(obj1, obj2)

console.assert(merged.name === "Shaman Tilroy")
console.assert(merged.age === 33)
console.assert(merged.id === 6288)
console.assert(merged.balance === 38832)
console.assert(merged.accountActive === true)



/* ----------------------- TEST-2  ----------------------- */
// merge(obj3, obj4)
//  should return:
// {
//   album: "Wishy Washy",
//   ​artist: "The Riverboat",
//   quantity: 10,
//   released: 1980,
//   title: "How to Wear a Bowtie"
// }
/* ------------------------------------------------------ */
console.log('TEST-2');


var obj3 = {title: "How to Wear a Bowtie", artist: "Showtime", released: 1984 }
var obj4 = {artist: "The Riverboat", released: 1980, album: "Wishy Washy", quantity: 10 }

var merged2 = merge(obj3, obj4)
console.log(merged2);

console.assert( merged2.artist === "The Riverboat" )
console.assert( merged2.released === 1980 )
console.assert( merged2.title === "How to Wear a Bowtie")
console.assert( merged2.quantity === 10 )
