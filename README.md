# UAV_Project
 Requirements
 Python 3.12x
 Geoserver 2.26x
 PostgreSQL 16

How to Run the App
1. Configure the Database: Navigate to `UAV_Project/settings.py` to configure the database settings.
2. Activate Virtual Environment: Open your terminal and direct it to the project directory `UAV_Project`.
   Activate the virtual environment using the following command:
    venv\Scripts\activate
4. Build the Database: Execute the following commands in the terminal:
    python manage.py makemigrations
   
    python manage.py migrate
6. Run the Server: Start the server by running the command:
    python manage.py runserver
