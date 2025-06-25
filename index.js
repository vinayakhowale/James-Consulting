document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.header');
    
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.header').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
    }
  
  }); 

let menubtn = document.querySelector('.toggle-btn');
menubtn.addEventListener('click',function(){
    menubtn.classList.toggle('active')
})

const bg = document.querySelector('.bg-img');
window.addEventListener('scroll', function(){
  bg.style.backgroundSize = 160- +window.pageYOffset/12+'%';
  bg.style.backgroundRepeat = 'no-repeat'; 
})




// const zoomScreen = document.querySelector(".bg-img");
// let zoom = 1;
// const zoomingSpeed = 0.1;
// document.addEventListener("wheel", (e)=> {
//     if (e.deltaY > 0) {
//         zoomScreen.style.transform = `scaleX(${(zoom += zoomingSpeed)})`;
//     } else {
//         zoomScreen.style.transform = `scaleX(${(zoom -= zoomingSpeed)})`;
//     }
// })


// function scroll(){
//     var baneffect = querySelector('.ba');
//     var position = baneffect.getBoundingClientRect().top;
// }
// scroll();
