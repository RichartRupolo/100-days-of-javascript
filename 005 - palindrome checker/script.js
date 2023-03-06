const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  const text = document.querySelector(".input-text").value;

  let lowerCaseText = removeAccents(removeAllSpaces(text.toLowerCase()));

  let reverseText = [...lowerCaseText].reverse().join("");
  console.log(text)
  console.log(lowerCaseText)
  console.log(reverseText)
  if (lowerCaseText == reverseText) {
    result.innerHTML = `${text} is a palindrome`;
  } else {
    result.innerHTML = `${text} is NOT a palindrome`;
  }
}

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function removeAllSpaces(str) {
    return str.replace(/\s/g, "");
  }