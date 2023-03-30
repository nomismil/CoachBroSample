
1. Attach docker shell to the container on VSCode and clone this repository.
https://github.com/nomismil/CoachBroSample.git

2. Running on localhost 3000

3. Do not change file structure

4. Run the following commands to initialise mongoDB database:
- $ systemctl start mongod
- $ mongo coachbro scripts/init.mongo.js

5. Run the following commands to compile and start the app:
- $ npm install
- $ npx webpack
- $ npm run compile
- $ npm start


Issues:
Need to only ensure the register and transactions components are working:
1) after register button is clicked, it did not save new member to the database
2) when transactions page is clicked, it throws all these red errors
