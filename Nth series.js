const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const userInput = [];inp.on("line", (data) => {userInput.push(data);
    
});
inp.on("close", () => {
    //start-hereconsole.log(userInput);//end-here})
   var a=userInput;
  
   if(a<0)
   {console.log("NEGATIVE");}
   else if(a=='0')
   {console.log("0");}
       else{
       var b=a*a;
    console.log(b);}
})