const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var a=userInput[0];
    
    if(a%7===0)
    {
     console.log("yes")
     
    }
else
{console.log("no");}
    
})
