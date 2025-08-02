function chooseuserchoice(choice) {
  const result = document.getElementById("result");
  const img = document.getElementById("funnyimage");

  result.textContent = `Ти обрав: "${choice}". Можна було і покраще вибрати!`;

  img.classList.add('show-spin');
}

