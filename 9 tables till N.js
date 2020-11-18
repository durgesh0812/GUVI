const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var a=userInput;
  var r;
  var c=""
for(i=1;i<=a;i++)
  {
   
      r=9*i;
      c+=r+" ";}
      
  console.log(c.trim());
  
 
  

  
});