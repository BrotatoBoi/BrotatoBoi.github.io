function switchTab(tabID) {
  var navDivs = document.getElementsByClassName('navDiv');
  
  for(let i=0; i<navDivs.length; i++) {
    navDivs[i].style.display = "none";
  }
  
  document.getElementById(tabID).style.display = "block";
}
