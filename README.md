# Budget-Tracker

This is budget tracking application using node, express, mongoose, and webpack. Budget Tracker allows a user to enter transactions. There's a field for the transaction name and amount and a graph that shows your new total funds based on what was entered. The idea behind this application is to be able to track expenses while offline. Here's how it works.

While a user is offline new transactions can still be entered and are stored in indexedb. Once a user is back online these transactions are sent back to the database. When the page is refreshed you will see all previous transactions plus those entered while offline. 

The power behind being able to use this application offline is the combination of indexedb, service worker, and web manifest. I chose to use webpack in this application to get practice in implementing all aspects of a PWA. However, the indexedb javascript file does not work when bundled (db.js) so that's the only piece not working from the webpack. 


![Budget Tracker](/public/images/budgettracker.JPG)

Here is the deployed application: 
[Check out Budget Tracker on Heroku!](https://secret-oasis-00420.herokuapp.com/)