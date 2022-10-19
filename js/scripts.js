function hideOrShow() {
  let drinkMenu = document.getElementById("drinks");
  drinkMenu.setAttribute("class", "hidden"); //this clears previous results

  let under21message = document.getElementById("under-21");
  under21message.setAttribute("class", "hidden"); //this clears previous results

  const age = parseInt(document.querySelector("input#age").value);
  const ageBool = age > 21;

  if (ageBool) {
    drinkMenu.removeAttribute("class");
  } else if (age === 21) {
      alert("Drink responsibily!")
      drinkMenu.removeAttribute("class");
  } else {
      under21message.removeAttribute("class");
  }
}

function submitAge() {
  const form = document.querySelector("form");

  form.onsubmit = function(e) {
    e.preventDefault();
    hideOrShow();
  }
}

window.onload = function() {
  submitAge();
}