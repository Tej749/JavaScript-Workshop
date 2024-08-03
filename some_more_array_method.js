/*
    Some More Array Methods:
    Map Method:
        Creates a new array withe result of some operation. The value its callback return are used to form new array.

        arr.map(callbackFnx(value, index, array))

        let newArr = arr.map((val) => {
            return val * 2;
            })
*/

let num = [2, 4, 6, 8, 10, 12];

let newArray = num.map((val) => {
  return val;
});
console.log(newArray);
console.log(num);
