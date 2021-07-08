$(document).ready(function() {
  $('#download').hide();
})

function switchTab(goToTab) {
  var navDivs = document.getElementsByClassName("navDivs")

  for(let i=0; i<navDivs.length; i++) {
    if(navDivs[i] == goToTab) {
	console.log("Yeet")
    }
  }
}
