const pixelSheets = [
  "tttttrrrrtttttt" +
    "ttttrrrrrrrrttt" +
    "ttttgggyygytttt" +
    "tttgygyyygyyytt" +
    "tttgyggyyygyyyt" +
    "tttggyyyyggggtt" +
    "tttttyyyyyyyttt" +
    "ttggggrrggttttt" +
    "yyggggrrrgggyyy" +
    "yyytggryrrrggyy" +
    "yyttrrrrrrrttgt" +
    "tttrrrrrrrrrggt" +
    "ttrrrrrrrrrrggt" +
    "tggrrrtttrrrggt" +
    "tgggttttttttttt" +
    "ttgggtttttttttt",

  "ttttrrrrrtttttt" +
    "tttrrrrrrrrrttt" +
    "tttgggyygyttttt" +
    "ttgygyyygyyyttt" +
    "ttgyggyyygyyytt" +
    "ttggyyyyggggttt" +
    "ttttyyyyyyytttt" +
    "tttggrgggtttttt" +
    "ttggggrrggttttt" +
    "ttgggrryrrytttt" +
    "ttggggrrrrrtttt" +
    "ttrggyyyrrrtttt" +
    "tttrgyyrrrttttt" +
    "ttttrrrgggttttt" +
    "ttttgggggggtttt" +
    "ttttggggttttttt",

  "ttttttttttttttt" +
    "ttttttrrrrrtttt" +
    "tttttrrrrrrrrtt" +
    "ttttgggyygytttt" +
    "tttgygyyygyyytt" +
    "tttgyggyyygyyyt" +
    "tttggyyyyggggtt" +
    "tttttyyyyyyyttt" +
    "ttttggggrgtyttt" +
    "tttyggggggyyytt" +
    "ttyyrgggggyyttt" +
    "ttggrrrrrrrtttt" +
    "ttgrrrrrrrrtttt" +
    "tggrrrtrrrttttt" +
    "tgttttgggtttttt" +
    "ttttttggggttttt",
];
colors = {
  t: "transparent",
  r: "rgb(175,46,7)",
  y: "rgb(225,154,13)",
  g: "rgb(90,100,2)",
};

// The 240 divs that will have their color changed
const spriteArray = Array.from(document.getElementsByClassName("pixel"));

// String of characters that represent the sprite are converted to an array of the pixel colors, represented from top-left to bottom-right
const pixelArrays = pixelSheets.map((x) => x.split(""));
const colorArray = pixelArrays.map((x) => x.map((arr) => colors[`${arr}`]));
