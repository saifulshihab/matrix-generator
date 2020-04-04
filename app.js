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
              createCurcle("RED");
            } else if (j % 2 == 0) {              
              createCurcle("YELLOW");
            } else {
              createCurcle("GREEN");
            }
          }
        } else {
          for (j = 1; j <= sizes; j++) {
            if (j % 2 == 0) {
              createCurcle("YELLOW");
            } else {
              createCurcle("GREEN");
            }
          }
        }
      } else {
        if (i == Math.floor(center)) {
          for (j = 1; j <= sizes; j++) {
            if (j == Math.floor(center)) {
              createCurcle("RED");
            } else {
              createCurcle("GREEN");
            }
          }
        } else {
          for (j = 1; j <= sizes; j++) {
            createCurcle("GREEN");
          }
        }
      }
      let y = document.createElement("BR");
      matrix_box.appendChild(y);
    }
  }
}

function createCurcle(color){
  let x = document.createElement("div");
  if(color === "GREEN"){
    x.setAttribute("class", "circle greenbg");
  }else if(color === "YELLOW"){
    x.setAttribute("class", "circle yellowbg");
  }else if(color === "RED"){
    x.setAttribute("class", "circle redbg");
  }else{
    alert("Error");
  }
  matrix_box.appendChild(x);
}
