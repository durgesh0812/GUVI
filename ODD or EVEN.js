const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var n=userInput;
  if(n===0)
{
  console.log("zero");}
else if(n%2===0)
{console.log("Even");
    
}
else
{console.log("Odd");}
  //end-here
});