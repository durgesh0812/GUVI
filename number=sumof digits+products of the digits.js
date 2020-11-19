const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var a=userInput[0].split("");
   
    sum=parseInt(a[0])+parseInt(a[1]);
       product=parseInt(a[0])*parseInt(a[1]);
       totl=sum+product;
     var d=a[0];
    var e=a[1];
   var f=d.concat(e);
   
    if(f==totl)
    console.log("Great");
    else{console.log("no");}
})