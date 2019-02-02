#Exchange Rate React App

##Installation

To run the test:
1. yarn or npm install
2. yarn test or npm run test

Development:
1. yarn or npm install
2. yarn start or npm run start

Production:
1. yarn or npm install
2. yarn build or npm run build
3. yarn add global serve or npm install -g serve (if you don't have serve)
4. serve -s build

##Build docker image
docker build . -t exchange_rate_app

##Run docker container
docker run -p 8000:80 exchange_rate_app and Navigate to http://localhost:8000/


##Structure and treatment
1. `./src/components` every reusable components that frequently used by many usecase will be placed here.
2. `./src/screens` treat it as the place for the container that wrap their components.
3. `./src/screens/PageName/index.js` any api call that returned data and used by its (Page) contents, will be placed here (treat it as the container of its content). it can be stateful or stateless component.
4. `./src/screens/PageName/PageNameContent/index.js` every page components will be placed here, and all the data that passed from its parent will be processed/rendered here but it can make an api call, so it's not always depend on parent. And it contains test.
5. `./src/static/styles/utilities.css` any reusable style rules and frequently used for all components, will be placed here. (it will reduce bundled size and gain the performance, so we don't have to worry about any duplicate styles).
6. `./src/utils/apiServices` every api call functions will be centralized here.
7. `./src/utils/helpers` every operation functions, that will be used by many usecases will be placed here.
8. `./src/App.js` any route handler will be placed here.
9. `./src/index.js` this is the entry file for react to operate.
