let kaina;
let pristatymas;
let miestas;
let pKaina = 4.99;

do {
  kaina = prompt("Įveskite prekės kainą");
} while (!kaina || isNaN(kaina));

pristatymas = window.confirm("Ar reikalingas pristatymas į namus?") ? 'taip' : 'ne';

if (pristatymas === 'taip') {
  do {
    miestas = prompt("Į kurį miestą reiks pristatyti?");
  } while (!miestas);

  console.log("Prekės kaina: " + kaina + " €");
  console.log("Pristatymas: " + pKaina + " €");
  console.log("Iš viso: " + (Number(kaina) + pKaina).toFixed(2) + "€");
  console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas");
} else {
  console.log("Prekės kaina: " + kaina + " €");
  console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
}
