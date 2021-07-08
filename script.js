$(document).ready(function() {
  $('#download').hide();
})

function switchTab(goToTab) {
  var navDivs = document.getElementsByClassName("navDivs");
  if(navDivs) {
    document.getElementById("#debug-text").innerHTML = navDivs;
  }
}
