let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.querySelector('#login-btn').onclick=() =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick=() =>{
    document.querySelector('.login-form-container').classList.remove('active');
}
window.onscroll =() =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
window.onload =() =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pagex * speed) / 90;
        let y = (window.innerHeight - e.pagey * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });

    document.querySelector('.home').onmouseleave = () => {
        document.querySelectorAll('.home-parallax').forEach(elm => {
    
            elm.style.transform = `translateX(0px) translateY(0px)`;
    
        });

};



var a=0;
function pass(){
    if(a==1)
    {
    document.getElementById('passw').type='password';
    document.getElementById('pass-icon').src='eye-removebg-preview.png';
    a=0;
}
else{
    document.getElementById('passw').type='text';
    document.getElementById('pass-icon').src='eye_hide-removebg-preview.png';
    a=1;
}
}}