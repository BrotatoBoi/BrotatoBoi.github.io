function setup() {
  document.getElementById('download').style.display = "block";
}

function switchTab(fromId, toId) {
  document.getElementById(fromId).style.display = "block";
  document.getElementById(toId).style.display = "none";
}
