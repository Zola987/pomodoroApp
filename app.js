const circle = document.querySelector('.progress_ring_circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
const colorInput = document.querySelector('#color');

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

colorInput.addEventListener('input', () => {
  let color = colorInput.value;
  circle.style.stroke = color;
});

function changeFont() {
  const font = document.querySelector('#font').value;
  console.log(font);
  el.style.fontSize = font;
}
