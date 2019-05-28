var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"]

<<<<<<< HEAD
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array) {
  return array[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
  
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
=======
function addElementToBeginningofArray(array, element) {
  var fruits = ["orange", "lemon"];
  fruits = ["strawberry", ...fruits];
  return fruits
}

function destructivelyAddElementToBeginningofArray(array, element) {
  var consecutive = [ 1, 2, 3, 4]
  return consecutive[0] = 0
>>>>>>> 4b16c74b69f991208625739ef35d688cdca62084
}