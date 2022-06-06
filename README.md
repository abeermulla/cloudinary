### Images & Tags:
A client-side app built with React, JavaScript, and CSS.
The project will show a grid of photos and allow the user to assign each to one or more tags. The tags are defined by the user. 

### Installation And Setup Instructions:
Clone down this repository. You will need npm installed globally on your machine.
follow these next steps to get your project set up: 
Git clone => https://github.com/abeermulla/cloudinary.git
cd cloudinary
npm install
npm install react 
npm start

### The Technologies I Used:
* React : React JS allows complete flexibility to the developer, You can add as many external libraries and tools as required and build a massive, complicated web application.

* React Icons: React-icons is a small library that helps you add icons (from all different icon libraries) to your React apps. It delivers the icons to your app as components so they're easier to work with, and it lets you style them so they're consistent with the overall style of your app.

* Fetch API : The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.

* Effect Hook - useState and useEffect: They let you use state and other React features without writing a class.

* MUI material : 
MUI offers a wide variety of high quality components that have allowed us to ship features faster.
MUI looks great and lets us deliver fast, solid API design and documentation - it's refreshing to use a component library where you get everything you need.

### Assumptions And tests About The Users:
I created an object where there is only one user and they have a username and password. So I assume that once the user is signed in they will be authorized to do so, and they will be able to tag photos to tags and only those who have a username and a password and are in the object then they can access the app and their details will be saved. 
Those who don't have these things and attempt to sign in will recieve an alert that the details do not match the data.
the user is able to log out also.

### Tests I Would Perform:
* I would test if the tag created by the user if it already exists, if yes they will receive an alert that notifies them that the tag already exists and they can use the existing tag.

* I would check if the user worked on the app in the last 15 minutes and if not then the system would alert them that their session timed out and will disconnect them.
