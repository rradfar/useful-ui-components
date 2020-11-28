const pBar = document.querySelector('.progress');
updateProgressBar(pBar, 67);

function updateProgressBar(progressBar, value) {
  value = Math.round(value); // to deal with situations where value might be something like 68.9783
  progressBar.querySelector('.progress__fill').style.width = `${value}%`;
  progressBar.querySelector('.progress__text').textContent = `${value}%`;
}
