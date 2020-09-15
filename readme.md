# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Deploy on netlify | Complete
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Research and Development | Complete
|Day 3| Research and Development | Complete
|Day 3| Research and Development | Complete
|Day 4| Research and Development | Complete
|Day 5| MVP | Incomplete
|Day 6| Final Touches and Present



## Project Description
Cloud Message
A simple messaging app to help connect you with other Cloud Message users. Post-MVP will visually model what a potential SoundCloud messaging app could look like.

USER STORIES:
        
User story:  
- Quinn is a musician that wants to connect with other artists.
- He can register an account with the Cloud Message app to have his login info saved.
- In order to access his inbox, he will input his registered account information into the login form on the landing page.
- Upon logging in, he will see the main inbox, with a list of messages received from senders and a preview of the messages last received or sent from that user.
- To access a conversation, the user can click on the individual conversation in the list and a new view with the conversation between the users will appear.
- A popup text field in the conversation view will either create or update the message from the user upon submission depending on the models used.
- A upper navbar giving the option to select profile settings or to log out of the account.
- A user settings modal that allows user to change their avatar or delete their account.

POST-MVP

- The user can delete conversations. (Models determined)
- An lower nav bar will give the option to compose a new message and pick a recipient from a drop down menu.
- Search user functionality.
- Utilize the SoundCloud API users endpoints to list actual users in a search function.


INSPIRATION:  
https://www.soundcloud.com


## App Build-out Links 
[Front-end deployed URL](https://cloud-msg.netlify.app/#/)

[Front-end GitHub Repo](https://github.com/studiosemantica/p4frontend/)

[Back-end deployed URL](https://p4-app.herokuapp.com/)

[Back-end GitHub Repo](https://github.com/studiosemantica/p4backend/)


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

[Mobile]
- [Landing Page](https://res.cloudinary.com/dinqukx6a/image/upload/v1600182066/Signup_upfles.png)
- [Logged in, post view](https://res.cloudinary.com/dinqukx6a/image/upload/v1600182067/Mobile_Inbox___Conversations___Settings_m1fcvd.png)

[Tablet & Desktop]
- [Landing Page]()
- [Logged in, edit post view](https://res.cloudinary.com/dinqukx6a/image/upload/v1600182066/Desktop_wzbvhd.png)


Wireframing Resources:

- [MockFlow](https://www.mocflow.com/)


## Time/Priority Matrix 

[Time and Priority Matrix](https://res.cloudinary.com/dinqukx6a/image/upload/v1598235735/Project%203/Music_Journal_Front_EndTPM_isr7ab.jpg)

#### MVP

- Landing Page with logo and Login & Sign Up Buttons
- Modal Forms for Login & Sign Up
- List of Messages for logged-in user
- Sticky Navigation Bar with Drop-Down Menu
- Drop Down Menu showing options: user profile settings, log out
- User name and avatar shown for logged-in User in navbar 
- List View for logged-in user
- Individual Conversation View
- User component for list and conversation view (showing avatar & user name of users)
- Individual Message Cards shown in Conversation View
- Text field to send message in Conversation View
- Modal Form for User Profile Settings with Delete Account and Save Changes Button
- Responsive 
- Message Icon in Navbar links to list view on Mobile
- Refactored into Vue
- Deployed on netlify

#### PostMVP 

- Search list function for users.
- Implement user endpoints from SoundCloud's API.
- Lower nav bar with new message option and drop-down menu option to select user from database.
- Footer with social links and return to top

## Functional Components
 
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
Landing Page with logo and Login & Sign Up Buttons | H | 0hr | 0hr | 0hr|		
Modal Forms for Login & Sign Up	| H | 0hr | 0hr | 0hr|			
List of Messages for logged-in user	| H | 0hr | 0hr | 0hr|		
Sticky Navigation Bar with Drop-Down Menu	| H | 0hr | 0hr | 0hr|			
Drop Down Menu showing options: user profile settings, log out	| H | 0hr | 0hr | 0hr|			
User name and avatar shown for logged-in User in navbar	| H | 0hr | 0hr | 0hr|		
List View for logged-in user	| H | 0hr | 0hr | 0hr|			
Individual Conversation View	| H | 0hr | 0hr | 0hr|			
User component for list and conversation view (showing avatar & user name of users)	| H | 0hr | 0hr | 0hr|			
Individual Message Cards shown in Conversation View | H | 0hr | 0hr | 0hr|			
Text field to send message in Conversation View	| H | 0hr | 0hr | 0hr|			
Modal Form for Profile Settings w/ Delete Account & Save Changes Button	| H | 0hr | 0hr | 0hr|			
Responsive | H | 0hr | 0hr | 0hr|	
Message Icon in Navbar links to list view on Mobile | H | 0hr | 0hr | 0hr|		
Refactored into Vue | H | 0hr | 0hr | 0hr|
Research | H | 0hr | 0hr | 0hr|	
Troubleshooting | H | 0hr | 0hr | 0hr|	
Deployment on Netlify and Testing | H | 0hr | 0hr | 0hr|	

#### PostMVP

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
- Search list function 
- Implement user endpoints from SoundCloud's API | H | 0hr | 0hr | 0hr|	
- Lower nav bar with new message option | H | 0hr | 0hr | 0hr|	
- Drop-down menu option to select user from database| H | 0hr | 0hr | 0hr|	
- Footer with social links and return to top| H | 0hr | 0hr | 0hr|	

## Additional Libraries
- Vue
- Bootstrap

## Code Snippet


## Issues and Resolutions


# This VUE Template

## Setup

- Fork This Repo on Github

- Clone it to your computer

- cd into folder

- Remove the remote (```git remote rm origin```)

- run ```npm install```

## Project Reference

This Template includes

- Vue (https://vuejs.org/v2/guide/)

- Vue Router (https://router.vuejs.org/)

- Buefy (https://buefy.org/)

## Template Features

- Premade header and footer component using Buefy/Bulma, put your router links in the header component, customize these to your likings to give your page a consistent layout

- Router routes are defined in the router folder, create your pages in the views folder

- In the components folder there is a Template.vue which can be copied to make new components
