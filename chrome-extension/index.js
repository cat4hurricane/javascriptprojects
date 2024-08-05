// variable declaration \n
const myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]; // \n
const inputEl = document.getElementById('input-el'); // \n
const inputBtn = document.getElementById('input-btn'); // \n
// grabbing unordered list and storing in comst variable
const ulEl = document.getElementById("ul-el")

console.log(ulEl)
// added event listener // \n
inputBtn.addEventListener('click', function() { // \n
  myLeads.push(inputEl.value)// \n
  console.log(myLeads)
});
// Render leads in the unordered list using ulEl.textContext
for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}