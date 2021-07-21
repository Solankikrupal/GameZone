function scrollpage(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  // console.log(target);
  // console.log(targetPosition);
  // console.log(startPosition);
  // console.log(distance);
  var startTime = null;

  function animation(currentTime) {
    // console.log('animation')
    // console.log('before ct '+currentTime);
    if (startTime === null) {
      startTime = currentTime;
    }
    // console.log('after ct '+currentTime);
    // console.log('start time '+startTime);
    var timeElapsed = currentTime - startTime;
    // console.log('timeElapsed '+timeElapsed);
    var run = ease(timeElapsed,startPosition,distance,duration);
    window.scrollTo(0,run);
    if (timeElapsed<duration){
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  requestAnimationFrame(animation);

}


var teamBtn = document.querySelector('.down-arrow');

teamBtn.addEventListener('click',()=>{

  scrollpage('#join',1000);

})
