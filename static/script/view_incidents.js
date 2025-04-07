function fetchIncidents() {
    const accessToken = localStorage.getItem('accessToken');
    fetch('http://127.0.0.1:8000/api/incidents/', {
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
                // Store the original incident data as a data attribute on the li element
                const li = document.createElement('li');
                li.dataset.originalIncident = JSON.stringify(incident);
                li.innerHTML = `
                    <strong>Reporter Name:</strong> ${incident.reporter_name}<br>
                    <form class="edit-incident-form" data-incident-id="${incident.id}">
                        <div class="form-group">
                            <label for="incident_details_${incident.id}">Details:</label>
                            <textarea id="incident_details_${incident.id}" name="incident_details">${incident.incident_details}</textarea>
                        </div>
                        <div class="form-group">
                            <label for="status_${incident.id}">Status:</label>
                            <select id="status_${incident.id}" name="status">
                                <option value="Open" ${incident.status === 'Open' ? 'selected' : ''}>Open</option>
                                <option value="In progress" ${incident.status === 'In progress' ? 'selected' : ''}>In progress</option>
                                <option value="Closed" ${incident.status === 'Closed' ? 'selected' : ''}>Closed</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="priority_${incident.id}">Priority:</label>
                            <select id="priority_${incident.id}" name="priority">
                                <option value="High" ${incident.priority === 'High' ? 'selected' : ''}>High</option>
                                <option value="Medium" ${incident.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                                <option value="Low" ${incident.priority === 'Low' ? 'selected' : ''}>Low</option>
                            </select>
                        </div>
                        <button type="submit">Update</button>
                        <div class="update-message" id="updateMessage_${incident.id}"></div>
                    </form>
                    <hr>
                `;
                ul.appendChild(li);
            });
            incidentsListDiv.appendChild(ul);
            attachUpdateListeners();
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

function attachUpdateListeners() {
    const editForms = document.querySelectorAll('.edit-incident-form');
    editForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const incidentId = this.dataset.incidentId;
            const liElement = this.closest('li');
            const originalIncident = JSON.parse(liElement.dataset.originalIncident);
            const formData = new FormData(this);
            const updatedData = {};

            // Populate updatedData with form values
            formData.forEach((value, key) => {
                updatedData[key] = value;
            });

            // Merge updatedData into the original incident data
            const dataToSend = { ...originalIncident, ...updatedData };

            const accessToken = localStorage.getItem('accessToken');
            const updateMessageDiv = document.getElementById(`updateMessage_${incidentId}`);
            updateMessageDiv.textContent = 'Updating...';
            updateMessageDiv.className = '';

            fetch(`/api/incidents/${incidentId}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify(dataToSend)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        let errors = '';
                        for (const key in errorData) {
                            errors += `${key}: ${errorData[key].join(', ')}<br>`;
                        }
                        updateMessageDiv.innerHTML = `Update failed:<br>${errors}`;
                        updateMessageDiv.className = 'error';
                        throw new Error(`HTTP error! status: ${response.status}`);
                    });
                }
                return response.json();
            })
            .then(updatedIncident => {
                updateMessageDiv.textContent = `Incident ${incidentId} updated successfully.`;
                updateMessageDiv.className = 'success';
                liElement.dataset.originalIncident = JSON.stringify(updatedIncident); // Update stored data
                liElement.querySelector('.incident-details').innerHTML = `<strong>Details:</strong> ${updatedIncident.incident_details.substring(0, 100)}...`;
                liElement.querySelector('select[name="status"]').value = updatedIncident.status;
                liElement.querySelector('select[name="priority"]').value = updatedIncident.priority;
                // Update other displayed fields if necessary
            })
            .catch(error => {
                console.error('Error updating incident:', error);
                updateMessageDiv.textContent = 'Failed to update incident. Please try again.';
                updateMessageDiv.className = 'error';
            });
        });
    });
}

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
    const createIncidentBtn = document.getElementById('createIncidentBtn');

    if (!accessToken || !tokenExpiry || Date.now() >= parseInt(tokenExpiry)) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenExpiry');
        window.location.href = '/static/html/login.html';
    } else {
        fetchIncidents();
    }

    createIncidentBtn.addEventListener('click', function() {
        window.location.href = '/static/html/create_incident.html';
    });
});