const about = document.querySelector('.about-link');
let about_div = document.querySelector('.about-header');

const gallery = document.querySelector('.gallery-link')
let gallery_container = document.querySelector('.gallery-header');

const team = document.querySelector('.team-link');
let team_container = document.querySelector('.team-header');

// const team = document.querySelector('team-link');
// let team_container = document.querySelector('.team-header');

const backBtn = document.querySelector('.back-btn');
const nextBtn = document.querySelector('.next-btn');
const gallery_back_btn = document.querySelector('.gallery_back_btn');
const team_back_btn = document.querySelector('.team_back_btn');
let header = document.querySelector('.header');


about.addEventListener('click',()=>{
  about_div.style.transform = 'translateX(-1535px)';
})
gallery.addEventListener('click',()=>{

  gallery_container.style.transform = 'translateX(-3080px)';
})

team.addEventListener('click',()=>{
  console.log('hello');
  team_container.style.transform = 'translateX(-4605px)';
})
backBtn.addEventListener('click',()=>{

  about_div.style.transition = 'transform 1s ease-out';
  about_div.style.transform = 'translateX(1535px)';
})
nextBtn.addEventListener('click',()=>{
  gallery_container.style.transform = 'translateX(-3080px)';
})
gallery_back_btn.addEventListener('click',()=>{

  gallery_container.style.transition = 'transform 1s ease-out';
  gallery_container.style.transform = 'translateX(3070px)';
})
team_back_btn.addEventListener('click',()=>{
  team_container.style.transition = 'transform 1s ease-out';
  team_container.style.transform = 'translateX(4605px)';
})
