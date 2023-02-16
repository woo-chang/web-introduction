function call() {
  var textBox = document.getElementById("name");
  var checked_cnt = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;

  alert(textBox.value + "님, 저와 " + checked_cnt + "개의 취향이 같으시네요!");
}
