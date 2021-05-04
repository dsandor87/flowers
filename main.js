

var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  }, 
  animationWindow = select('#animationWindow'),    
    animData = {
    wrapper: animationWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: true,
  path: 'w1.json',
  rendererSettings: {
    //context: canvasContext, // the canvas context
    //scaleMode: 'noScale',
    //clearCanvas: false,
    //progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
    //hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
  }   
  }, anim, tl;
  
  anim = bodymovin.loadAnimation(animData);
  anim.addEventListener('DOMLoaded', onDOMLoaded);
  anim.setSpeed(0.5);
  anim.bodymovin
  
  function onDOMLoaded(e){
  
  // gsap.timeline()
 
  
  }


  ScrollLottie({
    target: '#animationWindow2',
    path: '2.json', 
    duration: 4, 
    speed: 'medium'
   })
    