const logoColor = document.querySelector('h1.logo-heading')
logoColor.addEventListener('mouseover', function(event){
    event.target.style.color = 'green'
})

const picClick = document.querySelector('img')
picClick.addEventListener('click', function(){
    alert('hi');
})

document.addEventListener('click', function(){
    alert('document')
})

document.addEventListener('click', function(event){
    event.stopImmediatePropagation()
})

const dblClicking = document.querySelector('.img-content img')
dblClicking.addEventListener('dblclick', function(){
    alert('bye');
})

document.addEventListener('keydown', function(event){
    if(event.keyCode === 27){
        alert('escape')
    }
})

const zooming = document.querySelector('.inverse-content img')
zooming.addEventListener('wheel', function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  })
let scale = 1;
const el = document.querySelector('.inverse-content img');

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

  const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'gray';
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});

const preventNav = document.querySelector('.nav-link')
preventNav.addEventListener('click', function(e){
    e.preventDefault()
})