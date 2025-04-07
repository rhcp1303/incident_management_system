[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python Version](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Django Version](https://img.shields.io/badge/Django-X.Y.Z+-green.svg)](https://www.djangoproject.com/)
[![Django REST Framework Version](https://img.shields.io/badge/DRF-X.Y.Z+-blueviolet.svg)](https://www.django-rest-framework.org/)
[![Frontend](https://img.shields.io/badge/Frontend-JavaScript%2FCSS-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Database](https://img.shields.io/badge/Database-MySQL-blue)](https://www.mysql.com/) (Preferred)

## Overview

This Incident Management System provides a platform for users to report, track, and manage incidents. Built with a Django REST Framework backend and a frontend using JavaScript and CSS, the system allows for user registration, login, incident creation, viewing, and editing (with limitations).

## Key Functionalities Demonstrated

* **User Management:**
    * Creation of multiple unique users with details including Name, Email ID, Phone Number, Address, Pin code (with auto-selection of City and Country based on Pin code).
    * User registration and login functionalities.
    * Forgot password functionality (implementation details may vary).
* **Incident Management:**
    * Authenticated users can create multiple incidents with details such as Reporter Name (auto-filled), Incident Details, Reported Date and Time (auto-generated), Priority (High, Medium, Low - editable), and Status (Open, In progress, Closed - editable).
    * Automatic generation of unique Incident IDs in the format `RMG + Random 5-digit number + Current Year` (e.g., RMG123452025).
    * Users can view and edit incidents they have created (with the exception of closed incidents).
    * Users cannot view or edit incidents created by other users.
    * Provision to search incidents using the unique Incident ID.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Backend Installation (Django REST Framework)](#backend-installation-django-rest-framework)
    -   [Frontend Setup (JavaScript and CSS)](#frontend-setup-javascript-and-css)
    -   [Running the Application](#running-the-application)
-   [Backend API Endpoints](#backend-api-endpoints)
-   [Frontend Pages (JavaScript and CSS)](#frontend-pages-javascript-and-css)
-   [Usage](#usage)
    -   [User Registration](#user-registration)
    -   [User Login](#user-login)
    -   [Forgot Password](#forgot-password)
    -   [Creating Incidents](#creating-incidents)
    -   [Viewing Incidents](#viewing-incidents)
    -   [Editing Incidents](#editing-incidents)
    -   [Searching Incidents](#searching-incidents)
-   [Database Setup](#database-setup)
-   [Environment Variables](#environment-variables)
-   [Contributing](#contributing)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)
-   [API Documentation (Swagger/Redoc)](#api-documentation-swaggerredoc)

## Getting Started

Follow these instructions to set up and run the Incident Management System on your local machine.

### Prerequisites

Ensure you have the following installed:

* **Python:** 3.8 or higher ([https://www.python.org/downloads/](https://www.python.org/downloads/))
* **pip:** Python package installer ([https://pypi.org/project/pip/](https://pypi.org/project/pip/))
* **MySQL** (Preferred) ([https://www.mysql.com/downloads/](https://www.mysql.com/downloads/))
* **Web Browser:** For viewing the JavaScript/CSS frontend.

### Backend Installation (Django REST Framework)

1. Get the project from zip file

2.  Create a virtual environment (recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # On macOS/Linux
    # venv\Scripts\activate  # On Windows
    ```

3.  Install backend dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4.  Configure the database in `incident_management_system/settings.py`. Ensure the settings match your MySQL setup.

5.  Apply migrations:
    ```bash
    python manage.py migrate
    ```

6.  Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```

### Frontend Setup (JavaScript and CSS)

1.  Create your frontend files (HTML, CSS, JavaScript) within a designated directory (e.g., `frontend`).
2.  Ensure your JavaScript code makes API calls to the Django backend endpoints (see [Backend API Endpoints](#backend-api-endpoints)).
3.  You might need to serve your frontend files using a simple HTTP server or integrate them into your Django setup for development. To serve static files through Django, ensure `STATIC_URL` and `STATICFILES_DIRS` are configured correctly in `incident_management_system/settings.py`. Then, place your HTML, CSS, and JavaScript files within the directories specified in `STATICFILES_DIRS` (e.g., a `static` folder in your project root or within your Django app). After configuration, run `python manage.py collectstatic`.

### Running the Application

* **Backend (Django Development Server):**
    ```bash
    python manage.py runserver
    ```
    The backend API will be accessible at `http://127.0.0.1:8000/api/`. The static HTML pages will be accessible at `http://127.0.0.1:8000/static/html/`.

* **Frontend (Serving Static Files):**
    Open the following HTML files in your web browser after ensuring static files are collected (using `python manage.py collectstatic` if serving through Django):
    * **Homepage:** [http://127.0.0.1:8000/static/html/index.html](http://127.0.0.1:8000/static/html/index.html)
    * **Login Page:** [http://127.0.0.1:8000/static/html/login.html](http://127.0.0.1:8000/static/html/login.html)
    * **Registration Page:** [http://127.0.0.1:8000/static/html/register.html](http://127.0.0.1:8000/static/html/register.html)
    * Other HTML pages (create incident, view incidents, edit incident, search incident) will also be accessible under the `/static/html/` path, assuming you organize them accordingly.

## Backend API Endpoints

| Endpoint                      | Method | Description                                                                 | Authentication Required |
| :---------------------------- | :----- | :-------------------------------------------------------------------------- | :---------------------- |
| `/api/users/register/`        | POST   | Registers a new user.                                                       | No                      |
| `/api/users/login/`           | POST   | Logs in an existing user and returns an authentication token.                | No                      |
| `/api/users/logout/`          | POST   | Logs out the currently authenticated user.                                  | Yes (Token)             |
| `/api/incidents/`             | GET    | Lists incidents created by the logged-in user.                             | Yes (Token)             |
| `/api/incidents/`             | POST   | Creates a new incident for the logged-in user.                              | Yes (Token)             |
| `/api/incidents/<int:pk>/`    | GET    | Retrieves a specific incident created by the logged-in user.                | Yes (Token)             |
| `/api/incidents/<int:pk>/`    | PUT    | Updates a specific incident created by the logged-in user (if not closed). | Yes (Token)             |
| `/api/incidents/<int:pk>/`    | DELETE | Deletes a specific incident created by the logged-in user.                 | Yes (Token)             |
| `/api/incidents/search/?incident_id=<ID>` | GET    | Searches for an incident by its unique Incident ID.                         | Yes (Token)             |

## Frontend Pages (JavaScript and CSS)

* **Homepage:** Accessible at [http://127.0.0.1:8000/static/html/index.html](http://127.0.0.1:8000/static/html/index.html). This page might provide an overview of the system or links to other functionalities.
* **Login Page:** Accessible at [http://127.0.0.1:8000/static/html/login.html](http://127.0.0.1:8000/static/html/login.html). Enables existing users to log in with their credentials.
* **Registration Page:** Accessible at [http://127.0.0.1:8000/static/html/register.html](http://127.0.0.1:8000/static/html/register.html). Allows new users to register with their details (Username, Email ID, Phone Number, Address, Pin code - with auto-city/country using JavaScript).
* **Forgot Password Page:** Provides a mechanism for users to reset their passwords (implementation details in JavaScript).
* **Create Incident Page:** A form for logged-in users to create new incidents with the required details (Reporter Name - auto-filled via API, Incident Details, Priority).
* **View Incidents Page:** Displays a list of incidents fetched from the API for the logged-in user.
* **Edit Incident Page:** Allows logged-in users to modify their open or in-progress incidents by sending PUT requests to the backend API.
* **Search Incident Page:** Provides a field to enter an Incident ID and fetches the relevant incident from the API.

## Usage

### User Registration

Navigate to the registration page ([http://127.0.0.1:8000/static/html/register.html](http://127.0.0.1:8000/static/html/register.html)) and fill in the required details. JavaScript will handle the auto-population of City and Country based on the entered Pin code (you'll need to implement the logic for this, potentially using an external API).

### User Login

Enter your registered email ID and password on the login page ([http://127.0.0.1:8000/static/html/login.html](http://127.0.0.1:8000/static/html/login.html)) to authenticate with the backend API. Upon successful login, you'll receive an authentication token that needs to be included in subsequent API requests (typically in the `Authorization` header as `Token <your_token>`).

### Forgot Password

Follow the instructions on the forgot password page. JavaScript will handle the frontend logic, and you'll need to implement the backend logic for password reset.

### Creating Incidents

Once logged in, navigate to the "Create Incident" page (you'll need to create an HTML file for this and link it). Provide the necessary details. The Reporter Name will be automatically filled based on the logged-in user (fetched from the backend). Ensure your JavaScript on this page sends a POST request to the `/api/incidents/` endpoint with the incident data, including your authentication token.

### Viewing Incidents

Navigate to the "View Incidents" page (you'll need to create an HTML file for this and link it). JavaScript will fetch and display the incidents created by the currently logged-in user from the backend API by making a GET request to the `/api/incidents/` endpoint with your authentication token.

### Editing Incidents

From the "View Incidents" page, you should be able to access an "Edit" option for incidents that are not in "Closed" status. JavaScript will handle the form on the "Edit Incident" page (you'll need to create an HTML file for this and link it, likely with the incident ID in the URL) and send a PUT request to the `/api/incidents/<incident_id>/` endpoint with the updated data and your authentication token.

### Searching Incidents

On the "Search Incident" page (you'll need to create an HTML file for this and link it), enter the unique Incident ID and submit the form. JavaScript will make a GET request to the `/api/incidents/search/` endpoint with the `incident_id` as a query parameter, including your authentication token in the request.

## Database Setup

1.  Ensure you have MySQL installed and running.
2.  Create a database for your project (e.g., `incident_management`).
3.  Update the database connection details (engine, name, user, password, host, port) in your Django project's `incident_management_system/settings.py` file.


## Environment Variables

You might need to set up environment variables for sensitive information such as:

* `SECRET_KEY` (for Django)
* Database credentials
* Any API keys used for Pin code to City/Country lookup.

It's recommended to use a `.env` file (with a package like `python-dotenv`) to manage these variables during development.


## API Documentation (Swagger/Redoc)

The API documentation for this Incident Management System can be accessed using the following endpoints when the Django development server is running:

* **Swagger UI:** `http://127.0.0.1:8000/openapi/`
* **Redoc UI:** `http://127.0.0.1:8000/redoc/`

These endpoints provide an interactive way to explore and test the backend API.

---