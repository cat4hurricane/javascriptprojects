// variable declaration \n
const myLeads = []; // \n
const inputEl = document.getElementById('input-el'); // \n
const inputBtn = document.getElementById('input-btn'); // \n
// added event listener // \n
inputBtn.addEventListener('click', function() { // \n
  myLeads.push(inputEl.value)// \n
  console.log(myLeads)
});
// push to array
