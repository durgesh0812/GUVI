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
  //console.log(a);
  let c=parseInt(a[0])*parseInt(a[1]);
  //console.log(c);
  if(Math.sqrt(c)==a[0])
  {console.log("yes");
  }
  else{console.log("no");}
    
    
    
    
})