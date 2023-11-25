# password-generator

In this assignment we will be creating a password generator. We have been provided with the started code for the html and javaScript file with the set of arrays that we will need to use.

Installation In order to contribute to the task we must install Visual Studio Code. We would also need to intall an extention within Visual Studio Code to run and open a live server in the browser such as in 'chrome' so we are able to see what apears within the console. We will require a terminal/bash to create a repositary that will enable us to push the code base onto github. For this we will need to install Gitbash as well.

For this challenge we were provided with the starter codes for the html file and the JavaScript file with the array of charcters that we are able to use to generate the password. We also had to achive the expected outcomes of out put. The goal was to allow the user to generate a password after a series of promts. This is as follows:

* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 8 characters but no more than 128.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

These were the acceptance criterias to meet for this task.

First, we psudocoded to break down each point, from creating the inital prompt of asking the user to input a chater length of between 8 and 128 to selecting a what type of charter they wanted to include using the confirm funtion. We created the diffrent varables which was utalisied with the array of charecters that we were provided with in the starter code. In order for the password generator to function we used a number of if staments to ensure that the appropriate charecters would display if the user had confirmed the type of charchter they wanted to include. We then had to display this and used the event listener function with click element in which it would start the prompts when selcted and then there after display this using queryselectors.  

Reflection: As the second project within javascript it was quite diffcult to get my head around all the possible outcomes and various if staments that where needed in order to create the password. I used w3schools and the help of 1-1 tutoting sessions to better my understaindg of the apply the logic for the javascript aspect. I was able to deliver all the outcomes of this task with a working model of the password generator. I will need to continue to improve on the logical thinking and carrying out research in a manner that will help me overcome obstacles more easily. 

Resources: https://www.w3schools.com/js/default.asp


Credits: Instructer and TA's from the bootcamp, AskBSC comminity members and special thanks to tutor Scott Everett for helping me across this challange.

Licence I have chosen to go with the MIT licence as it allows people to do almost anything to the project to help improve the website further if required. It is also a simple and persmissive im compaiesion to other licences.