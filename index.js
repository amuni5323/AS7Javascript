//  function that takes an array of numbers and returns a new array with each number doubled
 var Arr = [ 31, 41, 51, 61]
 for(var D of Arr){
    console.log(D*2)
}
// Number two print prints each string to the console with a delay
var obj = [S=24, M=708, D=3]
for( var KY in obj ){
    console.log(`${KY}:${obj[KY]}`);
} 
// or 
let person = { name: "Amina", age: 28, profession: "Software Developer" };

function printObjects(obj) {
    for (let KEY in obj) {
        console.log(`${KEY}:${obj[KEY]}`);
    }
}
printObjects(person);





// Number three   print string array  both the key and value
let strings = ["Hello", "World", "This", "is", "JavaScript"];
function printEach(arr) {
    arr.forEach((str, index) => {
        setTimeout(() => {
            console.log(str);
        }, 1000 * index);  });
}
printEach(strings);



