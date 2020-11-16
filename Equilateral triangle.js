const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const userInput = [];inp.on("line", (data) => {userInput.push(data);
    
});
inp.on("close", () => {
    //start-hereconsole.log(userInput);//end-here})
    var a=userInput[0];
    var s=Math.sqrt(3);
    var ar=(1/4)*s*a*a;
    var area=ar.toFixed(2);
    console.log(area);
})
