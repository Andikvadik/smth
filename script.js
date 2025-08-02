function chooseuserchoice(choice) {
  const result= document.getElementById("result");
  result.textContent='Можна було і покраще вибрати! ';
}
function chooseuserchoice(choice) {
  const result = document.getElementById("result");
  const img = document.getElementById("funnyImage");

  result.textContent = `Ти обрав: "${choice}". Можна було і покраще вибрати!`;

  img.classList.add('show-spin');
}

