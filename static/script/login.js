function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trimStart();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {};
        const csrfToken = getCookie('csrftoken');
        messageDiv.textContent = ''; // Clear previous messages
        messageDiv.className = ''; // Clear previous classes

        formData.forEach((value, key) => (data[key] = value));

        fetch('http://127.0.0.1:8000/api/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseData => {
            if (responseData.message === 'Login successful') {
                messageDiv.textContent = 'Login successful!';
                messageDiv.className = 'success';
                console.log('Login successful:', responseData);
            } else if (responseData.error) {
                messageDiv.textContent = `Login failed: ${responseData.error}`;
                messageDiv.className = 'error';
                console.error('Login failed:', responseData.error);
            } else {
                messageDiv.textContent = 'Login failed due to an unknown error.';
                messageDiv.className = 'error';
                console.error('Login failed: unknown error', responseData);
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            messageDiv.textContent = 'Login failed. Please try again later.';
            messageDiv.className = 'error';
        });
    });
});