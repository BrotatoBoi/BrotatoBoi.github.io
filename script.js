$(document).ready(function() {
  switchTab("#main");
})

function switchTab(goToTab) {
  navDivs = document.getElementsByClassName("navDivs");
  
  for(let i=0; i<navDivs.length; i++) {
    navDivs[i].style.visibility = 'hidden';
  }
  
  document.getElementsById(goToTab).style.visibility = 'visible';
}
