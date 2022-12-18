
/* target for the event : with class name */
const header = document.querySelector("header");

window.addEventListener("scroll",function(){
header.classList.toggle("sticky", window.scrollY>0);
});




/****************** * bars on click ****************/

const menu= document.querySelector('.box_menu');
const navlist= document.querySelector('.navlist');
//swap
let touchStart,touchEnd;

menu.addEventListener('click',()=>{
    navlist.classList.add('open');
    document.getElementsByTagName('span').item(0).style.display='none';
    document.getElementsByTagName('span').item(1).style.display='none';
    document.getElementsByTagName('span').item(2).style.display='none';

});


//startTouch
navlist.addEventListener('touchstart',e=>{
    touchStart=e.targetTouches[0].clientX;
});

//moveTouch
navlist.addEventListener('touchmove',e=>{
    touchEnd= e.targetTouches[0].clientX;
});

//Distance
navlist.addEventListener('touchend',e=>{
    if(touchStart-touchEnd >100 ){
     navlist.classList.remove('open'); 
     
     
     document.getElementsByTagName('span').item(0).style.display='block';
     document.getElementsByTagName('span').item(1).style.display='block';
     document.getElementsByTagName('span').item(2).style.display='block';
    }
   
});


 
const touche = document.querySelector('.emoji');

const emojis=[
    "😂","😃","😄","😅","🙂","😏","😮","😯","🧑","🧒","👲","🤸‍♀️","🤸‍♂️","👌","🖖"
];

touche.addEventListener("mouseover",()=>{

    touche.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

});
