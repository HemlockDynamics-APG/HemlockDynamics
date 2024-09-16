document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('data/credentials.json')
            .then(response => response.json())
            .then(credentials => {
                if (username === credentials.username && password === credentials.password) {
                    // Redirect or show successful message
                    window.location.href = 'result1.html'; // Redirect to a different page upon successful login
                } else {
                    errorMessage.style.display = 'block'; // Show error message
                }
            })
            .catch(error => {
                console.error('Error loading credentials:', error);
            });
    });
});
