// Creating dates
let date1 = new Date("2024-01-01");
console.log(date1);
let date2 = new Date("January 1, 2024");
console.log(date2);
let date3 = new Date(2024, 0, 1, 11, 35, 3);
console.log(date3);

// Accessing elements from a date
console.log(`Full year: ${date2.getFullYear()}`);
console.log(`Month: ${date2.getMonth() + 1}`);