const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var A=userInput[0];
var b=A.split(" ").join("");
var c=b.length;

  console.log(c);

  //end-here
});