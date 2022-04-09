// Starter Javascript File 
// Taking the id of h2 count-el, telling the js file to grab that

let countEl= document.getElementById("count-el"); //pass-in argument, passing data for the function to use

// telling the JS file to grab the p tag id, save-el to use in a function
let saveEl = document.getElementById("save-el")

console.log(countEl);

let count = 0;

// Increment function, it counts the button presses used by HTML ability onClick, and shows it on screen

function increment() {
	//+= is variable + something, -= is variable - something
	count +=1;
	//textContent works better than innerText, can read everything and is less expensive
	countEl.textContent = count;
	//Show in the console
	console.log(count);
	
}
// save function, it stores what we increment using a button press ability onClick, calling our function then resets
function save() {
	//countStr will show count -, putting the string first
	let countStr = count + " - ";
	//Rendering variable that has count and - in innerText
	//increment countStr using textContext and our P tag save ID, it will show on HTML
	saveEl.textContent += countStr;
	console.log(count);
	// Reset what it shows on screen, textContent is 0
	countEl.textContent = 0;
	//reset the actual count, count is now 0 and no longer increments unless we press the increment button
	count = 0;
}