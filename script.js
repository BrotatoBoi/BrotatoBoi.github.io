$(document).ready(function() {
  $('#download').hide();
})

function switchTab(goToTab) {
  var navDivs = document.getElementsByClassName("navDivs");
  document.getElementsById("debug-text").innerHTML = navDivs;
}
