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
}