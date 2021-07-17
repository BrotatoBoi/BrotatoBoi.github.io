$(document).ready(function() {
  switchTab("#main");
})

function switchTab(goToTab) {
  document.getElementsByClassName("navDivs").style.visibility = 'hidden';
  document.getElementsById(goToTab).style.visibility = 'visible';
}
