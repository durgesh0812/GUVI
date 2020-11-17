const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var u=userInput[0].split(" ");
  var a=parseInt(u[0]);
  var b=parseInt(u[1]);
  var c=parseInt(u[2]);
  d=(b*b)-(4*a*c);
  var o1=(-b+Math.sqrt(d))/(2*a);
  var o2=(-b-Math.sqrt(d))/(2*a);
  var co1=o1.toFixed(2);
  var co2=o2.toFixed(2);
  console.log(co1);
  console.log(co2);

  //end-here
});