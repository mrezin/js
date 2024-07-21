import fs from 'node:fs/promises';

let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`

console.log(`Hello ${firstName} ${lastName}`);
let sum = 1+2;
let numYearsEmployment = 6;

const data = JSON.stringify({});
fs.writeFile("./file.json", data);
