function inti(){
  gsap.registerPlugin(ScrollTrigger);

 
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
// inti()
var crsr=document.querySelector(".cursor")

function cursoranime(){
  var main=document.querySelector("#main")
main.addEventListener("mousemove",function(dets){
  // crsr.style.left=dets.x+"px"
  // crsr.style.top=dets.y+"px"
  gsap.to(".cursor",{
    x:dets.x,
    y:dets.y
  })
})
}
cursoranime()
function logoanime(){
  var navimg =document.querySelector("nav img")
navimg.addEventListener("mouseenter",function(){
  // crsr.style.width="2.5vw"
  // crsr.style.height="2.5vw"
  gsap.to(".cursor",{
    scale:3.5,
    duration:0.1,
    filter: "blur(3px)"
  })
})
navimg.addEventListener("mouseleave",function(){
  // crsr.style.width="1.5vw"
  // crsr.style.height="1.5vw"
  gsap.to(".cursor",{
    scale:1,
    duration:0.1,
    filter: "blur(0px)"
  })
})
}
logoanime()

naviconanime()
function videoanime(){
  gsap.to(".page-1 video",{
    width:"87%",
    borderRadius:"4.9vw",
    y:100,
    duration:0.1,
    scrollTrigger:{
      trigger:".page-1 video",
      scroll:"#main",
      start:"top 65%",
      end:"top 25%",
      scrub:2
    }
  })
}
videoanime()
function recentanime(){
  var tl =gsap.timeline({
    scrollTrigger:{
      trigger:".recents h1",
      scroll:"#main",
      start:"top 80%",
      end:"top 15%",
      // markers:true,
      scrub:2
    }
  })
  tl.from(".recents h1",{
    x:-500,
    stagger:0.1,
    opacity:0,
    
  },"yo")
  tl.to(".over-text",{
    width:"0%",
    delay:0.1
  },"yo")
  tl.from(".explore h4",{
    y:-50
  })
}

function pg2spananime(){
  var tl2 =gsap.timeline({
    scrollTrigger:{
      trigger:".span-cover",
      scroll:"#main",
      start:"top 90%",
      end:"top 15%",
      // markers:true,
      scrub:2
    }
  })
  tl2.to(".over-h4",{
    height:"0"
  })
  tl2.from(".span-cover span",{
    y:-100
  })
  gsap.from(".explore h3",{
    y:200,
    scale:0,
    opacity:0,
    scrollTrigger:{
      trigger:".explore",
      scroll:"#main",
      start:"top 85%",
      end:"top 75%",
      // markers:true,
      scrub:2
    }
  })
}
pg2spananime()
function imageanime(){
  var tl3=gsap.timeline({
    scrollTrigger:{
      trigger:".img img",
      scroll:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:2
    }
  })
  tl3.from(".img img",{
    transformOrigin: "0% 100%",
    rotateZ:20,
    duration:2,
    x:200,
  },"hello")
  tl3.from(".img-text",{
    y:200,
    duration:2,
    delay:1
  },"hello")
  var tl4=gsap.timeline({
    scrollTrigger:{
      trigger:".img2 img",
      scroll:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:2
    }
  })
  tl4.from(".img2 img",{
    transformOrigin: "100% 100%",
    rotateZ:-10,
    duration:2,
    x:-200,
  },"hello")
  tl4.from(".img-text2",{
    y:200,
    duration:2,
    delay:1
  },"hello")
  var tl5=gsap.timeline({
    scrollTrigger:{
      trigger:".img3 img",
      scroll:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:2
    }
  })
  tl5.from(".img3 img",{
    transformOrigin: "0% 100%",
    rotateZ:10,
    duration:2,
    x:200,
  },"hello")
  tl5.from(".img-text3",{
    y:200,
    duration:2,
    delay:1
  },"hello")
}
imageanime()
function weareanime(){
  var tl6 =gsap.timeline({
    scrollTrigger:{
      trigger:".page-3 h1",
      scroll:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:3
    }
  })
  tl6.from(".who h1",{
    x:-200,
    stagger:1,
    duration:2
  },"he")
  tl6.from(".we-are h1",{
    x:300,
    stagger:1,
    duration:2
  },"he")
  tl6.to(".page-3 h1",{
    width:"100%",
    color:"transperent",
    duration:2,
    delay:1
  },"he")
  
}
weareanime()
function pg3midfontanime(){
  gsap.from(".pg3-midfont h2",{
    y:100,
    scrollTrigger:{
      trigger:".pg3-midfont h2",
      scroll:"#main",
      // markers:true,
      start:"top 75%",
      end:"top 60%",
      scrub:2
    }
  })
}
pg3midfontanime()

function pg3smallfont(){
  gsap.from(".pg3-smallfont h3",{
    y:100,
    opacity:0,
    scrollTrigger:{
      trigger:".pg3-smallfont h3",
      scroll:"#main",
      // markers:true,
      start:"top 105%",
      end:"top 95%",
      scrub:2
    }
  })
  gsap.from(".pg3-smallfont h2",{
    y:100,
    opacity:0,
    scrollTrigger:{
      trigger:".pg3-smallfont h2",
      scroll:"#main",
      // markers:true,
      start:"top 115%",
      end:"top 98%",
      scrub:2
    }
  })
}

pg3smallfont()


function cardsanime(){
  gsap.from(".orange",{
    x:-300,
    transformOrigin: "100% 100%",
    rotateZ:-50,
    duration:3,
    opacity:0,
    scrollTrigger:{
      trigger:".orange",
      scroll:"#main",
      start:"top 90%",
      // markers:true,
      end:"top 60%",
      scrub:2
    }
  })
  gsap.from(".white",{
    x:300,
    transformOrigin: "0% 100%",
    rotateZ:50,
    duration:3,
    opacity:0,
    scrollTrigger:{
      trigger:".white",
      scroll:"#main",
      start:"top 100%",
      // markers:true,
      end:"top 70%",
      scrub:2
    }
  })
  gsap.from(".greenish",{
    x:-300,
    transformOrigin: "100% 100%",
    rotateZ:-50,
    duration:3,
    opacity:0,
    scrollTrigger:{
      trigger:".greenish",
      scroll:"#main",
      start:"top 110%",
      // markers:true,
      end:"top 80%",
      scrub:2
    }
  })
  gsap.from(".yellow",{
    x:300,
    transformOrigin: "0% 100%",
    rotateZ:50,
    duration:3,
    opacity:0,
    scrollTrigger:{
      trigger:".yellow",
      scroll:"#main",
      start:"top 115%",
      // markers:true,
      end:"top 85%",
      scrub:2
    }
  })
}
 cardsanime()

//  var tl6 =gsap.timeline({
//   scrollTrigger:{
//     trigger:".page-4 h1",
//     scroll:"#main",
//     // markers:true,
//     start:"top 80%",
//     end:"top 30%",
//     scrub:3
//   }
// })
// tl6.from(".who h1",{
//   x:-200,
//   stagger:1,
//   duration:2
// },"he")
// tl6.from(".we-are h1",{
//   x:300,
//   stagger:1,
//   duration:2
// },"he")
// tl6.to(".page-4 h1",{
//   width:"100%",
//   color:"transperent",
//   duration:2,
//   delay:1
// },"he")