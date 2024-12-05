# Backend
Start MongoDB community server using Docker:
``docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest``

If you do in another way, look if the url to connect to MongoDB server is different from "http://localhost:27017" and change it.

Open "backend" directory:
``cd backend``

Start the server:
``npm run dev``

This will start nodemon (any changes you make on your code will be implemented without needing to stop/restart the server).

Tests created at "task.test.js" file.

To run tests:
``npm run test``

# Frontend
[To be implemented]