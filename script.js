$(document).ready(function() {
  $('#download').hide();
})

function switchTab(fromId, toId) {
  $(fromId).show();
  $(toId).hide();
}
