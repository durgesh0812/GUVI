const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const userInput = [];inp.on("line", (data) => {userInput.push(data);
    
});
inp.on("close", () => {
    //start-hereconsole.log(userInput);//end-here})
    var a=userInput[0].split(" ");
   
    var c=+a[0];
    var d=+a[1];
    var small=Math.min(c,d);
    console.log(small);
})