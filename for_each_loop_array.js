/*
    forEach Loop in Arrays :
    arr.forEach(callBackFunction)
    CallBackFunction : Here, it is a function to execute for each element in the array.

    *A callback is a function passed as an argument to another functions. 
*/
// 1.

let arr = ["nepalgunj", "dang", "surkhet", "pokhara"];

arr.forEach((val) => {
  // for higher order function
  console.log(val); 
});

//2.

let lst = ["cricket", "football", "hockey", "snooker"];
lst.forEach((item, idx) => {
  console.log(item.toUpperCase(), idx);
});
