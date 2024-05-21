let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let age = document.getElementById('age');
let address = document.getElementById('address');
let phoneNo = document.getElementById('phone-no');
let emailId = document.getElementById('email-id');
let password = document.getElementById('password');
let reEnterPassword = document.getElementById('re-enter-password');
let captcha = document.getElementById('captcha');
let captchaText = document.getElementById("captchaText");
let emailOtp = document.getElementById('email-otp');
let registerNowBtn = document.getElementById('register-now-btn');
let loginBtn = document.getElementById('login-btn');
let chars="1234567890ABCDEFGHIJKLMANOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#&";
let captchag
function generateCaptcha() {
    captchag = ""
    for(i=0;i<7;i++){
        let index = Math.floor(Math.random()*chars.length);
        captchag = captchag+chars[index]
        captchaText.value=captchag
    }
}

function validateForm() {
    if (firstName.value === '' || lastName.value === '' || age.value === '' || address.value === '' || phoneNo.value === '' || emailId.value === '' || password.value === '' || reEnterPassword.value === '' || captcha.value === '' || emailOtp.value === '') {
        alert('Please fill in all the fields');
        return false;
    }
    if (password.value ==! re-enter-Password.value) {
        alert('Passwords do not match');
        return false;
    }
    if (captcha.value !== captchaText.value) {
        alert('Invalid CAPTCHA');
        return false;
    }
    return true;
}

registerNowBtn.addEventListener('click', function() {
    if (validateForm()) {
    }
});

loginBtn.addEventListener('click', function() {
});

generateCaptcha();

document.body.classList.add('blur');