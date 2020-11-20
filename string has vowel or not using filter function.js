const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let a=userInput[0].split(" ");
    console.log(a);
    let c=a.join()
   console.log(c);
    let d=c.split("")
    console.log(d);
    let check=d.filter(item=>item=="a"||item=="e"||item=="i"||item=="o"||item=="u")
    
    
    
   })