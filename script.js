$(document).ready(function() {
  $('#download').hide();
})

function switchTab(goToTab) {
  var navDivs = document.getElementsByClassName("navDivs");
  var divs = "";

  for (var i=0; i<navDivs.length(); i++) {
    divs += navDivs[i]
  }

  document.getElementById("debug-text").innerHTML = divs;
}
