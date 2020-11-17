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
  var t=1;
  for(i=1;i<=a;i++){
      t=t*i;
      
  }

  console.log(t);

  //end-here
});