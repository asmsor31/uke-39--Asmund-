console.log("Well, there is a potato here.");

potet = 0;


function mer_potet() {
    potet += 1
    console.log("Du grodde 1 potet.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
}

function mye_mer_potet() {
    potet += 10
    console.log("Du grodde 10 poteter.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
}

function mye_mye_mer_potet() {
    potet += 100
    console.log("Du grodde 100 poteter.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
}



function mindre_potet() {
    potet -= 1
    console.log("Du spiste 1 potet.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
}

function mye_mindre_potet() {
    potet -= 10
    console.log("Du spiste 10 poteter.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
}

function mye_mye_mindre_potet() {
    potet -= 100
    console.log("Du spiste 100 poteter.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
}
tall = Math.floor(Math.random() * 10) + 1;



// MESTEPARTEN AV KODEN UNDER BLE LAGET AV KI. (Jeg småjusterte på tall og variabler.)
function tilfeldig_potet() {
    tilfeldig = Math.floor(Math.random() * 1000) + 1;
    tilfeldig_potet_tall = Math.random() < 0.5 ? tilfeldig : -tilfeldig;
    potet += tilfeldig_potet_tall;
    console.log("Du grodde/spiste " + tilfeldig_potet_tall + " poteter.")
  document.getElementById("poteter").innerHTML = "Du har " + potet + " poteter.";
}