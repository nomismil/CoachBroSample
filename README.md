# IT5007 Project Group 9 - CoachBRO

Attach docker shell to the container on VSCode and clone this repository.
- `cd /home/it5007/coachBro`
- `git clone https://github.com/IT5007-2220/course-project-project-group-9.git`
- `cd course-project-project-group-9`

Run the following commands to initialise mongoDB database:
- $ systemctl start mongod
- $ mongo coachbro scripts/init.mongo.js

Run the following commands to compile and start the app:
- $ npm install
- $ npx webpack
- $ npm run compile
- $ npm start
