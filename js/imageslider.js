const leftGallery = document.querySelector('.left-frame');
const images = document.querySelectorAll('.left-frame img');
const leftBtn = document.querySelector('.back');
const size = images[0].clientWidth;
// 
// leftBtn.addEventListener('click',()=>{
//   images.forEach((image,item)=>{
//     image[item].style.transform = 'translateX('+ -(size)+'px)';
//   })
// })
//
//
//
//


















// let counter = 1;
//
//   leftGallery.style.transform = 'translateX('+ -(size * counter )+'px)';
//
// leftBtn.addEventListener('click',()=>{
//   leftGallery.style.transition = 'transform 0.5s ease-in'
//   leftGallery.style.transform = 'translateX('+ -(size * counter )+'px)';
//   leftGallery.addEventListener('transitionend',()=>{
//     if(images[counter].id === 'lastClone'){
//       leftGallery.style.transition = 'none';
//       counter = images.length - 2;
//       leftGallery.style.transform = 'translateX('+ -(size * counter )+'px)';
//     }
//     else if(images[counter].id === 'firstClone'){
//       leftGallery.style.transition = 'none';
//       counter = images.length - counter;
//         leftGallery.style.transform = 'translateX('+ -(size * counter )+'px)';
//     }
//   })
//   counter++;
// })
