const name = "Sanjay"
const repoCount = 50

// console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and mu repocpunt is ${repoCount}`)

const gameName = new String('Sanjayaaa-aa')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = " Sanjay "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sanjay.com/sanjay%20pradhan"
console.log(url.replace('%20','-'));

console.log(url.includes('abc'));