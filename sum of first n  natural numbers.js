const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
let a=userInput;
let b=parseInt(a);
let c=0
for(i=0;i<=a;i++)
{
    c=c+i;

    
}
console.log(c);
    
})