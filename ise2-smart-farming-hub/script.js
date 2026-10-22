const themeToggle = document.getElementById('themeToggle');
const cropSearch = document.getElementById('cropSearch');
const cropCards = document.querySelectorAll('.crop-card');
const noCrops = document.getElementById('noCrops');
const tipMessage = document.getElementById('tipMessage');
const seedForm = document.getElementById('seedForm');
const plantResult = document.getElementById('plantResult');

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  const darkMode = document.body.classList.contains('dark');
  themeToggle.textContent = darkMode ? '☀️ Theme' : '🌙 Theme';
  themeToggle.setAttribute('aria-label', darkMode ? 'Switch to light theme' : 'Switch to dark theme');
});

cropSearch.addEventListener('input', function () {
  const searchText = cropSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  cropCards.forEach(function (card) {
    const cropName = card.querySelector('h3').textContent.toLowerCase();
    const cropCategory = card.querySelector('.crop-tag').textContent.toLowerCase();
    const cropDescription = card.querySelector('.crop-content').textContent.toLowerCase();

    const matches =
      cropName.includes(searchText) ||
      cropCategory.includes(searchText) ||
      cropDescription.includes(searchText);

    card.hidden = !matches;

    if (matches) {
      visibleCount++;
    }
  });

  noCrops.hidden = visibleCount !== 0;
});



document.querySelectorAll('.crop-tip').forEach(function (button) {
  button.addEventListener('click', function () {
    tipMessage.textContent = button.dataset.tip;
  });
});

seedForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const length = Number(document.getElementById('areaLength').value);
  const width = Number(document.getElementById('areaWidth').value);
  const space = Number(document.getElementById('plantSpace').value);
  if (length <= 0 || width <= 0 || space <= 0) {
    plantResult.textContent = 'Please enter values greater than zero.';
    return;
  }
  const estimate = Math.floor((length * width) / space);
  plantResult.textContent = 'Estimated plants: ' + estimate + ' (' + (length * width).toFixed(2) + ' m² growing area)';
});
