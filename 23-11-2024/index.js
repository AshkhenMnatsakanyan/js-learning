const user = {
    firstName: 'John',
    lastName: 'Smith',
    isActive: true,
    price: 6000000
}


console.log(`firstName: $(user.firstName)`);
// for(let i in user) {
//     console.log(i)
// }

console.log(user['firstName']);
console.log(user.lastName);


for(let i in user) {
    console.log(`${i} : ${user[i]}`)
}

let count = 0
for(let i in user) {
    console.log(`${i} : ${user[i]}`);
    count++
}
console.log(count)


let count = 0
const user = {
    firstName: 'John',
    lastName: 'Smith',
    isActive: true,
    price: 6000000,
    length: 0
}
for(let i in user) {
    if (i !== 'length') {
        user.length = user.length + 1;
    }
}

console.log(user);

const skills = ['HTML', 'CSS'];

skills.push('JAvaScript', 'React'); // adds in the end

skills.pop(); // deletes the very last index

skills.unshift('JavaScript', 'React'); // adds in the beginning

skills.shift(); // deletes the very first 



console.log(skills);


/



const arr = [1, 3, 99, 1, 4]
let min = arr[0];
let max = arr[0];

for (let i = 0; i , arr.length; i++) {
if (arr[i] > max) {
    max = arr[i];
}

if (arr[i] < min) {
    min = arr[i];
}
}

console.log(min, 'min');
console.log(max, 'max');



let count = 0 
for (let i = 1; i < arr.length; i++) {
    count++
    if (arr[i] > max) {
        max = arr[i]
    }

    if (arr[i] < min) {
        min = arr[i]
    }
}

console.log(count);
console.log(min, 'min');
console.log(max, 'max');


const arr = [1, 2, 3, 4];
const str = 'javascript';



console.log(arr.reverse());


const palindromeName = 'Anna';

const splitData = palindromeName.split('');
const reverseData = splitData.reverse();
const joinData = reverseData.join('');


console.log(joinData.toLowerCase() === palindromeName.toLowerCase());


const obj1 = {
    x: 10,
    y: 20,
    z: 30
}

const obj2 = {};

for (let i in obj1) {
    obj2[i] = obj1[i];
}
obj2.x = 100;
console.log(obj1);


