var input = document.getElementById("InputValue");

function getValue (number){
    input.value += number;
}

function clrAll() {
    input.value = "";
}
  
function deleteChar() {
    input.value = input.value.slice(0, -1);
}

function equal() {
    if (input.value) {
      input.value = eval(input.value);
    } else {
      input.value = "syntax error";
    }
  }