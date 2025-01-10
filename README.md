# Aa River Web Portal (UAV_Project)
 Requirements
 Python 3.12x
 Geoserver 2.26x
 PostgreSQL 16

How to Run the App
1. Configure the Database: Navigate to `UAV_Project/settings.py` to configure the database settings.
2. Install virtualenv:

   pip install virtualenv
3. Navigate to project `UAV_Project` in your terminal and create a Virtual Environment

   virtualenv venv
4. Activate Virtual Environment: Open your terminal and direct it to the project directory `UAV_Project`.
   Activate the virtual environment using the following command:

   venv\Scripts\activate

5. Install Django, psycopg2 and pillow packages using pip:

   pip install django

   pip install psycopg2

   pip install pillow

6. Build the Database: Execute the following commands in the terminal:
   
    python manage.py makemigrations
   
    python manage.py migrate

7. Create a super user (admin):

   python manage.py createsuperuser

8. Run the Server: Start the server by running the command:
   
    python manage.py runserver
