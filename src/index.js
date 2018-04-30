const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const button = document.getElementsByClassName('btn')[0]
  console.log(button)
  button.addEventListener("click", () => {
    var data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( console.log )
  })
});
