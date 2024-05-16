// Get references to the elements
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let age = document.getElementById('age');
let address = document.getElementById('address');
let phoneNo = document.getElementById('phone-no');
let emailId = document.getElementById('email-id');
let password = document.getElementById('password');
let reEnterPassword = document.getElementById('re-enter-password');
let captcha = document.getElementById('captcha');
let captchaText = document.getElementById('captcha-text');
let emailOtp = document.getElementById('email-otp');
let registerNowBtn = document.getElementById('register-now-btn');
let loginBtn = document.getElementById('login-btn');

// Function to generate CAPTCHA
function generateCaptcha() {
    let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let captchaStr = '';
    for (let i = 0; i < 6; i++) {
        captchaStr += alphaNums[Math.floor(Math.random() * alphaNums.length)];
    }
    captchaText.value = captchaStr;
}

// Function to validate form
function validateForm() {
    if (firstName.value === '' || lastName.value === '' || age.value === '' || address.value === '' || phoneNo.value === '' || emailId.value === '' || password.value === '' || reEnterPassword.value === '' || captcha.value === '' || emailOtp.value === '') {
        alert('Please fill in all the fields');
        return false;
    }
    if (password.value !== reEnterPassword.value) {
        alert('Passwords do not match');
        return false;
    }
    if (captcha.value !== captchaText.value) {
        alert('Invalid CAPTCHA');
        return false;
    }
    return true;
}

// Add event listeners
registerNowBtn.addEventListener('click', function() {
    if (validateForm()) {
        // Register user and send email OTP
        // TO DO: Implement registration logic and email OTP sending
    }
});

loginBtn.addEventListener('click', function() {
    // TO DO: Implement login logic
});

// Generate CAPTCHA on page load
generateCaptcha();

// Add blur effect to background
document.body.classList.add('blur');