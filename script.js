let cursor = document.querySelector('.cursor');
let cursorBlur = document.querySelector('.cursor-blur');
document.addEventListener('mousemove',function(dets){
  let mouseX = dets.clientX;
  let mousey = dets.clientY;
  gsap.to('.cursor',{
    left:mouseX,
    top:mousey,
    ease:Power3
  })
  gsap.to('.cursor-blur',{
    left:mouseX-150 +'px',
    top:mousey-150+'px',
    ease:Power3,
    delay:0.3,
    duration:1
  })
})


gsap.to('.nav',{
  backgroundColor: '#000',
  height:'150px',
  duration:0.5,
  scrollTrigger:{
    trigger:'.nav',
    scroller:'body',
    // markers:true,
    start:'top -10%',
    end:'top -11%',
    scrub:2
  }
})

gsap.to('.main',{
  backgroundColor:'#000',
  scrollTrigger:{
    trigger:'.main',
    scroller:'body',
    // markers:true,
    start:'top -30%',
    end:'top -100%',
    scrub:2,
  }
})

let h4all = document.querySelectorAll('.nav h4');
h4all.forEach(function(elem){
  elem.addEventListener('mouseenter',function(){
    cursor.style.scale = 3;
    cursor.style.border = '1px solid #fff';
    cursor.style.backgroundColor = 'transparent';
    cursor.style.transition = 'all ease 0.2s'
  })
  elem.addEventListener('mouseout',function(elem){
    cursor.style.scale = 1;
    cursor.style.border = 'none';
    cursor.style.backgroundColor = '#97B54B';
  })
})
let arrow = document.querySelector('.arrow');
arrow.addEventListener('click',function(){
  arrow.scrollIntoView({behavior:'smooth'});
})
arrow.addEventListener('mouseover',function(){
  cursor.style.scale = 3;
    cursor.style.border = '1px solid #fff';
    cursor.style.backgroundColor = 'transparent';
    cursor.style.transition = 'all ease 0.2s'
})
arrow.addEventListener('mouseout',function(elem){
  cursor.style.scale = 1;
  cursor.style.border = 'none';
  cursor.style.backgroundColor = '#97B54B';
})

gsap.from('.aboutus img, .aboutus-in',{
  y:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:'.aboutus',
    scroller:'body',
    // markers:true,
    start:'top 60%',
    end:'top 58%',
    scrub:3
  }
})

gsap.to('.card',{
  y:-70,
  stagger:1,
  ease:Power4,
  scrollTrigger:{
    trigger:'.cards-container',
    scroller:'body',
    // markers:true,
    start:'top 60%',
    end:'top 57%',
    scrub:2
  }
})


gsap.from('#colon1',{
  x: -70,
  y: -70,
  scrollTrigger:{
    trigger:'.page3',
    scroller:'body',
    start:'top 60%',
    end:'top 57%',
    // markers:true,
    scrub:1,
  }
})

let p4H1 = document.querySelector('#p4-t');
let Elem = document.querySelectorAll('.elem');
Elem.forEach(function(elem){
  elem.addEventListener('mouseover',function(){
    p4H1.style.setProperty('-webkit-text-stroke', '1px #ACDC2B');
  })
  elem.addEventListener('mouseout',function(){
    p4H1.style.setProperty('-webkit-text-stroke', '1px #fff');
  })
})

gsap.from('#p4-t',{
  y:90,
  duration:1,
  scrollTrigger:{
    trigger:'.page4',
    scroller:'body',
    // markers:true,
    start:'top 60%',
    end:'top 57%',
    scrub:2
  }
})


