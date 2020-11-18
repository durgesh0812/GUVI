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
 var b=" "

for(i=1;i<=3;i++)
  {
    
      r=a*i;
     
     
 // console.log(r)
     b+=r+" ";}
      console.log(b.trim());
  

  //end-here
});