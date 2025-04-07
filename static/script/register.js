const isdCodes = [
{ countryCode: "AF", value: "+93", country: "Afghanistan" },
{ countryCode: "AL", value: "+355", country: "Albania" },
{ countryCode: "DZ", value: "+213", country: "Algeria" },
{ countryCode: "AD", value: "+376", country: "Andorra" },
{ countryCode: "AO", value: "+244", country: "Angola" },
{ countryCode: "AI", value: "+1264", country: "Anguilla" },
{ countryCode: "AG", value: "+1268", country: "Antigua" },
{ countryCode: "AR", value: "+54", country: "Argentina" },
{ countryCode: "AM", value: "+374", country: "Armenia" },
{ countryCode: "AW", value: "+297", country: "Aruba" },
{ countryCode: "AC", value: "+247", country: "Ascension" },
{ countryCode: "AU", value: "+61", country: "Australia" },
{ countryCode: "AT", value: "+43", country: "Austria" },
{ countryCode: "AZ", value: "+994", country: "Azerbaijan Republic" },
{ countryCode: "AZ", value: "+351", country: "Azores" },
{ countryCode: "BS", value: "+1242", country: "Bahamas" },
{ countryCode: "BH", value: "+973", country: "Baharin" },
{ countryCode: "BD", value: "+880", country: "Bangladesh" },
{ countryCode: "BB", value: "+1246", country: "Barbados" },
{ countryCode: "BE", value: "+32", country: "Belgium" },
{ countryCode: "BZ", value: "+501", country: "Belize" },
{ countryCode: "BJ", value: "+229", country: "Benin" },
{ countryCode: "BM", value: "+1441", country: "Bermuda" },
{ countryCode: "BT", value: "+975", country: "Bhutan" },
{ countryCode: "BO", value: "+591", country: "Bolivia" },
{ countryCode: "BA", value: "+387", country: "Bosnia & Herzegovina" },
{ countryCode: "BW", value: "+267", country: "Botswana, Republic of" },
{ countryCode: "BW", value: "+27", country: "Boputhatswana" },
{ countryCode: "BR", value: "+55", country: "Brazil" },
{ countryCode: "VG", value: "+1284", country: "British Virgin Islands" },
{ countryCode: "BN", value: "+673", country: "Brunei" },
{ countryCode: "BG", value: "+359", country: "Bulgaria" },
{ countryCode: "BF", value: "+226", country: "Burkina Fasso" },
{ countryCode: "BI", value: "+257", country: "Burundi" },
{ countryCode: "KH", value: "+855", country: "Kampuchea (Cambodia)" },
{ countryCode: "CM", value: "+237", country: "Cameroon" },
{ countryCode: "CA", value: "+1", country: "Canada" },
{ countryCode: "ES", value: "+34", country: "Canary Island" },
{ countryCode: "CV", value: "+238", country: "Cape Verde" },
{ countryCode: "KY", value: "+1345", country: "Cayman Islands" },
{ countryCode: "CF", value: "+236", country: "Central African Republic" },
{ countryCode: "TD", value: "+235", country: "Chad" },
{ countryCode: "CL", value: "+56", country: "Chile" },
{ countryCode: "CN", value: "+86", country: "China" },
{ countryCode: "CX", value: "+61", country: "Christmas Island" },
{ countryCode: "BW", value: "+27", country: "Ciskei" },
{ countryCode: "CC", value: "+672", country: "Cocoskeeling Island" },
{ countryCode: "CO", value: "+57", country: "Colombia" },
{ countryCode: "KM", value: "+269", country: "Comoros" },
{ countryCode: "CG", value: "+242", country: "Congo" },
{ countryCode: "CK", value: "+682", country: "Cook Island" },
{ countryCode: "CR", value: "+506", country: "Costa Rica" },
{ countryCode: "HR", value: "+385", country: "Croatia" },
{ countryCode: "CU", value: "+53", country: "Cuba" },
{ countryCode: "CY", value: "+357", country: "Cyprus" },
{ countryCode: "CZ", value: "+420", country: "Czech Republic" },
{ countryCode: "DK", value: "+45", country: "Denmark" },
{ countryCode: "DG", value: "+246", country: "Diego Garcia" },
{ countryCode: "DJ", value: "+253", country: "Djibouti" },
{ countryCode: "DM", value: "+1767", country: "Dominica" },
{ countryCode: "DO", value: "+1809", country: "Domaniccan Republic" },
{ countryCode: "EC", value: "+593", country: "Ecuador" },
{ countryCode: "EG", value: "+20", country: "Egypt" },
{ countryCode: "SV", value: "+503", country: "El Salvador" },
{ countryCode: "GQ", value: "+240", country: "Equatorial Guinea" },
{ countryCode: "ER", value: "+291", country: "Eritrea" },
{ countryCode: "EE", value: "+372", country: "Estonia" },
{ countryCode: "ET", value: "+251", country: "Ethiopia" },
{ countryCode: "FK", value: "+500", country: "Falkland Island" },
{ countryCode: "FO", value: "+298", country: "Faroe Island" },
{ countryCode: "FJ", value: "+679", country: "Fiji Republic" },
{ countryCode: "FI", value: "+358", country: "Finland" },
{ countryCode: "FR", value: "+33", country: "France" },
{ countryCode: "PF", value: "+689", country: "FR Polynesia" },
{ countryCode: "GA", value: "+241", country: "Gabonese Republic" },
{ countryCode: "GM", value: "+220", country: "Gambia" },
{ countryCode: "GE", value: "+995", country: "Georgia" },
{ countryCode: "DE", value: "+49", country: "Germany" },
{ countryCode: "GH", value: "+233", country: "Ghana" },
{ countryCode: "GI", value: "+350", country: "Gibraltar" },
{ countryCode: "GR", value: "+30", country: "Greece" },
{ countryCode: "GL", value: "+299", country: "Greenland" },
{ countryCode: "GD", value: "+1473", country: "Greneda" },
{ countryCode: "GP", value: "+590", country: "Guadeloupe" },
{ countryCode: "GU", value: "+1671", country: "Guam" },
{ countryCode: "GT", value: "+502", country: "Guatemala" },
{ countryCode: "GN", value: "+224", country: "Guinea Republic" },
{ countryCode: "GW", value: "+245", country: "Guinea Bissau" },
{ countryCode: "GY", value: "+592", country: "Guyana Republic" },
{ countryCode: "HT", value: "+509", country: "Haiti Republic" },
{ countryCode: "US", value: "+1808", country: "Hawaii" },
{ countryCode: "HN", value: "+504", country: "Honduras" },
{ countryCode: "HK", value: "+852", country: "Hong Kong" },
{ countryCode: "HU", value: "+36", country: "Hungary" },
{ countryCode: "IS", value: "+354", country: "Iceland" },
{ countryCode: "IN", value: "+91", country: "India" },
{ countryCode: "ID", value: "+62", country: "Indonesia" },
{ countryCode: "IR", value: "+98", country: "Iran" },
{ countryCode: "IQ", value: "+964", country: "Iraq" },
{ countryCode: "IE", value: "+353", country: "Ireland" },
{ countryCode: "IL", value: "+972", country: "Israel" },
{ countryCode: "IT", value: "+39", country: "Italy" },
{ countryCode: "CI", value: "+225", country: "Ivory Coast (Cote d' Ivoire)" },
{ countryCode: "JM", value: "+1876", country: "Jamaica" },
{ countryCode: "JP", value: "+81", country: "Japan" },
{ countryCode: "JO", value: "+962", country: "Jordan" },
{ countryCode: "KZ", value: "+7300", country: "Kazakhstan" },
{ countryCode: "KZ", value: "+731", country: "Kazakhstan" },
{ countryCode: "KZ", value: "+732", country: "Kazakhstan" },
{ countryCode: "KZ", value: "+733", country: "Kazakhstan" },
{ countryCode: "KZ", value: "+757", country: "Kazakhstan" },
{ countryCode: "KE", value: "+254", country: "Kenya" },
{ countryCode: "KI", value: "+686", country: "Kiribati" },
{ countryCode: "KG", value: "+996", country: "Kirghistan" },
{ countryCode: "KR", value: "+82", country: "South Korea" },
{ countryCode: "KW", value: "+965", country: "Kuwait" },
{ countryCode: "LA", value: "+856", country: "Laos" },
{ countryCode: "LV", value: "+371", country: "Latvia" },
{ countryCode: "LB", value: "+961", country: "Lebanon" },
{ countryCode: "LS", value: "+266", country: "Lesotho" },
{ countryCode: "LR", value: "+231", country: "Liberia" },
{ countryCode: "LY", value: "+218", country: "Libya" },
{ countryCode: "LI", value: "+423", country: "Liechtenstein" },
{ countryCode: "LT", value: "+370", country: "Lithuania" },
{ countryCode: "LU", value: "+352", country: "Luxembourg" },
{ countryCode: "MO", value: "+853", country: "Macao" },
{ countryCode: "MK", value: "+389", country: "Macedonia" },
{ countryCode: "MG", value: "+261", country: "Madagascar" },
{ countryCode: "PT", value: "+351", country: "Madeira Island" },
{ countryCode: "MW", value: "+265", country: "Malawi" },
{ countryCode: "MY", value: "+60", country: "Malaysia" },
{ countryCode: "MV", value: "+960", country: "Maldives" },
{ countryCode: "ML", value: "+223", country: "Mali" },
{ countryCode: "MT", value: "+356", country: "Malta" },
{ countryCode: "MH", value: "+692", country: "Marshall Island" },
{ countryCode: "MQ", value: "+596", country: "Martinique" },
{ countryCode: "MR", value: "+222", country: "Mauritania" },
{ countryCode: "MU", value: "+230", country: "Mauritius" },
{ countryCode: "YT", value: "+269", country: "Mayotte" },
{ countryCode: "MX", value: "+52", country: "Mexico" },
{ countryCode: "FM", value: "+691", country: "Micronesia" },
{ countryCode: "MD", value: "+373", country: "Moldova" },
{ countryCode: "MC", value: "+377", country: "Monaco" },
{ countryCode: "MN", value: "+976", country: "Mangolia" },
{ countryCode: "MS", value: "+1664", country: "Montserrat" },
{ countryCode: "MA", value: "+212", country: "Morocco" },
{ countryCode: "MZ", value: "+258", country: "Mozambique" },
{ countryCode: "MM", value: "+95", country: "Myanmar" },
{ countryCode: "NA", value: "+264", country: "Namibia" },
{ countryCode: "NR", value: "+674", country: "Nauru" },
{ countryCode: "NP", value: "+977", country: "Nepal" },
{ countryCode: "NL", value: "+31", country: "Netherlands" },
{ countryCode: "AN", value: "+599", country: "Netherlands Antilles" },
{ countryCode: "NC", value: "+687", country: "New Caledonia" },
{ countryCode: "NZ", value: "+64", country: "New Zealand" },
{ countryCode: "NI", value: "+505", country: "Nicaragua" },
{ countryCode: "NE", value: "+227", country: "Niger" },
{ countryCode: "NG", value: "+234", country: "Nigeria" },
{ countryCode: "NU", value: "+683", country: "Niue Island" },
{ countryCode: "NF", value: "+672", country: "Norfolk Island" },
{ countryCode: "KP", value: "+850", country: "North Korea" },
{ countryCode: "NO", value: "+47", country: "Norway" },
{ countryCode: "OM", value: "+968", country: "Oman" },
{ countryCode: "PK", value: "+92", country: "Pakistan" },
{ countryCode: "PW", value: "+680", country: "Palau" },
{ countryCode: "PS", value: "+970", country: "Palestine" },
{ countryCode: "PA", value: "+507", country: "Panama" },
{ countryCode: "PG", value: "+675", country: "Papua New Guinea" },
{ countryCode: "PY", value: "+595", country: "Paraguay" },
{ countryCode: "PE", value: "+51", country: "Peru" },
{ countryCode: "PH", value: "+63", country: "Philippines" },
{ countryCode: "PL", value: "+48", country: "Poland" },
{ countryCode: "PT", value: "+351", country: "Portugal" },
{ countryCode: "PR", value: "+1787", country: "Puerto Rico" },
{ countryCode: "QA", value: "+974", country: "Qatar" },
{ countryCode: "RE", value: "+262", country: "Reunion" },
{ countryCode: "RO", value: "+40", country: "Romania" },
{ countryCode: "RO", value: "+230", country: "Rodrigues Island" },
{ countryCode: "RU", value: "+70", country: "Russian Federation" },
{ countryCode: "RU", value: "+71", country: "Russian Federation" },
{ countryCode: "RU", value: "+72", country: "Russian Federation" },
{ countryCode: "RU", value: "+7301", country: "Russian Federation" },
{ countryCode: "RU", value: "+7302", country: "Russian Federation" },
{ countryCode: "RU", value: "+734", country: "Russian Federation" },
{ countryCode: "RU", value: "+735", country: "Russian Federation" },
{ countryCode: "RU", value: "+738", country: "Russian Federation" },
{ countryCode: "RU", value: "+739", country: "Russian Federation" },
{ countryCode: "RU", value: "+74", country: "Russian Federation" },
{ countryCode: "RU", value: "+75", country: "Russian Federation" },
{ countryCode: "RU", value: "+774", country: "Russian Federation" },
{ countryCode: "RU", value: "+78", country: "Russian Federation" },
{ countryCode: "RU", value: "+79", country: "Russian Federation" },
{ countryCode: "RW", value: "+250", country: "Rwandese Republic" },
{ countryCode: "AS", value: "+684", country: "Samoa American" },
{ countryCode: "WS", value: "+685", country: "Samoa Western" },
{ countryCode: "SM", value: "+378", country: "San Marino" },
{ countryCode: "SA", value: "+966", country: "Saudi Arabia" },
{ countryCode: "SN", value: "+221", country: "Senegal" },
{ countryCode: "SC", value: "+248", country: "Seychelles" },
{ countryCode: "SL", value: "+232", country: "Sierra Leone" },
{ countryCode: "SG", value: "+65", country: "Singapore" },
{ countryCode: "SK", value: "+421", country: "Slovak Republic" },
{ countryCode: "SI", value: "+386", country: "Slovenia" },
{ countryCode: "SB", value: "+677", country: "Soloman Island" },
{ countryCode: "SO", value: "+252", country: "Somalia Democratic Republic" },
{ countryCode: "ZA", value: "+27", country: "South Africa" },
{ countryCode: "KR", value: "+82", country: "South Korea" },
{ countryCode: "ES", value: "+34", country: "Spain" },
{ countryCode: "LK", value: "+94", country: "Sri Lanka" },
{ countryCode: "SH", value: "+290", country: "St. Helena" },
{ countryCode: "PM", value: "+508", country: "St. Pierre & Miqueliom" },
{ countryCode: "ST", value: "+239", country: "St. Tome & Princip" },
{ countryCode: "SD", value: "+249", country: "Sudan" },
{ countryCode: "SR", value: "+597", country: "Surinam" },
{ countryCode: "SZ", value: "+268", country: "Swaziland" },
{ countryCode: "SE", value: "+46", country: "Sweden" },
{ countryCode: "CH", value: "+41", country: "Switzerland" },
{ countryCode: "SY", value: "+963", country: "Syria" },
{ countryCode: "TW", value: "+886", country: "Taiwan" },
{ countryCode: "TJ", value: "+992", country: "Tajikistan" },
{ countryCode: "TZ", value: "+255", country: "Tanzania" },
{ countryCode: "TH", value: "+66", country: "Thailand" },
{ countryCode: "TG", value: "+228", country: "Togolese Republic" },
{ countryCode: "TK", value: "+690", country: "Tokelau Island" },
{ countryCode: "TO", value: "+676", country: "Tonga" },
{ countryCode: "TN", value: "+216", country: "Tunisia" },
{ countryCode: "TR", value: "+90", country: "Turkey" },
{ countryCode: "TM", value: "+993", country: "Turkmenistan" },
{ countryCode: "TC", value: "+1649", country: "Turks & Caicos Islands" },
{ countryCode: "TV", value: "+688", country: "Tuvalu" },
{ countryCode: "UG", value: "+256", country: "Uganda" },
{ countryCode: "UA", value: "+380", country: "Ukraine" },
{ countryCode: "AE", value: "+971", country: "UAE" },
{ countryCode: "GB", value: "+44", country: "UK" },
{ countryCode: "US", value: "+1", country: "USA" },
{ countryCode: "UY", value: "+598", country: "Uruguay" },
{ countryCode: "UZ", value: "+998", country: "Uzbekistan" },
{ countryCode: "VU", value: "+678", country: "Vanuatu" },
{ countryCode: "VA", value: "+39", country: "Vatican City" },
{ countryCode: "VE", value: "+58", country: "Venezuela" },
{ countryCode: "VN", value: "+84", country: "Vietnam" },
{ countryCode: "VI", value: "+1340", country: "Virgin Island (USA)" },
{ countryCode: "VG", value: "+1284", country: "Virgin Island (BRI)" },
{ countryCode: "WF", value: "+681", country: "Wallis & Futuna Island" },
{ countryCode: "YE", value: "+967", country: "Yemen" },
{ countryCode: "YU", value: "+381", country: "Yugoslavia" },
{ countryCode: "CD", value: "+243", country: "Zaire" },
{ countryCode: "ZM", value: "+260", country: "Zambia" },
{ countryCode: "ZW", value: "+263", country: "Zimbabwe" }
];

document.addEventListener('DOMContentLoaded', function() {
    const pinCodeInput = document.getElementById('pin_code');
    const cityInput = document.getElementById('city');
    const countryInput = document.getElementById('country');
    const registrationForm = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('registrationMessage');
    const isdCodeSelect = document.getElementById('mobile_isd_code');

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

    isdCodes.sort((a, b) => a.country.localeCompare(b.country));

    isdCodes.forEach(code => {
        let option = document.createElement('option');
        option.value = code.value;
        option.textContent = `${code.country} (${code.value})`;
        isdCodeSelect.appendChild(option);
    });

    async function fetchGeocodeData(pincode) {
        const apiKey = '053ced3cafe14b13a3c7109717791d4e';
        const apiUrl = `https://api.geoapify.com/v1/geocode/search?postcode=${pincode}&format=json&apiKey=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching geocode data:", error);
            return null;
        }
        }


    pinCodeInput.addEventListener('blur', async function() {
        const pincode = this.value.trim();
        const stateElement = document.getElementById("state");
        const cityElement = document.getElementById("city");
        const countryElement = document.getElementById("country");


        if (pincode) {
            const data = await fetchGeocodeData(pincode);
            if (data && data.results && data.results.length > 0 && data.results[0].state) {
                const state = data.results[0].state;
                stateElement.value = state || '';
               } else {
            console.log("State information not found in the response.");
            }
            if (data && data.results && data.results.length > 0 && data.results[0].country) {
                const country = data.results[0].country;
                countryElement.value = country || '';
               } else {
            console.log("State information not found in the response.");
            }
            if (data && data.results && data.results.length > 0) {
                const city = data.results[0].city||data.results[0].county||data.results[0].state
                cityElement.value = city || '';
               } else {
            console.log("State information not found in the response.");
            }
        }
    });


    registrationForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        if (!data.first_name || !data.last_name || !data.email || !data.password || !data.mobile_number || !data.address || !data.pin_code || !data.city || !data.country) {
            messageDiv.textContent = "Please fill in all fields.";
            messageDiv.className = 'error-message';
            return;
        }
        const csrfToken = getCookie('csrftoken');
        try {
            const response = await fetch('/api/users/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                messageDiv.textContent = "Registration successful!";
                messageDiv.className = 'success-message';
                registrationForm.reset();
                window.location.href = '/static/html/login.html';

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