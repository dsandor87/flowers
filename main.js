

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
  path: '1.json',
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
  anim.setSpeed(1);
  
  function onDOMLoaded(e){
  
  // tl = gsap.timeline();



  gsap.timeline().from("#demo", {autoAlpha:0})
  .from("#title", {opacity:0, scale:0, ease:"back"})
  .from("#freds img", {y:160, stagger:3, duration:0.8, ease:"back"})
  .from("#time", {xPercent:100, duration:0.2})
  .from({frame:0}, 15, {frame: anim.totalFrames-1,onComplete: function() {anim.goToAndStop(Math.round(this.target.frame), true)
  },
  repeat: -1,
  yoyo: true,
  ease: Linear.easeNone,
  

  });
  
  
  }


    gsap.timeline()

    