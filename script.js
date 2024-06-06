document.addEventListener('DOMContentLoaded', function() {
    const pickInput = document.getElementById('pick');
    const form = document.getElementById('rentalForm');
 
    pickInput.addEventListener('change', calculateDateDifference);
 
    form.addEventListener('submit', validateForm);
 
    function calculateDateDifference() {
        const pickDate = document.getElementById('pick').value;
        const priceText = document.querySelector('.price').innerText;
        const pricePerDay = parseInt(priceText.match(/₹(\d+)/)[1]);
 
        if (pickDate) {
            const today = new Date();
            const pick = new Date(pickDate);
            const timeDifference = pick.getTime() - today.getTime();
            const dayDifference = timeDifference / (1000 * 3600 * 24);
 
            if (dayDifference >= 0) {
                const totalAmount = dayDifference * pricePerDay;
                document.getElementById('cash').innerText = `Total Amount: ₹${totalAmount}`;
                localStorage.setItem('totalAmount', totalAmount);
            } else {
                document.getElementById('cash').innerText = 'Total Amount: Pickup date must be later than today';
            }
        }
    }
 
    function validateForm(event) {
        event.preventDefault();
 
        const location = document.getElementById('location').value;
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const address = document.getElementById('address').value;
        const pickDate = document.getElementById('pick').value;
 
        if (!location || !name || !mobile || !address || !pickDate) {
            alert('Please fill in all fields before proceeding.');
            return false;
        } else {
            // Proceed with redirection
            window.location.href = 'http://localhost:3000/';
        }
    }
 });