"use strict";
exports.__esModule = true;
//ANCHOR Sample types
// let example1: boolean = true;
// let example2: number = 35;
// let example3: string = "Hello World";

//ANCHOR Multiple Types
// let example4: boolean | number = 35;
//ANCHOR Implicit vs Explicit typing
//Explicit typing
// let example5: number;
// example5 = 35;
//const arrayExample number[] = [1, 3, 4, 5];
//Implicit Typing
//const arrayExample = [1, 3, 4, 5];
//ANCHOR Checking Types
var bear_model_1 = require("./bear.model");
var bear = new bear_model_1.Bear(3);
if (bear instanceof bear_model_1.Bear) {
    console.log("Hello from Bear!");
}
//ANCHOR Type Assertions
