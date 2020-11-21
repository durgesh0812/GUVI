const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
		var i,flag=0;
		var number = userInput;

		for(i=2; i <= number/2; i++)
		{
			if(number%i === 0)
			{
				flag = 1;
				break;
			}
		}
		if(flag === 0)
		{
			console.log("Prime");
		}
		else
		{
			console.log("not Prime");
		}
	})
