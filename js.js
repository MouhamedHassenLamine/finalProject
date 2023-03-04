var circle=document.querySelectorAll('.circle')
var icons=document.querySelectorAll('a')
var pofcircle=document.querySelectorAll('.pofcircle')
var mynav=document.querySelectorAll('nav')
    if (window.innerWidth > 906) {
        mynav[0].style.display = 'block';
      }
      if (window.innerWidth < 906) {
        mynav[0].style.display = 'none';
      }
function homef(){
    circle[0].style.left='7%'
    for(let i=0;i<pofcircle.length;i++){
    pofcircle[i].style.display= i === 0? 'block':'none'
    }
}
function sunf(){
    circle[0].style.left='32.5%'
    for(let i=0;i<pofcircle.length;i++){
     pofcircle[i].style.display= i === 1? 'block':'none'
     }
}
function earthf(){
    circle[0].style.left='58%'
    for(let i=0;i<pofcircle.length;i++){
      pofcircle[i].style.display= i === 2? 'block':'none'
      }
}
function moonf(){
    circle[0].style.left='83%'
    for(let i=0;i<pofcircle.length;i++){
    pofcircle[i].style.display= i === 3? 'block':'none'
     }
}
function burgeron(){
    if(mynav[0].style.display==='none'){
       mynav[0].style.display='block'
    }
    else{
        mynav[0].style.display='none'
    }
}
window.onresize=function(){
    if (window.innerWidth > 906) {
        mynav[0].style.display = 'block';
      }
      else{
        mynav[0].style.display = 'none';
      }
    }