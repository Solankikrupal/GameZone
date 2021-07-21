const mainFrame = document.querySelector('.main-frame');
const leftFrame = document.querySelector('.leftimg');
const rightFrame = document.querySelector('.right-frame');

const mainFrame_width = mainFrame.clientWidth;
const mainFrame_height = mainFrame.clientHeight;

const leftFrame_width = leftFrame.clientWidth;
const leftFrame_height = leftFrame.clientHeight;

const rightFrame_width = rightFrame.clientWidth;
const rightFrame_height = rightFrame.clientHeight;



leftFrame.addEventListener('mousemove',tileright);
rightFrame.addEventListener('mousemove',tileleft);

function tileright(e){

  const xaxis = e.layerX;
  const yaxis = e.layerY;

  const calrotateX = 100 * ((yaxis - leftFrame_height / 2) / leftFrame_height);

  leftFrame.style.perspective =  "500px";
  leftFrame.style.transform = "scale(1.1)";
  leftFrame.style.transform = 'rotateY('+calrotateX+'deg)';

}
leftFrame.addEventListener('mouseout',()=>{
  leftFrame.style.perspective =  "500px";
  leftFrame.style.transform = "scale(1)";
  leftFrame.style.transform = 'rotateY(0deg)';
})
leftFrame.addEventListener('mouseup',()=>{
  leftFrame.style.perspective =  "500px";
  leftFrame.style.transform = "scale(0.9)";
  leftFrame.style.transform = 'rotateY(0deg)';
})
leftFrame.addEventListener('mouseout',()=>{
  leftFrame.style.perspective =  "500px";
  leftFrame.style.transform = "scale(1.1)";
  leftFrame.style.transform = 'rotateY(0deg)';
})

function tileleft(e){

  const xaxis = e.layerX;
  const yaxis = e.layerY;

  const calrotateX = 100 * ((xaxis - rightFrame_width / 2) / rightFrame_width);

  rightFrame.style.perspective =  "500px";
  rightFrame.style.transform = "scale(1.1)";
  rightFrame.style.transform = 'rotateY('+ (-calrotateX)+'deg)';

}
rightFrame.addEventListener('mouseout',()=>{
  rightFrame.style.perspective =  "500px";
  rightFrame.style.transform = "scale(1)";
  rightFrame.style.transform = 'rotateY(0deg)';
})
rightFrame.addEventListener('mouseup',()=>{
  rightFrame.style.perspective =  "500px";
  rightFrame.style.transform = "scale(0.9)";
  rightFrame.style.transform = 'rotateY(0deg)';
})
rightFrame.addEventListener('mouseout',()=>{
  rightFrame.style.perspective =  "500px";
  rightFrame.style.transform = "scale(1.1)";
  rightFrame.style.transform = 'rotateY(0deg)';
})



















mainFrame.addEventListener('mousemove',tiltFrame);

function tiltFrame(event){

  const xaxis = event.layerX;
  const yaxis = event.layerY;


  const calRotationY = 50 * ((xaxis - mainFrame_width /2 )/ mainFrame_width);
  const calRotationX = - 50 * ((yaxis - mainFrame_height /2 )/ mainFrame_height);

    mainFrame.style.perspective =  "500px";
    mainFrame.style.transform = "scale(1.1)";
    mainFrame.style.transform = 'rotateX('+calRotationX+'deg) rotateY('+calRotationY+'deg)';

}
mainFrame.addEventListener('mouseout',()=>{
  mainFrame.style.perspective =  "500px";
  mainFrame.style.transform = "scale(1)";
  mainFrame.style.transform = 'rotateX(0) rotateY(0)';
})

mainFrame.addEventListener('mousedown',()=>{
  mainFrame.style.perspective =  "500px";
  mainFrame.style.transform = "scale(0.9)";
  mainFrame.style.transform = 'rotateX(0) rotateY(0)';
})

mainFrame.addEventListener('mouseup',()=>{
  mainFrame.style.perspective =  "500px";
  mainFrame.style.transform = "scale(3)";
  mainFrame.style.transform = 'rotateX(0) rotateY(0)';
})
