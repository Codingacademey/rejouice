/*
let  cursor = document.querySelector(".cursor")
var main = document.querySelector(".main")

main.addEventListener("mousemove" ,function(dets){
       
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
})*/
document.addEventListener("mousemove",function(dets){
  gsap.to(".cur",{
    left:dets.x,
    top:dets.y,
  })
    
})
document.querySelector(".imgbox1").addEventListener("mouseenter",function(){
  gsap.to(".cur",{
    transform: 'translate(-50%,-50%) scale(1)'
  })
}) 

document.querySelector(".imgbox1").addEventListener("mouseleave",function(){
  gsap.to(".cur",{
    transform: 'translate(-50%,-50%) scale(0)'
  })
}) 

//box2
document.querySelector(".imgbox2").addEventListener("mouseenter",function(){
  gsap.to(".cur",{
    transform: 'translate(-50%,-50%) scale(1)'
  })
}) 

document.querySelector(".imgbox2").addEventListener("mouseleave",function(){
  gsap.to(".cur",{
    transform: 'translate(-50%,-50%) scale(0)'
  })
}) 
//box3

document.querySelector(".imgbox3").addEventListener("mouseenter",function(){
  gsap.to(".cur",{
    transform: 'translate(-50%,-50%) scale(1)'
  })
}) 

document.querySelector(".imgbox3").addEventListener("mouseleave",function(){
  gsap.to(".cur",{
    transform: 'translate(-50%,-50%) scale(0)'
  })
}) 
//box4
document.querySelector(".imgbox4").addEventListener("mouseenter",function(){
  gsap.to(".cur",{
    transform: 'translate(-50%,-50%) scale(1)'
  })
}) 

document.querySelector(".imgbox4").addEventListener("mouseleave",function(){
  gsap.to(".cur",{
    transform: 'translate(-50%,-50%) scale(0)'
  })
}) 


//box rotate
