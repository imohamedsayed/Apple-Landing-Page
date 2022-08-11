let focusedImage = document.getElementById("focusedImage");
let goldIphone = document.getElementById("goldIphone");
let blueIphone = document.getElementById("blueIphone");
let spaceGrayIphone = document.getElementById("spaceGrayIphone");
let roseIphone = document.getElementById("roseIphone");
let redIphone = document.getElementById("redIphone");

goldIphone.onclick = () => {
  document.body.style.backgroundColor = "#f2cb62";
  changeImage(goldIphone.src);
};
blueIphone.onclick = () => {
  document.body.style.backgroundColor = "#accae4";
  changeImage(blueIphone.src);
};
spaceGrayIphone.onclick = () => {
  document.body.style.backgroundColor = "#151515";
  changeImage(spaceGrayIphone.src);
};
roseIphone.onclick = () => {
  document.body.style.backgroundColor = "#eeddc3";
  changeImage(roseIphone.src);
};
redIphone.onclick = () => {
  document.body.style.backgroundColor = "#e60000";
  changeImage(redIphone.src);
};

function changeImage(image) {
  focusedImage.src = image;
}
