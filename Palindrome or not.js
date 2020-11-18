const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var string =userInput
  var a=string[0].split("");
   
  var b=a.reverse();
    var c=b.join("");
 
 if(string==c)
 console.log("1");
 else{console.log("0");}
  //end-here
});