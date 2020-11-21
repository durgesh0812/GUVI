const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let a =userInput[0].split(" ");
 
  let c=parseInt(a[0])-parseInt(a[1]);
 
  if(c%2===0)
  {console.log("even");
  }
  else{console.log("odd");}
    
    
    
    
})