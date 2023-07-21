# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



Here are some questions for the students to cover during their presentations:
1. What was your requirements gathering and design process? Was it useful/successful?
requirements: create an interactive page using React. Ideally the app will
include interactive elements such as forms, links and buttons, along with routes, data fetching
and various React hooks as needed, as well as external libraries such as bootstrap and MUI.

sucessful: yes, I have button, data fetching, used bootstrap 

2. Give a high level overview of your application and its features
The weather application is designed to provide users with accurate and up-to-date information about weather conditions in their location and other locations of interest. It offers a range of features to help users plan their activities, stay informed about the weather, and make better decisions based on the forecast.

3. Where does its data come from (external/internal APIs)?
external API  'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='

4. How is this data processed and displayed?
The data is fetched, then displayed by using the elements such as - temperature, humidity, wind speed and cloud percentage. 

5. How can the user interact with your application?
User can search the city at the top-right and the application will give the current weather and the recommended activity to do based on the weather. 

6. Have you used class components or functional components? Why?
The Weather component is written as a function component using the useState hook.

7. How have you structured/broken up your components/code?
I used the basic react app structure without adding any extra components to it.
The data is fetched and displayed in App.js

8. What kinds of React hooks have you used (eg. state, context, effect, navigate)? How?
The useState hook is used twice in the Weather component. 
The weather state variable is used to store the weather data fetched from the API.
The city state variable is used to track the user input for the city.

9. What external tools/libraries have you used (eg. bootstrap/axios/MUI)? How? Why?
bootstrap

10. How might you extend the features of your application in future?
I would add another API to show the current activities in each city. 