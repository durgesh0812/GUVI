const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const userInput = [];inp.on("line", (data) => {userInput.push(data);
    
});
inp.on("close", () => {
    //start-hereconsole.log(userInput);//end-here})
var A=userInput[0];
var f=((9/5)*A)+32;
var fa=f.toFixed(2);


console.log(fa);
    
})
