document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const password = document.getElementById('password').value;

        fetch('root/credentials.json')
            .then(response => response.json())
            .then(credentialsList => {
                // Find the credential that matches the entered password
                const validCredential = credentialsList.find(credential => 
                    password === credential.password
                );

                if (validCredential) {
                    // Redirect to the page specified in the credentials file
                    window.location.href = validCredential.redirect;
                } else {
                    errorMessage.style.display = 'block'; // Show error message
                }
            })
            .catch(error => {
                console.error('Error loading credentials:', error);
            });
    });
});
