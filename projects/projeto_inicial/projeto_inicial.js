// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('form').addEventListener('submit', function(event) {
//         let name = document.querySelector('#name').value;
//         alert('hello, ' + name);
//         event.preventDefault();
//     });
// });

// document.querySelector('#red').addEventListener('click', function() {
//     document.getElementById("circulo").style.backgroundColor = "red";
// });
// document.querySelector('#green').addEventListener('click', function() {
//     document.getElementById("circulo").style.backgroundColor = "green";
// });
// document.querySelector('#blue').addEventListener('click', function() {
//     document.getElementById("circulo").style.backgroundColor = "blue";
// });


const container = document.getElementById('container');
const createCirclesBtn = document.getElementById('createCirclesBtn');



document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 14; j++) {
          const circle = document.createElement('div');
          circle.classList.add('circle');
          circle.addEventListener('mouseover', function() {
            circle.classList.add('hovered');
          });
          container.appendChild(circle);
        }
      }    


});

// createCirclesBtn.addEventListener('click', function () {
//     for (let i = 0; i < 4; i++) {
//       for (let j = 0; j < 14; j++) {
//         const circle = document.createElement('div');
//         circle.classList.add('circle');
//         circle.addEventListener('mouseover', function() {
//           circle.classList.add('hovered');
//         });
//         container.appendChild(circle);
//       }
//     }
//   });