# Sociable Api
## Summary
A simple api for social media applications that include users, friends, thoughts and reactions. this api was made using MongoDB and follows the MVC paradigm.
## Code Breakdown
### Users
The User Schema requires a username and email address and has two references, one for the Thought model and another for the User model that acts as a friend array as well as a virtual that acts a friend count. The email has a validator that makes sure that the value received is formatted as an email and it was made using the validator npm package.
### Thoughts
The Thought schema requires text and like the User schema it also requires a username to attach to the User. It also has a timestamp and array of reactions accompanied by a virtual that all reactions. Similarly, the reactions schema also requires a username and text, it also has a timestamp and id. The timestamps are formatted with the dateFormat.js file.
### Controllers 
Both the user controller and the thought controllers work exactly the same the only difference is that the user-controller adds and removes friends while the thought-controller adds and removes reactions. They both follow CRUD operations and can perform GET all, GET one, POST, PUT and DELETE.
### Routes
Since the api follows the MVC paradigm the routes are very simple and only connect the controller methods with the api end points that an application can use.
## Walkthough Video
https://drive.google.com/file/d/1FGdLk_O6KcDvf591tqrTZIFU_Y_BXuYf/view