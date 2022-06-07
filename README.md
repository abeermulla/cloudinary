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


### Images & Tags How To Use :



* First you have to login :
![image](https://user-images.githubusercontent.com/97873678/172328850-ab651f6b-9f39-4a2b-b8f1-995a3fef9e05.png)








* If the details are correct then "welcome sentence" will appear:
![image](https://user-images.githubusercontent.com/97873678/172333683-e9316630-d783-4520-b4d9-5f32f0f07395.png)






* The user can also logout.


* If the details doesn’t match: 
![image](https://user-images.githubusercontent.com/97873678/172328960-3926cc48-69c4-4df7-9cd0-f146f92bf4dc.png)

  




* The website will show you a grid of images and list of tags:
 ![image](https://user-images.githubusercontent.com/97873678/172329011-892a7263-c1b2-494f-b3e4-aee7681e188e.png)



* To add one more tag:
![image](https://user-images.githubusercontent.com/97873678/172329050-e14a8d56-4b6e-46d3-8979-b97a5a8d267f.png)






* Rename the tag:
![image](https://user-images.githubusercontent.com/97873678/172329136-f1091ee3-48b6-43e8-a911-14dda49cb48a.png)
![image](https://user-images.githubusercontent.com/97873678/172329167-769d9414-f901-4717-8707-b35ad78d9d88.png)
![image](https://user-images.githubusercontent.com/97873678/172329213-851041dc-3c65-4952-94fe-98f06325c393.png)






* Delete the tag:
![image](https://user-images.githubusercontent.com/97873678/172329377-a0698ed9-ffd8-4430-9a5c-732a55b92d3f.png)
![image](https://user-images.githubusercontent.com/97873678/172329456-571c0b67-51f9-490e-84a9-2de9c7bfa9c0.png)




* To tag image to one or more tags:
![image](https://user-images.githubusercontent.com/97873678/172329517-277d0fbe-4664-4971-b912-bccb7eeacc0a.png)
![image](https://user-images.githubusercontent.com/97873678/172329590-00428de8-e642-43ff-b570-6454b45ac873.png)
![image](https://user-images.githubusercontent.com/97873678/172329628-33e8a8ae-5d9e-4b27-8e24-a9b0ba23df9b.png)

 


* To delete image from a tag:
![image](https://user-images.githubusercontent.com/97873678/172329674-131fdcb9-c56f-487d-adc2-7ad4c5ddfdc6.png)
![image](https://user-images.githubusercontent.com/97873678/172329716-80133395-c4ef-48f0-8ae1-1ee7e462bb2a.png)

 
