let text = "";
let i = 1;

do {
  text += "<br>" + i;
  i++;
} while (i < 11);

document.getElementById("demo_while").innerHTML = text;
