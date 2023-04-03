#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numone",
        message: "ENTER 1ST NUMBER",
    },
    {
        type: "number",
        name: "numtwo",
        message: "ENTER 2ND NUMBER",
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "SELECT WHICH OPERATION DO YOU WANT TO PERFORM",
    },
]);
const { numone, numtwo, operator } = answers;
if (numone && numtwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numone + numtwo;
    }
    else if (operator === "-") {
        result = numone - numtwo;
    }
    else if (operator === "*") {
        result = numone * numtwo;
    }
    else if (operator === "/") {
        result = numone / numtwo;
    }
    console.log("YOUR ANSWER IS =", result);
}
else {
    console.log("PLEASE ENTER VALID INPUT");
}
