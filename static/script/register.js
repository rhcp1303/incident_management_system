const isdCodes = [
    { countryCode: "AF", value: "+93", country: "Afghanistan" },
    { countryCode: "AL", value: "+355", country: "Albania" },
    { countryCode: "DZ", value: "+213", country: "Algeria" },
    { countryCode: "ZW", value: "+263", country: "Zimbabwe" }
];

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
    const pinCodeInput = document.getElementById('pin_code');
    const cityInput = document.getElementById('city');
    const countryInput = document.getElementById('country');
    const registrationForm = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('registrationMessage');
    const isdCodeSelect = document.getElementById('mobile_isd_code');

    isdCodes.sort((a, b) => a.country.localeCompare(b.country));

    isdCodes.forEach(code => {
        let option = document.createElement('option');
        option.value = code.value;
        option.textContent = `${code.country} (${code.value})`;
        isdCodeSelect.appendChild(option);
    });

    pinCodeInput.addEventListener('blur', async function() {
        const pincode = this.value.trim();
        if (pincode) {
            const details = await fetchPincodeDetails(pincode);
            if (details.city && details.country) {
                cityInput.value = details.city;
                countryInput.value = details.country;
            } else {
                cityInput.value = "";
                countryInput.value = "";
                alert("Could not find city and country for the given pincode.");
            }
        }
    });

    // Registration Form Submission (Moved inside DOMContentLoaded)
    registrationForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        if (!data.first_name || !data.last_name || !data.email || !data.password || !data.mobile_number || !data.address || !data.pin_code || !data.city || !data.country) {
            messageDiv.textContent = "Please fill in all fields.";
            messageDiv.className = 'error-message';
            return;
        }
        try {
            const response = await fetch('/api/users/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                messageDiv.textContent = "Registration successful!";
                messageDiv.className = 'success-message';
                registrationForm.reset();
            } else {
                messageDiv.textContent = `Registration failed: ${result.error || result.message || JSON.stringify(result)}`;
                messageDiv.className = 'error-message';
            }

        } catch (error) {
            console.error("Registration error:", error);
            messageDiv.textContent = "An error occurred during registration.";
            messageDiv.className = 'error-message';
        }
    });
});