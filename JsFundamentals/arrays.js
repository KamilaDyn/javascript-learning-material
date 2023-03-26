const friends = ['Anna', 'Jon', 'Elizabeth'];

const years = new Array(1990, 1985, 1995);

// length of friends, length property

console.log(friends.length);

//last element

const lastFriend = friends[friends.length - 1]; //3-1 = 2 , 2 position

//mutate array , change friend
//primitive values are not mutated, array is not primitive value, we can always change it
friends[2] = 'Alice';

// we cannot sign new values like this, this is illegal
//friends =['Alice', 'Jon', 'Elizabeth']
console.log(friends);

//Array operations
//add elements to the end of teh array
// 1push

const newFriends = friends.push('Michael');
console.log(newFriends); // ['Anna', 'Jon', 'Alice', 'Michael]; //4

// 2. Add element to the beginning to the array
//unshift
friends.unshift('John');
console.log(friends);

// 3.Remove last element from the array
// pop
friends.pop();

//4.Remove first element from the array
// shift
friends.shift();

// 5. Method tells us in which position certain position is element
//if there is no element we will get -1
friends.indexOf('John');

// 6.b. Similar method to indexof Ecma is INCLUDES
//includes() return true or false
//this is testing with strict equality, do not coercion
friends.unshift(25);
friends.includes('25'); // false
friends.includes('John');
