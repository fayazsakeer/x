const dndToggleButton = document.getElementById('dndToggle');

dndToggleButton.addEventListener('click', () => {
  if (dndToggleButton.classList.contains('active')) {
    dndToggleButton.classList.remove('active');
    dndToggleButton.textContent = 'DND';
    console.log('Do Not Disturb Mode Disabled');
  } else {
    dndToggleButton.classList.add('active');
    dndToggleButton.textContent = 'DND';
    console.log('Do Not Disturb Mode Enabled');
  }
});