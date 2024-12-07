const dndToggleButton = document.getElementById('dndToggle');

dndToggleButton.addEventListener('click', () => {
  if (dndToggleButton.classList.contains('active')) {
    dndToggleButton.classList.remove('active');
    dndToggleButton.textContent = 'DND';
    dndToggleButton.innerHTML = `<i class="bi bi-dash-circle"></i>DND`
    console.log('Do Not Disturb Mode Disabled');
  } else {
    dndToggleButton.classList.add('active');
    dndToggleButton.textContent = 'DND';
    dndToggleButton.innerHTML = `<i class="bi bi-dash-circle"></i>DND`

    console.log('Do Not Disturb Mode Enabled');
  }
});
function updateDateTime() {
  const now = new Date();
  document.getElementById('current-date').textContent = now.toLocaleDateString();
  document.getElementById('current-time').textContent = now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);

// Toggle Online/Offline status
function toggleStatus() {
  const statusDot = document.getElementById('status-dot');
  const statusLabel = document.getElementById('status-label');
  if (statusLabel.textContent === "ONLINE") {
    statusLabel.textContent = "OFFLINE";
    statusDot.classList.remove('status-online');
    statusDot.classList.add('status-offline');
  } else {
    statusLabel.textContent = "ONLINE";
    statusDot.classList.remove('status-offline');
    statusDot.classList.add('status-online');
  }
}