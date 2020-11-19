const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var a=userInput[0].split(" ");
       var b=parseInt(a[0]);
    var c=parseInt(a[1]);
    var d=parseInt(a[2]);
    var e=(b*c)%d;
    console.log(e)
;    
    
    
})
