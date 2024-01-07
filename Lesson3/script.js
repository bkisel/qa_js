//
let a = 5
const b = 6
var c = 7 //

console.log(a + " = let(es6) - variable initialization")
console.log(b + " = const(es6) - Initialization of a constant")
console.log(c + " = var(es5) - variable with a certain range of visibility")


//Data types
let a1 = 10
let a2 = `text ${a1}`
let a3 = 5<7
let a4
let a5 = null 

console.log(typeof a1)
console.log(typeof a2)
console.log(a2)
console.log(typeof a3)
console.log(typeof a4)
console.log(typeof a5)

//TypeCast - change data types
//= - we clearly indicate that something is equal to something or some value
//== - not a strict value check
//=== - strict value checking

//Functions
/*function functionName(parameter1, parameter2, ... parameterN) {
    // Body of the function
    // Here can be code that performs certain actions

    return value; // The function can return a value
}
*/

//the area of the rectangle
function area(l, w){
    console.log(l)
    console.log(w)
    return l*w
}
let res = area(10, 50)
console.log(res)

//Standart
//function abc(){
//    console.log("abc")
//}

//Assigning a function value to a variable
//let b1 = function(){
//    console.log("b1")
//}
// b1()