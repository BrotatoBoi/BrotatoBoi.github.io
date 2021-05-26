function setup() {
  document.getElementById('homeBtn').click();
}

function switchTab(fromId, toId) {
  document.getElementById(fromId).style.display = "block";
  document.getElementById(toId).style.display = "none";
}
