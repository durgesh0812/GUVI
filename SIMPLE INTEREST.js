const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var u=userInput[0].split(' ');
  var p=u[0];
  var t=u[1];
  var r=u[2];
  var s=(p*t*r)/100;
  var si=s.toFixed(2);

  console.log(si);

  //end-here
});