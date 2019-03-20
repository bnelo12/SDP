This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Retriva Web App

## Dependencies
- [git](https://help.github.com/en/articles/set-up-git)
- [npm/node](https://nodejs.org/en/)
- [firebase-cli](https://firebase.google.com/docs/cli/)

## Setting up Firebase
A new Firebase project will have to be created in order to use the web app as is. Navigate here: [Firebase](https://console.firebase.google.com). Then create an account and a new empty Firebase project with the name `Retriva`.

Once inside the Firebase project:
1. Click Authentication and set the sign in method to email.
2. Click Database and set up  a new empty database.
3. Click Hosting and enable hosting. This is where you will get the link to your website.
4. Click Functions and enable functions.

Congratulations. You finished the back end of the app. That was quick!

## Web App Installation
Clone this project and cd into the project and then into the web app.

```
git clone https://github.com/elenalape/SDP.git
cd SDP/webapp
```

Now install the web app dependencies:

```
npm install
```

Then create a build:

```
npm run build
```

### firebase-cli setup
Once the web app has built, login with `firebae login`.

Then run `firebase init` to begin set up of the firebase-cli.

The first question will ask if you are ready to begin. Check if you are in the correct directory and type `y` to continue.

Next we need to select what services we need from Firebase. Select as shown here:

```
Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices.
 ( ) Database: Deploy Firebase Realtime Database Rules
>(*) Firestore: Deploy rules and create indexes for Firestore
 (*) Functions: Configure and deploy Cloud Functions
 (*) Hosting: Configure and deploy Firebase Hosting sites
 ( ) Storage: Deploy Cloud Storage security rules
```

Set up the project with these settings exactly:
```
=== Firestore Setup

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore Rules? firestore.rules
? File firestore.rules already exists. Do you want to overwrite it with the Firestore Rules from the Firebase Console? No

Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore indexes? firestore.indexes.json
? File firestore.indexes.json already exists. Do you want to overwrite it with the Firestore Indexes from the Firebase Console? No

=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? JavaScript
? Do you want to use ESLint to catch probable bugs and enforce style? No
? File functions/package.json already exists. Overwrite? No
i  Skipping write of functions/package.json
? File functions/index.js already exists. Overwrite? No
i  Skipping write of functions/index.js
? File functions/.gitignore already exists. Overwrite? No
i  Skipping write of functions/.gitignore
? Do you want to install dependencies with npm now? Yes

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? File build/index.html already exists. Overwrite? No
```

### Firebase Config
In the webapp folder, edit the file `webapp/src/index.js`.

Replace the config there with the config from your Firebase project that you created (This information can be found in the firbase project you created): 
```
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
};
```

Great! Now you are done.

Simply type `firebase deploy` to deploy your app to Firebase. 

# Development

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
