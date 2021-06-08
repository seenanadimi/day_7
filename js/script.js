// primitive
const title = "string";
const version = 1.0;
const production = false;

let username = "";
let score = 0;
let isVip = true;

//grouping/compound/complex

const array = [];
const object = {};
const users = [];
const user1 = {
  firstName: "James",
  lastName: "James",
  isVip: true,
};

const user2 = {
  firstName: "Joan",
  lastName: "James",
  isVip: true,
};
const user3 = {
  firstName: "James",
  lastName: "James",
  isVip: true
};




const user0 = user3; 
users.push(user0);
users.push(user1);
users.push(user2);
users.push(user3);


// for(let i = 0; i < 2; i++) {
//     console.log(users[i]);
// }

// users.forEach(function(item){
//     console.log(item)
// })

for(let property in user1){
    console.log(property);
    console.log(users[property])
}


let i = 0;


do {
  console.log("i", i);
  i++;
} while (i < 4);

while (i < 4) {
  console.log("i", i);
  i++;
}
const whatIsReturnedForEach = users.forEach(function(user){
    // console.log(user);
    return true;
});
const whatIsReturnedMap = users.filter(function (user) {
//   console.log(user);
return user.isVip;
}).length;
console.log(whatIsReturnedForEach, whatIsReturnedMap)

// user3.isActive = false;
// user3.isVip = false;
// user2.isVip = false;
// users[0].isVip = false;
// users[0].isVip = true;
// console.log(users);
// console.log("user1", user1)
