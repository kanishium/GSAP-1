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

var load=document.querySelector(".loader")
var loadanime=document.querySelector(".loadanime")
setTimeout(()=>{
  gsap.to(loadanime,{
    opacity:0
  })
},3900)
setTimeout(() => {
  gsap.to(load,{
    display:"none",
    width:"0",
    // height:"0"
    scrub:5
  })
}, 4000);

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
function naviconanime(){
  var navicon= document.querySelectorAll(".nav-icon i")
navicon.forEach(element => {
  element.addEventListener("mouseenter",function(){
    element.style.color="black"
    gsap.to(".cursor",{
      scale:3.5,
      duration:0.1,
      filter: "blur(3px)"
    })
  })
  element.addEventListener("mouseleave",function(){
    element.style.color="white"
    gsap.to(".cursor",{
      scale:1,
      duration:0.1,
      filter: "blur(0px)"
    })
  })
});
}
naviconanime()
function menuanime(){
  
var navmenu= document.querySelector(".menu")
var menuchild=navmenu.children
for (let child of menuchild) {
  child.addEventListener("mouseenter",function(){
    child.style.color="black"
    gsap.to(".cursor",{
      scale:3.5,
      duration:0.1,
      filter: "blur(3px)"
    })
  })
}
for (let child of menuchild) {
  child.addEventListener("mouseleave",function(){
    child.style.color="white"
    gsap.to(".cursor",{
      scale:1,
      duration:0.1,
      filter: "blur(0px)"
    })
  })
}
}
menuanime()
var video=document.querySelectorAll(".video h3")
video.forEach(element => {
  element.addEventListener("mouseenter",function(){
    element.style.backgroundColor="#C5FCFC"
    element.style.color="black"
    gsap.to(crsr,{
      backgroundColor:"black",
      // mixBlendMode:"normal",
      scale:2.9,
      filter:"blur(2px)"
    })
  })
  element.addEventListener("mouseleave",function(){
    element.style.backgroundColor="transparent"
    element.style.color="#C5FCFC"
    gsap.to(crsr,{
      backgroundColor:"#C5FCFC",
      scale:1,
      filter:"blur(0px)"
    })
  })
});
function videoanime(){
  gsap.to(".page-1 video",{
    width:"83%",
    height:"100%",
    borderRadius:"4.9vw",
    top:"0vh",
    duration:0.1,
    scrollTrigger:{
      trigger:".page-1 video",
      scroll:"#main",
      start:"top 50%",
      // markers:"true",
      end:"top 15%",
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
      scrub:3
    }
  })
  tl.from(".recents h1",{
    x:-500,
    stagger:0.2,
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
recentanime()
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

function partneranime(){
  var tl6 =gsap.timeline({
    scrollTrigger:{
      trigger:".page-4 h1",
      scroll:"#main",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:3
    }
  })
  tl6.from(".who h1",{
    x:-200,
    // stagger:1,
    duration:3
  },"he")
  tl6.from(".we-are h1",{
    x:-200,
    // stagger:1,
    delay:2,
    duration:3,
  },"he")
  tl6.to(".page-4 h1",{
    width:"101%",
    color:"transperent",
    duration:10,
    stagger:0,
  },"he")
}
partneranime()
function scrollinganime(){
  var wild=document.querySelector(".wild")
window.addEventListener("wheel",function(dets){
  if(dets.deltaY>0){
    gsap.to(wild,{
      transform:"translate(-100%)",
      repeat:-1,
      duration:8,
      ease:"none"
    })
  }
  else{
    gsap.to(wild,{
      transform:"translate(100%)",
      repeat:-1,
      duration:8,
      ease:"none"
    })
  }
})
 var dive=document.querySelector(".dive")
window.addEventListener("wheel",function(dets){
  if(dets.deltaY>0){
    gsap.to(dive,{
      transform:"translate(100%)",
      repeat:-1,
      duration:8,
      ease:"none"
    })
  }
  else{
    gsap.to(dive,{
      transform:"translate(-100%)",
      repeat:-1,
      duration:8,
      ease:"none"
    })
  }
})
}
scrollinganime()
function draggeranime(){
  var draggercon=document.querySelectorAll(".drag-overlay")
draggercon.forEach(dragger => {
  dragger.addEventListener("mouseenter",function(){
    crsr.textContent="drag"
    crsr.style.setProperty("--before-opacity", "1");
    gsap.to(crsr,{
      width:"5.5vw",
      height:"5.5vw",
    })
  })
  dragger.addEventListener("mouseleave",function(){
    crsr.textContent=""
    crsr.style.setProperty("--before-opacity", "0");
    gsap.to(crsr,{
      width:"1.5vw",
      height:"1.5vw",
    })
  })
  
});
}
draggeranime()
function marqueone(){
  var wild=document.querySelector(".scroller")
wild.addEventListener("mouseenter",function(){
  // crsr.style.setProperty("--before-opacity", "1");
  gsap.to(crsr,{
    filter:"blur(8vw)",
    width:"30.5vw",
    height:"30.5vw",
    
  })
})
wild.addEventListener("mouseleave",function(){
  // crsr.style.setProperty("--before-opacity", "1");
  gsap.to(crsr,{
    filter:"blur(0vw)",
    width:"1.5vw",
    height:"1.5vw",
  })
})
}
marqueone()
function socials(){
var socials=document.querySelectorAll(".socoverlay");
var soc=document.querySelectorAll(".soc")
socials.forEach((element,index) => {
  element.addEventListener("mouseenter",function(){
    gsap.to(crsr,{
      scale:0,
      display:"none",
    })
    gsap.to(soc[index],{
      width:"80%",
      duration:0.6,
      opacity:1,
    })
    const firstImage = soc[index].querySelector("img:first-of-type");
    gsap.to(firstImage,{
      rotateZ:"180deg",
      duration:1
    })
  })
  element.addEventListener("mouseleave",function(){
    gsap.to(crsr,{
      scale:1,
      duration:0.4,
      display:"block",
      filter: "blur(0px)"
    })
    gsap.to(soc[index],{
      width:"55%",
      duration:0.6
    })
    const firstImage = soc[index].querySelector("img:first-of-type");
    gsap.to(firstImage,{
      rotateZ:"0deg",
      duration:1
    })
  })
}
)

}
socials()
function roaranime(){
  var tl =gsap.timeline({
    scrollTrigger:{
      trigger:".roar h1",
      scroll:"#main",
      start:"top 90%",
      end:"top 15%",
      // markers:true,
      scrub:5
    }
  })
  tl.from(".roar h1",{
    x:-500,
    stagger:0.2,
    opacity:0,
    
  },"yo")
  tl.to(".over-text-roar",{
    width:"0%",
    delay:0.1
  },"yo")
  tl.from(".roar-explore",{
    y:100,
    duration:1,
  })
}
roaranime()
