# e-commerce-cefalo

A basic crud application using React, Redux and Express. 

## Setup
To setup and run you need to download or clone the project. Then, you can run the project both manually and using Docker.
 - ### Docker
    You need `docker` installed in your system. Go to root directory of the project and run `docker-compose up -d`. The application will up and running after completing task. 
 - ### Manual Setup
    - Go to `backend` folder run `npm install` then `npm run dev` to run in development mode or `npm start` to run production.
    - Go to `frontend` folder and run `npm install && npm start` to run frontend.

After completing the setup browse `http://localhost:3000` for frontend and `http://localhost:5000` for backend.

## Login
You can register new User or use:
 - email: `lim@gmail.com`
 - password: `q1w2e3r4`

## Tech Stack
  - `typescript@4`
  - `react@17`
  - `react-redux@7`
  - `formik@2`
  - `express@4`
  
## Documentation
  Swagger documentation is not completed yet. Instead you can use `Rest Client` extention of `VSCode`. Go to `backend/src/http` and you will find appropriate files of testing.
  
## Testing
  To test backend apis go to backend folder and run `npm run test`.

## Features
  - User login
  - User registration
  - Products list
  - Wish List (Add/Remove)
  
## Limitations
  - Product searching api is not completed yet.
   
