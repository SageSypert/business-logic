const add = function(number1, number2) {
  return number1 + number2;
};
const subtract = function(number1, number2) {
  return number1 - number2;
};
const multiply = function(number1, number2) {
  return number1 * number2;
};
const divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("button#add").click(function(event) {
    const number1 = parseInt($("#val1").val());
    const number2 = parseInt($("#val2").val());
    event.preventDefault()
    $("#output").text(add(number1, number2))
  });
  $("button#subtract").click(function(event) {
    event.preventDefault()
    const number1 = parseInt($("#val1").val());
    const number2 = parseInt($("#val2").val());
    $("#output").text(subtract(number1, number2))
  });
  $("button#multipy").click(function(event) {
    event.preventDefault()
    const number1 = parseInt($("#val1").val());
    const number2 = parseInt($("#val2").val());
    $("#output").text(multipy(number1, number2))
  });
  $("button#divide").click(function(event) {
    event.preventDefault()
    const number1 = parseInt($("#val1").val());
    const number2 = parseInt($("#val2").val());
    $("#output").text(divide(number1, number2))
  });
});