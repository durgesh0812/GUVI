const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var length=userInput[0];
 var breath=userInput[1];
 var a=length*breath
 var area=a.toFixed(2);
  console.log(area);

  //end-here
});