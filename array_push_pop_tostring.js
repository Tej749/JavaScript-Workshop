/* 
Array in JS:
    push() : add to end
    pop() : delete from end & return
    toString() : converts array to string 
    concat() : join mulitple arrays & return result
    unshift() : add to start
    shift() : delete from start & return 
    slice() : returns a piece of the array; slice(start_idx, end_idx)
    splice() : change original array (add, remove, replace)

*/
// push():

let vegetable = ["potatoes", "cauliflower", "onion", "jinger"];
vegetable.push("brinjal");
vegetable.push("maze", "lemon", "cucumber", "pumkin");
console.log(vegetable);
console.log(vegetable.length);

// pop() : delete from end & return

let biscuit = ["oreo", "glucose", "dreamlight", "goodday"];
console.log(biscuit.pop());
console.log(biscuit);

// toString(): converts array to srings.

let color = ["red", "green", "blue", "pink"];
let data = color.toString();
console.log(data);

// concat() : join multiple arrays & returns result
let a = ["red", "green", "pink"];
let b = ["cement", "bricks", "mud"];
let c = ["labour", "contractor"];

common_obj = a.concat(b, c);
console.log(common_obj);

// Unshift() : add to start
let chocolate = ["cadbury", "dair-milk", "white rabbit"];
chocolate.unshift("orange toffy");
console.log(chocolate);

// shift() : delete from the start & return

let del_choco = chocolate.shift();
console.log.apply(del_choco);

// slice() : return a piece of the array
let country = ["Nepal", "China", "Russai", "Ukrain", "England"];
let slice_country = country.slice(1, 4);
console.log(slice_country);

/* 
splice() : change original array (add, remove, replace)
    splice(start_idx, delCount, newEl1..)
*/
let point = [34, 56, 67, 90, 23];
point.splice(2, 2, "Ram", "Shyam");
console.log(point);

let stock = ["nifra", "chl", "nic", "namaste"];
stock.splice(0, 1, "ntc");
console.log(stock);
