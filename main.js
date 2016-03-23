window.onload = function() {
  var LOREM_DATA = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";
  var goAction = document.getElementById('go');

  /* Describe function that blocks invalid input data */
  document.getElementsByTagName('input')[0].onkeypress = function(e) {

    e = e || event;

    if (e.ctrlKey || e.altKey || e.metaKey) return;

    var chr = getChar(e);

    if (chr == null) return;

    if (chr < '0' || chr > '9') {
      return false;
    }

  }

  function getChar(event) {
    if (event.which == null) {
      if (event.keyCode < 32) return null;
      return String.fromCharCode(event.keyCode) // IE
    }

    if (event.which != 0 && event.charCode != 0) {
      if (event.which < 32) return null;
      return String.fromCharCode(event.which)
    }

    return null;
  }
  /* <--end--> */

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
