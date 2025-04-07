function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = cookie.substring(name.length + 1);
                break;
            }
        }
    }
    return cookieValue;
}

document.addEventListener('DOMContentLoaded', function() {
    const accessToken = localStorage.getItem('accessToken');
    const tokenExpiry = localStorage.getItem('tokenExpiry');

    if (!accessToken || !tokenExpiry || Date.now() >= parseInt(tokenExpiry)) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenExpiry');
        window.location.href = '/static/html/login.html';
    } else {
            const createIncidentForm = document.getElementById('createIncidentForm');
            createIncidentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);
            const data = {};
            const csrfToken = getCookie('csrftoken');
            const messageDiv = document.getElementById('createIncidentMessage');
            messageDiv.textContent = '';
            messageDiv.className = '';
            formData.forEach((value, key) => (data[key] = value));
            const accessToken = localStorage.getItem('accessToken');
            fetch('/api/incidents/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(responseData => {
                if (responseData.id) {
                    messageDiv.textContent = `Incident created successfully with ID: ${responseData.id}`;
                    messageDiv.className = 'success';
                    document.getElementById('createIncidentForm').reset();
                    console.log('Incident created successfully:', responseData);
                    window.location.href = '/static/html/view_incidents.html';
                } else if (responseData) {
                    let errors = '';
                    for (const key in responseData) {
                        errors += `${key}: ${responseData[key].join(', ')}<br>`;
                    }
                    messageDiv.innerHTML = `Failed to create incident:<br>${errors}`;
                    messageDiv.className = 'error';
                    console.error('Failed to create incident:', responseData);
                } else {
                    messageDiv.textContent = 'Failed to create incident due to an unknown error.';
                    messageDiv.className = 'error';
                    console.error('Failed to create incident: unknown error', responseData);
                }
            })
            .catch(error => {
                console.error('Error creating incident:', error);
                messageDiv.textContent = 'Failed to create incident. Please try again later.';
                messageDiv.className = 'error';
            });
        });
    }
});