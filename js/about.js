const aboutText = document.querySelector(".container");

function updateText() {
  const textReplacement = aboutText.innerHTML;
  const formattedText = textReplacement.replace(/The /g, "Replaced ").replace(/the /g, "replaced ");
  aboutText.innerHTML = formattedText;
  console.log(aboutText);
  console.log(aboutText.innerHTML);
}

setTimeout(updateText, 4000);
