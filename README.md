# team-profile-generator


## Description
This is a command line application. When a user answers questions their work team then an HTML file will be created displaying that persons team and information about each member.

## User Story

### AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Problems Solved
Workplace teams can change day to day, this application allows a manager to display the current team members and their relevant information in a dynamic and easily accessible fashion. This application solves this problem by meeting the following acceptance criteria:

* GIVEN a command-line application that accepts user input
* WHEN I am prompted for my team members and their information
* THEN an HTML file is generated that displays a nicely formatted team roster based on user input
* WHEN I click on an email address in the HTML
* THEN my default email program opens and populates the TO field of the email with the address
* WHEN I click on the GitHub username
* THEN that GitHub profile opens in a new tab
* WHEN I start the application
* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* WHEN I enter the team manager’s name, employee ID, email address, and office number
* THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* WHEN I select the engineer option
* THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
* WHEN I select the intern option
* THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
* WHEN I decide to finish building my team
* THEN I exit the application, and the HTML is generated





## Usage

The following images show the application in action. This is a link to the video demonstration: 

This image shows the user input:

<img src=".png" alt="An image of the terminal showing all of the questions and user input"/>

This image shows the generated HTML from the user input above:

<img src=".png" alt="An image of the created HTML from the user input"/>




 
## Contributors

Tyler Leeming https://github.com/TLeeming15
## Installation

To install dependancies: npm i 

## License

MIT