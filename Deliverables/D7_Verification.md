Instructions
Structure your deliverable according to the following sections. See the “Team Project Instructions” for details about formatting. Check the lecture materials and perform additional research to produce a high-quality deliverable. As usual, if you have any questions, let me know.

## 1. Description
Provide 1-2 paragraphs to describe your system. This will help us to remember what your system is about. 

Grading criteria (1 point): completeness, language.

## 2. Verification (tests)

The verification for our project comes from a mix of tests. First, we made a mock function using Jest, as well as we also made some unit tests with Jest. And after that, we Used Selenium for Acceptance tests.

#### Unit tests

Testing Framework: Jest

Link to GitHub Folder: ADD WHEN PULL

Test Case/Mock Function: We created a mock function for the test case of a user opening the CreateBoard page and we tested if it renders correctly. This mock function was included in CreateBoard.test.js. We also had a jest.config.js and babel.config.js file to configure Jest to understand ReactJS.

The test passed.


<img width="384" alt="jestmockfuncimage" src="https://github.com/thomasrotchford/CS386-2024-multiPainter/assets/145237887/f17788fe-cc64-4d6b-a343-f804921b69b1">



The jest.mock() function replaces the CreateBoard implementation with a mock implementation.

The mock implementation is a div that renders called "Mock CreateBoard Page".


<img width="319" alt="jestrendercodeimage" src="https://github.com/thomasrotchford/CS386-2024-multiPainter/assets/145237887/b59caaf1-dd86-48b1-86f2-24d34920a5c7">



Jest's describe() function tests the CreateBoard component, while Jest's it() function tests if it renders without crashing.

This tests to see if the render() function is called correctly without throwing errors.

The outcome of the test execution is 1 test and 1 pass, meaning that the page renders and the test passes. 

We did, however, have a depreciation warning. which suggests we could find more updated testing softwares in the future, or update our current testing software.


<img width="876" alt="mocktestingimage" src="https://github.com/thomasrotchford/CS386-2024-multiPainter/assets/145237887/f068cf17-8a21-40b2-b965-e53ad1b7f5a0">

Outside of this mock test, we also did some unit testing. We showed this before in D6, but as this is the unit testing section, it is still highly relevant

For the next portion of our unit tests, we used the framework Jest for our ReactJs code. A few configuration files were required for Jest to parse through the JSX. We tested the CreateBoard.js file which holds the board layout as that one of the largest pieces of our website.

**Here is the testing framework we used: [Jest Documentation](https://jestjs.io/)!**

**And Here is where we stored it all: [Testing Folder](https://github.com/thomasrotchford/CS386-2024-multiPainter/tree/main/Unit%20Testing)!**

#### Acceptance test

An acceptance test is a test that verifies the correct implementation of a feature from the user interface perspective. An acceptance test is a black box test (the system is tested without knowledge about its internal implementation). Provide the following information:

Test framework you used to develop your tests (e.g., Selenium, Katalon Studio, Espresso2, Cucumber, etc.)
Link to your GitHub folder where your automated acceptance tests are located
An example of an acceptance test. Include in your answer a GitHub link to the test and an explanation about the tested feature
A print screen/video showing the acceptance test execution
Grading criteria (7 points): adequate choice of a test framework, coverage of the tests, quality of the tests, adequate example of an acceptance test, print screen/video showing successful tests execution.

## 3. Validation (user evaluation)
Validation aims to ensure that you developed the right product. At the beginning of the semester, you talked to the clients/potential users to understand their needs. Now it is time to check if you are on the right track by conducting some user evaluation on the actual system. Include in this deliverable the following information:

### Script 

Here is our Script for validation!

#### **Task 1: Explore Website ( Expected time: 5 Mins)**

Task Description: Asked users to explore the website, and told them to try to look at
every page they can. Tell us when they think they found every page

**Collected Data**

[ How easy it is to navigate - what pages are useful - how we can improve navigation ]

**Questions Asked**

Q1) Did you have any difficulty finding particular pages? (I.E. free draw, templates,
community, sign-up, sign-in, home, or profile page). If so, what challenges in navigation
did you run into? Can you link it to a particular element?

A1)

Q2) How was your user experience? Did you find ease in navigation? Any particular
element or feature that was particularly helpful/confusing?

A2)

Q3) Which page did you find most engaging and useful? Which page did you find the
least engaging and least useful?

A3)

Q4) For navigation, do you have any further comments, suggestions for improvement, or
additional features that you feel could help mitigate confusion, enhance the user
experience, or increase the overall quality of the webpage?

A4)

#### **Task 2: Account Management (Expected time: 5 Mins)**

Task Description: Asked users to log in and view their profile. Provided no further
explanation on how to do this

**Collected Data**

[ Feedback on how sign in process works - First impressions of profile - Thoughts on the
issue with encryption ]

**Questions Asked**

Q1) How straightforward is the sign-up/sign-in/view profile process? Do you feel any
steps are confusing / are there steps where you encountered difficulties? If so, what
could we improve?

A1)

Q2) Upon viewing your profile what were your first impressions, Are there any features
you found most interesting? Are there any more implementations you would like to see
on these profiles?

A2)

Q3) On a scale of 1-10 how satisfied were you with the following [ Sign-up / Sign-in /
Profile ]

A3)

Q4) For the Sign-Up process, do you have any further comments, or suggestions for
improvement, or additional features that you feel could help mitigate confusion,
enhance the user experience, or increase the overall quality of the webpage?

A4)

#### **Task 3: Design Pixel Art (Expected Time: 10-20 mins)**

Task Description: The user is instructed To create 3 drawings, one of easy difficulty, one
of medium difficulty, and one of hard difficulty. User is asked to interact with as many
features on the free draw page as they feel fit.

**Collected Data**

[ User experience of drawing - User rating of easy/medium/difficult drawing - User’s
favored features ]

**Questions Asked**

Q1) How was your experience in creating art?

A1)

Q2) What was your favorite palette among the options provided? Why? How good is it
about the color picker?

A2)

Q3) How are the controls? Are they intuitive or confusing, could you find any bugs?
Would you change anything about how this page works?

A3)

Q4) For the drawing process, do you have any further comments, or suggestions for
improvement, or additional features that you feel could help mitigate confusion,
enhance the user experience, or increase the overall quality of the webpage?

A4)

#### **Task 4: Explore the Community & Work on a template (Expected Time 5-10 minutes)**

Task Description: The User is asked to browse the community page to their liking, and
when satisfied they are asked to choose a template and try to complete it. No further
instructions

**Data Collection**

[ Feedback on how the community page is styled - Feedback on how the art in the
community page is - Feedback on how hard it is to find the template - Feedback on how
the template mode works ]

**Questions Asked**

Q1) As you explored the community page, what were your initial impressions of the
artwork? The layout? The order in which you saw the art pieces?

A1)

Q2) How do you feel about the search functionality? Is there anything you feel we
should change about it?

A2)

Q3) How was the process of selecting a painting from the community page for work on
as a template? How was the actual template drawing experience?

A3)

Q4) For the Template process, do you have any further comments, or suggestions for
improvement, or additional features that you feel could help mitigate confusion,
enhance the user experience, or increase the overall quality of the webpage?

A4)

#### **Final Closing Questions (Expected time 5-10 mins)**

Q1) Based on your experience with the Multipixel website prototype, how satisfied are
you with the overall user experience?

A1)

Q2) On a scale of 1 to 10, how likely are you to recommend Mutipixel to your friends or
colleagues? What factors influenced your rating?

A2)

Q3) Did Mutipixel meet your expectations in terms of providing a social and artistic break
for you and your friends, as described in the initial value proposition?

A3)

Q4) Which features or functionalities did you find most essential or valuable during your
interaction with Mutipixel?

A4)

Q5) Were there any must-have features or functionalities that you felt were missing or
could be improved upon?

A5)

Q6) Did you notice any security, performance, portability, availability, or
maintainability issues while using Mutipixel? If so, please elaborate.

A6)

Q7) Are there any specific areas where you feel Mutipixel could differentiate itself further
from competitors or better meet the needs of its target audience?

Q7)

### Results: We conducted the user evaluation with 3 users so far. 

We interviewed someone experienced in art who has used the website before, who will be called User 1, Someone not experienced in art who has not used the website before, who will be called User 2, and someone very experienced in art and digital art, who has never used the website before, who will be called User 3.

**Here is the data we collected**

#### For Task 1

All Users found it easy to navigate the website and found almost all pages, however no users found the Sign-Up page. When asked about this, User 1 said they didn't feel they needed to do that yet so they never visited the page, and User 2 said they didn't even think about it.

There was a consensus that the nav bar was the most useful tool in navigation and all users liked it. Both User 2 and User 3 felt confusion on the home page, as the main page buttons lead the the same places as the nav bar. This is likely a place we will rework for the website. User 3 also pointed out that the "template" button leads to the "paint" tab, which is confusing.

For the most interesting and engaging page, the users agreed that free-draw and community were the most engaging, and also agreed that the main page and the template were the least engaging. This is a good example of places for us to work on for the next iteration of the website

For things to be implemented and improved. User 1 noted that it could add to the website overall if we cleaned up the "paint" page, and made its use more clear. User 2 felt it could be a nice easter egg if the buttons had SFX or the cat meowed and got up and moved when you clicked on it. User 3 suggested we have more professional text on the home page, and more information or pictures on the home page to explain our website and vibes. They said it would be nice if we had an about us / about multipixel page on the website. A tutorial would also be nice they said.

#### For Task 2

All users agreed that the sign-in process was rather straightforward, though all users noted that since the sign-up lacked the information for the rules on passwords, it would have been impossible to do without my instructions. Because of this, one of our next steps is adding those instructions to the page, as well as making a rule that doesn't let the form progress if the password isn't improved. 

The Users also helped us find lots of bugs in this program. First, there was the password bug of not showing the requirements. Second, User 2 pointed out that we don't check for duplicate usernames. Third, User 1 pointed out that our submit buttons on the modal look strange, we don't know for sure, but we feel it is because our modal might not be connected to our CSS. Fourth, User 3 pointed out that there are fonts on the profile page that do not match. Fifth, User 3 pointed out that the buttons after signing up do not link to the expected areas. Sixth, user 1 pointed out that there's no resend verification button. 

Bugs aside, we also got lots of information on what users would like to see on the profile page. It was a universal opinion that the sign-in page was bland, and could use some more stylization, as well as all users agreed that profile pictures and profile information would be useful.

#### For Task 3

For the third task, all users were able to the free draw page, and complete 3 different drawings, though many Users rushed through the drawings, this was likely because many Users during the interview may not have been in a fully artistic state of mind. We have seen before outside of these interviews, images of high complexity, such as "Handsome Squidward" or "Champion". 

The users liked the variety of options and buttons to click. Many users interacted with the music and found it humorous, and a good fit for the website. They all also looked through all the palettes, and there were variations on which palette was the favorite, as it generally was just the User's favorite color. Many of the users also loved the free-color palette.

The only negative data we found, is many users struggle with the click and drag bug, where it sometimes causes a cross to pop up, and it no longer drags. This is a minor bug that or team has been looking into, but all users recommend removing it

#### For Task 4

For the fourth task, all users skimmed the community page for a bit, before eventually settling on a template to draw. Many users felt that it was not readily intuitive that you needed to click on images on the community page to access the templates. 

They recommended that it could be useful to have an in-between page that pops up when you click on images in the community page that includes information about the image. This page would also include a button which lets you use this as a template

We also learned that many people wished there were ways to personalize the community page. One idea was to develop a way to sort the images by different aspects, such as by relevance or by likes. Another idea that our Users were interested in, was a way to have more images per column or have a way where they can manipulate how many columns they would wish to see

Lastly, all users felt that the search function made sense, but could be improved, to search by more characteristics, as well as we learned of the existence of some bugs we could improve on

#### For Final Questions

Many of our Users mentioned that they had already answered all they could and offered all the implementations they desired. 

We also used this section to collect the Users' overall satisfaction with this website which was on average a 9/10 and thier overall willingness to recommend the website to others which was a 7/10 (many had not artsy friends and felt they couldn't find others who were interested. This was great information to gather because it means we satisfied almost everything we aimed for

Other than that, many users were interested in quality-of-life improvements such as bug fixes, more functionalities, or more pages or modes.

Lastly, we were also able to learn that many of our users were big fans of the custom color picker palette.

### Reflections

**For the first task**, Our nav bar worked well, however, the home page and its buttons were confusing so we will change that. There was a little learning curve to finding things on the website, but certain things weren't fully clear, as many people didn't know immediately that the Sign-Up or community template pages could be accessed. The users performed this task as expected, but were much faster than I expected. They just sped through the pages and didn't read much. Perhaps some more tutorial text could help. They also produced the actions expected. The most liked pages were the free-draw and community, and the least liked were the home page and the base paint/template page. Overall, I feel we satisfied our value proposition, as many people described switching between the pages as easy, which matches the ideas behind our value proposition of making the website " a break from the world ". We also had good recommendations on what other implementations people would like to see, including a tutorial, an information page, and SFX / easter eggs for the buttons.

**For the second task**, All users felt that the sign-in process was straightforward forward which is good for satisfying our Value Proposition of making a program that can be navigated with ease. We also found lots of bugs during this verification. None that broke our program, though many could be improved to give our website a better user experience. Reflection-wise, we also reviewed lots of information on what future implementations and elements users would like to see in the profile section, such as profile pictures or profile descriptions. So overall, the users found little learning curve other than the bugs we intend to fix, and they were able to perform the tasks as expected, following or value proposition of having an " easy artistic release website ". That being said, we wish to improve on the bugs mentioned a lot more, to make our user experience better.

**For the third task** All users felt that the free-draw process was very streamlined, though they all agreed that the click-and-drag bug being dealt with would greatly improve the user experience. Many of the Users were also unfortunately tired in the interview, so the complex art pieces were kind of rushed, so we didn't have much time to stress test the program. But as mentioned earlier, we have had it done before so we know it is possible. Some people wanted some further implementations like an eraser, dropper, or fill tool. We desire to implement these all, but much coding will need to be done to implement this. Users were able to complete the tasks as expected, and since we can have any users make and submit pixel art, so we satisfied our initial value proposition of making "A place to create, share, and explore".

**For the fourth task** We observed that many of our Users enjoyed scrolling through the community page and found it as one of the most interactive and enjoyable pages on our website. Our users completed tasks as expected, but by this time of the interview, many were tired and did not feel like completing a template, perhaps shorter interviews will be beneficial in the future, Those who did go through completing their template were satisfied, though they mentioned that the page feels a little empty and more should be added to fill in the pages. Other than that, the only main change is to make finding the templates a little more explained and intuitive. However, since we have it working, that means we satisfied our initial value proposition of including the "magic of Paint by Numbers"

**For the final questions** There was no task for this section to complete, so we gained no information on that, but there were lots of wrap of questions that we were able to reflect on. Many of the users felt very satisfied with the website as a whole, as well as they wished to recommend it to others, which is a great sign that we satisfied the Value Proposition of creating a "Social and artistic break from the world, for you and all your friends. A place to share and explore your artistic mind. Feel like a child again, through the magic of Paint by Numbers" in its entirety. many users also mentioned that they want to come back in the future to see what further developments take place. Other than that, our users offered gold-plating ideas on what we could further implement (listed all above) which offer to create places to continue improving our website.

**Overall**

Overall, our team is highly satisfied with the project we made, and it appears through our verifications the users were too. It took around 500 man-hours to get the project to where it is today, and we will likely do more to keep on implementing all these ideas. All of our tasks assigned were able to be completed. They were sometimes unclear, but that is nothing we cannot change in later releases. Furthermore, in these reviews, we were able to learn what the Users were interested in for this project, which are mainly quality-of-life features allowing easier designs on the free draw or additional customizations on the profile. There are many places we have learned we can improve through bugs that we discovered in these tests as well. Lastly, while users were able to navigate the site, we worry there could still be a small learning curve, so we plan to implement a minor tutorial where we can teach the Users about some of our website's key functions. Lastly, as mentioned above, many people were greatly satisfied with the website, so our team feels we can conclusively say that we did satisfy our Initial Value Prompt, As well as we were successful in creating our Minimal Viable Product

Note: Dear Ana, This is not related to D7, but our team felt it was worth mentioning. Overall, our team really did enjoy developing all this, by using the methods and strategies we learned about in class, As well as we just had fun and now have several Multi-Pixel related jokes, which is cool. Furthermore, if time permits, a good amount of us are going to keep working on this as a passion project. This class was a great way to get into software development and was a great way for our team to learn the do's and don't as well as it helped some of us find our passion in software development. thank you for the great class and the great semester! - Team 4
