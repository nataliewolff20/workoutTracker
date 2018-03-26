# workoutTracker
https://wolffworkouttracker.herokuapp.com/


A personal diary-style workout tracker that records your workout types and intensity meter then suggests next steps whether they be methods for recovery or inspiration to increase the intensity of your next workout.

Technologies Used: This is a full-stack application using Node.js, Mongoose, Express, EJS, JavaScript, CSS and html. The app is deployed on Heroku.


Approach Taken: I wanted to build an app that can help an athlete organize their daily workout routines as well as look back on previous routines to track progress. I also wanted to incorporate a coaching structure with self-identification of how hard they worked that day in their workout and then recommend next steps for either an increased intensity workout or recovery options.

Unsolved Problems:
1. I was unable to get the intensity tracker data to correctly redirect the user to the correct page based on their data entry. I would like for the form to be a 1 page entry point for ease of use.

2. The data returned using the 'date' name in the Schema was not attractive. I would like to change that to display simply the month, date and year and not a full timestamp.

3. Still need to figure out a stretch goal of having an option to duplicate a workout that you had previously completed.


Next Steps:

I would like to eventually use this app for a team fitness competition where each workout type and recovery practice earns you points. Points are tracked and users are able to compare their scores with that of their teammates.

TO DO LIST:
  - re-integrate the login process.
  - build out functions to assign point values, loop to add them together any time new data is entered.
  - index page that shows logged in user data.
  - index page that shows entire team data.
