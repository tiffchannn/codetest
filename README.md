This is a guide for how to get the CodeTest running if this repo has been cloned or forked to your local machine.

### Dependencies

- [Node] - Allows you to use npm.
  With Node installed, you can install the following dependencies:
- [Express] - npm install express
- [Mongoose] - npm install mongoose
- [Axios] - npm install axios
- [Cors] - npm install cors
- [Reach/Router] - npm install @reach/router

### Getting Started

- Open a terminal window, make sure you're in the root directory of the application. Run `npm install` to ensure all dependencies have been installed.
- Run `npm run build` to get all the package.json scripts. You will need to run npm run build whenever any changes to the front end are made.
- Run `npm start` to start up the server.
- The terminal will notify you of which port to access the application.

## Architecture

- [Models] - Things that are represented in the database
- [Views] - Templates, JS, and CSS that dictates what the user can do
- [Controllers] - A thin layer that handles routing
