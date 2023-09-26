
document.addEventListener('DOMContentLoaded', function() {
    var signupEmailInput = document.getElementById('signupEmail');
    var loginEmailInput = document.getElementById('loginEmail');

    // Define the validation function
    function validateEmail(e, emailInput) {
        var emailValue = emailInput.value;
        
        // Regular expression to validate email format
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!emailPattern.test(emailValue)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
            return;  // Exit the function early if email format is not valid
        }

        var domain = emailValue.split('@')[1];
        if (domain !== 'gmail.com') {
            alert('Only Gmail addresses are allowed!');
            e.preventDefault();
        }
    }

    // Attach the validation function to the submit event of both forms
    signupEmailInput.closest('form').addEventListener('submit', function(e) {
        validateEmail(e, signupEmailInput);
    });

    loginEmailInput.closest('form').addEventListener('submit', function(e) {
        validateEmail(e, loginEmailInput);
    });
});