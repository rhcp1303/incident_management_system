function fetchIncidents() {
    const accessToken = localStorage.getItem('accessToken');
    fetch('http://127.0.0.1:8000/api/incidents', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                window.location.href = '/static/html/login.html';
                throw new Error('Unauthorized');
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const incidentsListDiv = document.getElementById('incidentsList');
        incidentsListDiv.innerHTML = '';
        if (Array.isArray(data) && data.length > 0) {
            const ul = document.createElement('ul');
            data.forEach(incident => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>Reporter Name:</strong> ${incident.reporter_name}<br>
                    <span class="incident-details"><strong>Details:</strong> ${incident.incident_details.substring(0, 100)}...</span><br>
                    <strong>Reported Time:</strong> ${incident.incident_reported_datetime}<br>
                    <strong>Priority:</strong> ${incident.priority}<br>
                    <strong>Status:</strong> ${incident.status}<br>
                `;
                ul.appendChild(li);
            });
            incidentsListDiv.appendChild(ul);
        } else {
            const p = document.createElement('p');
            p.classList.add('no-incidents');
            p.textContent = 'No incidents found.';
            incidentsListDiv.appendChild(p);
        }
    })
    .catch(error => {
        console.error('Error fetching incidents:', error);
        const incidentsListDiv = document.getElementById('incidentsList');
        const p = document.createElement('p');
        p.classList.add('loading-error');
        p.textContent = 'Failed to load incidents.';
        incidentsListDiv.appendChild(p);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const accessToken = localStorage.getItem('accessToken');
    const tokenExpiry = localStorage.getItem('tokenExpiry');

    if (!accessToken || !tokenExpiry || Date.now() >= parseInt(tokenExpiry)) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenExpiry');
        window.location.href = '/static/html/login.html';
    } else {
        fetchIncidents();
    }
});