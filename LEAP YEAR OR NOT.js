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
 if((A%4===0)&&(A%100!==0)||(A%400===0))
  console.log("Y");
  else
  console.log("N");

  //end-here
});