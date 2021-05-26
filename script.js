function setup() {
  document.getElementById('download').style.display = "none";
}

function switchTab(fromId, toId) {
  document.getElementById(fromId).style.display = "block";
  document.getElementById(toId).style.display = "none";
}
