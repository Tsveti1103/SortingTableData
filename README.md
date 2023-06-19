# Start project instuctions
1. Open the project with **VSCode**
2. Navigate to the server directory 
``` shell
cd ./server
```
3. Activate the virtual environment 
``` shell
.\venv\Scripts\activate
```
4. Install requirements
``` shell
pip install -r requirements.txt
```
5. If you want to use Django admin panel create a super user
``` shell
python manage.py createsuperuser
```
6. Star the server
 ``` shell
python manage.py runserver
```
7. Navigate to the clien directory
``` shell
cd ../task-manager
```
8. Start the clien side
``` shell
npm start
```