function setup() {
  alert("OOga");
  document.getElementById('mainBtn').click()
}

function switchTab(fromId, toId) {
  document.getElementById(fromId).style.display = "block";
  document.getElementById(toId).style.display = "none";
}
