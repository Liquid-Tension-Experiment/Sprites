const walkForever = setInterval(fillSprites, 300);

let count = 0;

function fillSprites() {
  const pixFrame = count % 3;
  count++;

  for (let i = 0; i < 240; i++) {
    spriteArray[i].style.backgroundColor = `${colorArray[pixFrame][i]}`;
  }
}
