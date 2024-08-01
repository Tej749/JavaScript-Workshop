// create a profile
const profile = {
  username: "@tejzn49",
  isFollow: true,
  follower: 234,
  following: 456,
};

console.log(profile);

console.log(profile["follower"]); // print profile

console.log(typeof profile);

console.log(profile.username);

console.log(typeof profile.follower); //check type of data through dot (*) method
console.log(typeof profile["isFollow"]); // check type of data through big bracke [] method

let name = "Ravi Verma";
console.log(name);
console.log(typeof profile["follower"]);
