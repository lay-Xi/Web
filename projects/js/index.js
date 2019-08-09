let randomColor = () => (Math.random() * 255);
let randomOp = () => Math.random();

function setColor() {
  let r = randomColor();
  let g = randomColor();
  let b = randomColor();
  let a = randomOp();

  document.getElementById('content').style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ", " + a + ")";
  setTimeout(setColor, 2000);
}

document.getElementById('content').addEventListener('mouseover', setColor());
