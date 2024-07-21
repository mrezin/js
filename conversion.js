let strValue = "Hi";
console.log(typeof(strValue));
let numValue = 1;
console.log(typeof(numValue));

// join a non-string value in a string
let age = 41;
let firstName = "David";
console.log(`${firstName} is ${age} y.o.`);

// converting a string to a number
let ageString = "41";
let ageNum = Number(ageString);
console.log(typeof(ageNum));

// non-a-number
let ageString2 = "fourty-one";
let ageNum2 = Number(ageString2);
console.log(`Age string 2: ${ageNum2}`);
console.log(`Is Invalid: ${isNaN(ageNum2)}`);

// booleans
let str1 = "Hi";
let val1;
console.log(`String to boolean: ${Boolean(str1)}, Undef to boolean: ${Boolean(val1)}`);

//JSON
let obj3 = {
    firstName: "John",
    lastName: "Doe",
    isActive: true,
    startDate: new Date("January 1, 2022"),
    vactionDays: 14
};
console.log(`JSON: ${JSON.stringify(obj3)}`);

let obj4 = `{
    "firstName":"John",
    "lastName":"Doe",
    "isActive":true,
    "startDate":"2021-12-31T16:00:00.000Z",
    "vactionDays":14
}`;
console.log(`Parsed: ${JSON.parse(obj4).firstName}`);
