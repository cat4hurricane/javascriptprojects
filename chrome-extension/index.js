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
// log out the items in the myLeads array using a for loop
for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i])
}