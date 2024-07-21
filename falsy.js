const isTruthy = (valName, exp) => {
    console.log(`${valName}: ${Boolean(exp)}`);
}

//Numbers
isTruthy("val1", 0);
isTruthy("val2", 1);
isTruthy("val3", -1);
isTruthy("val4", NaN);
isTruthy("val5", 0n);

// Boolean, Null and undefined
isTruthy("val6", undefined);
isTruthy("val7", null);
isTruthy("val8", true);

// Strings
isTruthy("val9", "");
isTruthy("val10", "Hi");
isTruthy("val11", "false");

// Objects
isTruthy("val12", {});
