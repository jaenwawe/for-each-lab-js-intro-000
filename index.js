function iterativeLog(array)


array.forEach(iterate)




function iterate(array,callback)



function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
 
var animals = ["dog", "cat", "squirrel"];
 
doToElementsInArray(animals, changeCompletely);

