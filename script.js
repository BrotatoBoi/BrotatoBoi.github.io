$(document).ready(function() {
  $('#download').hide();
})

function setup() {
  document.getElementById('download').style.visibility = "hidden";
}

function switchTab(fromId, toId) {
  document.getElementById(fromId).style.visibility = "visible";
  document.getElementById(toId).style.visibility = "hidden";
}
