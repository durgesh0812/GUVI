const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var A=userInput;
  var m=A*1000;
  var c=A*100000;
  console.log(m);
console.log(c);

  //end-here
});