let elements = document.querySelectorAll("div > p")
for (let i = 0; i < elements.length; i++) {
    alert ("Text" + i + ": " + elements[i].innerHTML)
  }