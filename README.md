# better_headline

Setup:
Install node npm.
`npm install` from better_headline/frontend
`pip install -r requirements.txt` from better_headline

You will need to have a local postgres db setup with better_headline_db 
and an admin named admin with pw tavish. (or change whatever you want in settings.py)

`python manage.py migrate` to setup tables

To start react frontend (from frontend folder)
`npm start`

To start backend
`python manage.py runserver`
