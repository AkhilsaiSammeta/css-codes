// // // document.querySelector('.color-picker').addEventListener('mousemove', function(event) {
// // //     const rect = event.target.getBoundingClientRect();
// // //     const x = event.clientX - rect.left;
// // //     const y = event.clientY - rect.top;
// // //     const r = Math.floor(x / rect.width * 255);
// // //     const g = Math.floor(y / rect.height * 255);
// // //     const b = Math.floor((r + g) / 2);
// // //     const rgb = `rgb(${r}, ${g}, ${b})`;
// // //     event.target.style.backgroundColor = rgb;
// // //     document.getElementById('red').textContent = `R: ${r}`;
// // //     document.getElementById('green').textContent = `G: ${g}`;
// // //     document.getElementById('blue').textContent = `B: ${b}`;
// // // });
// // document.querySelector('.color-picker').addEventListener('mousemove', function(event) {
// //   const rect = event.target.getBoundingClientRect();
// //   const x = event.clientX - rect.left;
// //   const y = event.clientY - rect.top;
// //   const r = Math.floor(x / rect.width * 255);
// //   const g = Math.floor(y / rect.height * 255);
// //   const b = Math.floor((r + g) / 2);
// //   const rgb = `rgb ${r},${g},${b}`;
// //   event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// //   document.getElementById('color-code').textContent = rgb;
// // });

// let isColorSelected = false;

// document.querySelector('.color-picker').addEventListener('mousemove', function(event) {
//   if (!isColorSelected) {
//     const rect = event.target.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     const r = Math.floor(x / rect.width * 255);
//     const g = Math.floor(y / rect.height * 255);
//     const b = Math.floor((r + g) / 2);
//     const rgb = `rgb(${r},${g},${b})`;
//     event.target.style.backgroundColor = rgb;
//     document.getElementById('color-code').textContent = rgb;
//   }
// });

// document.querySelector('.color-picker').addEventListener('click', function(event) {
//   if (isColorSelected) {
//     isColorSelected = false;
//     event.target.style.backgroundColor = selectedColor;
//   } else {
//     isColorSelected = true;
//     selectedColor = event.target.style.backgroundColor;
//     document.getElementById('color-code').textContent = rgb;
//   }
// });
let selectedColor = '';
let isColorSelected = false;

document.querySelector('.color-picker').addEventListener('mousemove', function(event) {
  if (!isColorSelected) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const r = Math.floor(x / rect.width * 255);
    const g = Math.floor(y / rect.height * 255);
    const b = Math.floor((r + g) / 2);
    const rgb = `rgb(${r},${g},${b})`;
    event.target.style.backgroundColor = rgb;
    document.getElementById('color-code').textContent = rgb;
  }
});

document.querySelector('.color-picker').addEventListener('click', function(event) {
  if (isColorSelected) {
    isColorSelected = false;
    event.target.style.backgroundColor = selectedColor;
  } else {
    isColorSelected = true;
    selectedColor = event.target.style.backgroundColor;
    document.getElementById('color-code').textContent = selectedColor;
  }
});

// Copy color code to clipboard when copy button is clicked
document.getElementById('copy-button').addEventListener('click', function() {
  const colorCode = document.getElementById('color-code').textContent;
  navigator.clipboard.writeText(colorCode).then(function() {
    alert('Color code copied to clipboard: ' + colorCode);
  }, function(err) {
    console.error('Failed to copy color code: ', err);
  });
});
