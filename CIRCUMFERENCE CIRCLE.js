const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var r=userInput;
 var c=2*Math.PI*r;
 var circumference=c.toFixed(2);
  console.log(circumference);

  //end-here
});