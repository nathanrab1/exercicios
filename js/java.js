const container = document.getElementById('container');
const createCirclesBtn = document.getElementById('createCirclesBtn');
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 40; i++) {
        for (let j = 0; j < 30; j++) {
          const circle = document.createElement('div');
          circle.classList.add('circle');
          circle.addEventListener('mouseover', function() {
            circle.classList.add('hovered');
          });
          container.appendChild(circle);
        }
      }    
});
