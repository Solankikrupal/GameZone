document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide',{
    rewind:"true",
    perPage:3,
    gap:20,
    perMove:1,
    fixedwidth:100,
    focus:'center',
    drag:true,
    startIndex:3,
    autoplay:"true",
    pagination:false,
    interval : 1000,
    pauseOnHover:true,
    resetProgress: true,
    keyboard:true,
  } ).mount();
} );
