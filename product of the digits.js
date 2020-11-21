const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
		
	let number = userInput;
    let a=number[0].split("")          
let p=1;

for(let i=0;i<a.length;i++)

    {var nu=parseInt(a[i]);
    p*=nu;}
    console.log(p);
})

