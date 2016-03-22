window.onload = function() {
  var LOREM_DATA = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  var goAction = document.getElementById('go');

  goAction.onclick = function() {
    var inputData = document.getElementById('input');
    var resultData = document.getElementById('result');
    var result = "";
    resultData.innerHTML = "";

    for (var i = 0; i < +inputData.value ; i++) {
      result += LOREM_DATA[i];
    }

    resultData.innerHTML = result;
  }
}
