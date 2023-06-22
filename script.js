const nav = document.querySelector('.nav')
const image = document.querySelector('.potrait-image');
window.addEventListener('scroll', fixNav)

// disable text selection on the entire page
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// disable right-click context menu on the entire page
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150){
      nav.classList.add('active')
    }
    else{
      nav.classList.remove('active')
    }
  }
  
  
  
window.addEventListener('scroll', function() {
if (window.scrollY > nav.offsetHeight + 150) {
    image.style.opacity = 0;
    image.style.transition = 'opacity 0.9s ease-in-out';
} else {
    image.style.opacity = 1;
}
});

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
















  
  
//ARROW
// $('.arrow').hover(
//     function() {
//         $(this).find("i").removeClass("fa-arrow-up").addClass("fa-arrow-down");
//     }, function() {
//         $(this).find("i").removeClass("fa-arrow-down").addClass("fa-arrow-up");
//     }
// )