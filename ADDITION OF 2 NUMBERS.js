const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const userInput = [];inp.on("line", (data) => {userInput.push(data);
    
});
inp.on("close", () => {
    //start-hereconsole.log(userInput);//end-here})
var a=+userInput[0];
var b=+userInput[1];
var c=a+b;
console.log(c);
    
})