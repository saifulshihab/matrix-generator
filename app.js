var generate_btn = document.getElementById("generate");
var matrix_box = document.getElementById("matrixes");

generate_btn.addEventListener("click", createMatrix);

function createMatrix() {
  document.getElementById("matrixes").innerHTML = "";
  var i;
  var size = document.getElementById("size").value;
  sizes = size;
  var center = sizes / 2 + 1;
  if (!sizes) {
    console.log("Size not found.");
  } else {
    for (i = 1; i <= sizes; i++) {
      if (i % 2 == 0) {
        if (i == Math.floor(center)) {
          for (j = 1; j <= sizes; j++) {
            if (j == Math.floor(center)) {
              createRedCircle();
            } else if (j % 2 == 0) {
              createYellwoCircle();
            } else {
              createGreenCircle();
            }
          }
        } else {
          for (j = 1; j <= sizes; j++) {
            if (j % 2 == 0) {
              createYellwoCircle();
            } else {
              createGreenCircle();
            }
          }
        }
      } else {
        if (i == Math.floor(center)) {
          for (j = 1; j <= sizes; j++) {
            if (j == Math.floor(center)) {
              createRedCircle();
            } else {
              createGreenCircle();
            }
          }
        } else {
          for (j = 1; j <= sizes; j++) {
            createGreenCircle();
          }
        }
      }
      var y = document.createElement("BR");
      matrix_box.appendChild(y);
    }
  }
}

function createYellwoCircle() {
  var x = document.createElement("div");
  x.setAttribute("class", "circle yellowbg");
  matrix_box.appendChild(x);
}
function createGreenCircle() {
  var x = document.createElement("div");
  x.setAttribute("class", "circle greenbg");
  matrix_box.appendChild(x);
}
function createRedCircle() {
  var x = document.createElement("div");
  x.setAttribute("class", "circle redbg");
  matrix_box.appendChild(x);
}
