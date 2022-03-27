// Starter Javascript File 
//document.getElementById("count-el").innerText = 5;

let countEl= document.getElementById("count-el"); //pass-in argument, passing data for the function to use

console.log(countEl);

let count = 0;

function increment() {
	
	count +=1;
	
	countEl.innerText = count;
	
	console.log(count);
	
}

function save() {
	
	console.log(count)
}