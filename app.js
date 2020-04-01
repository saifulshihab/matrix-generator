const generate_btn = document.getElementById("generate");
const matrix_box = document.getElementById("matrixes");

generate_btn.addEventListener("click", createMatrix);

function createMatrix() {
  document.getElementById("matrixes").innerHTML = "";
  let i;
  let size = document.getElementById("size").value;
  let sizes = size;
  let center = sizes / 2 + 1;
  if (!sizes) {
    alert("Select matrix size!");
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
      let y = document.createElement("BR");
      matrix_box.appendChild(y);
    }
  }
}

function createYellwoCircle() {
  let x = document.createElement("div");
  x.setAttribute("class", "circle yellowbg");
  matrix_box.appendChild(x);
}
function createGreenCircle() {
  let x = document.createElement("div");
  x.setAttribute("class", "circle greenbg");
  matrix_box.appendChild(x);
}
function createRedCircle() {
  let x = document.createElement("div");
  x.setAttribute("class", "circle redbg");
  matrix_box.appendChild(x);
}
