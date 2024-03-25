#### **1. Introduction**

"MultiPixel is an online relaxation video game designed to offer a more enjoyable experience for stressed individuals during their leisure time. Our program is unique as it offers free, easy access to pixel painting software, which can be interacted with anytime, simply through a web browser, helping solve the problem above. Additionally, it fosters a sense of community through a workshop feature where users can showcase their creations, allowing others to download and enjoy coloring their artwork."

[https://github.com/thomasrotchford/CS386-2024-multiPainter](https://github.com/thomasrotchford/CS386-2024-multiPainter)

#### **2. Implemented requirements**

List in this section, the requirements and associated pull request that you implemented for this release, following the example below---include the description of the requirement, a link to the issue, a link to the pull request(s) that implement the requirement, who implemented the requirement, who approved it, and a print screen that depicts the implemented feature (if applicable). I expect that you implement the features you specified in your MVP (c.f. D.2 Requirements).

Order the requirements below by the name of the student who implemented them. All the members of the group should have worked on implementation activities and submitted pull requests. Only stable code should be included in the release. The code that is still under development should be in branches. See the example:

## **Sign up page, Colton**

**Requirement: As a Recurring user** _ **, I want to be able to access a sign-in page so that I can sign into the website and save my progress.** _

**Issue:**[Create a Sign in page · Issue #105 · thomasrotchford/CS386-2024-multiPainter (github.com)](https://github.com/thomasrotchford/CS386-2024-multiPainter/issues/105)

**Pull request:**[**https://github.com/thomasrotchford/CS386-2024-multiPainter/pull/112**](https://github.com/thomasrotchford/CS386-2024-multiPainter/pull/112)

**Implemented by: Colton Leighton**

**Approved by: Hunter Beach**

![UML_Class_Diagram](./D4_images/'Image (2).png')

**Print screen:**![](RackMultipart20240325-1-9td0dt_html_eed24545220f378f.png)

## **Access Menu Homepage, Hunter**

**Requirement: As a website user** _ **, I want to be able to easily access all aspects of the site through a main menu, so that I can easily traverse the site.** _

**Issue:**[Create a Main Menu screen · Issue #106 · thomasrotchford/CS386-2024-multiPainter (github.com)](https://github.com/thomasrotchford/CS386-2024-multiPainter/issues/106)

**Pull request:**[https://github.com/thomasrotchford/CS386-2024-multiPainter/pull/113](https://github.com/thomasrotchford/CS386-2024-multiPainter/pull/113)

**Implemented by: Hunter Beach**

**Approved by: Aidan Trujillo**

**Print screen:**

![](RackMultipart20240325-1-9td0dt_html_c54c8097fb6c962b.png)

## **Draw on grid/template, Aidan**

**Requirement: As a game player, I want to be able to draw on the grid using a multitude of colors, so that I can easily create a piece of pixel art.**

**Issue:**[Create the main grid · Issue #108 · thomasrotchford/CS386-2024-multiPainter (github.com)](https://github.com/thomasrotchford/CS386-2024-multiPainter/issues/108)

**Pull request:**[Adding the working board and palette by Aidan-Trujillo · Pull Request #102 · thomasrotchford/CS386-2024-multiPainter (github.com)](https://github.com/thomasrotchford/CS386-2024-multiPainter/pull/102)

**Implemented by:** Aidan Trujillo

**Approved by:** Thomas Rotchford

**Print screen:**

![](RackMultipart20240325-1-9td0dt_html_f7fb39e367375fa0.png)

## **Paint by Number, Aidan**

**Requirement:**  **As an artist, I want to be able to create pixel paintings so that I can share my artwork with others.**

**Issue:**[https://github.com/thomasrotchford/CS386-2024-multiPainter/issues/122](https://github.com/thomasrotchford/CS386-2024-multiPainter/issues/122)

**Pull request:**[https://github.com/thomasrotchford/CS386-2024-multiPainter/commit/0e79523ca18db92903c2a94eae1a20cbc1e62013](https://github.com/thomasrotchford/CS386-2024-multiPainter/commit/0e79523ca18db92903c2a94eae1a20cbc1e62013)

**Implemented by:** Aidan Trujillo

**Approved by:** Thomas Rotchford

![](RackMultipart20240325-1-9td0dt_html_3f251356c76e9962.png)

![](RackMultipart20240325-1-9td0dt_html_c3cbdce2a5b5ab79.png)

## **Workshop, Matthew**

**Requirement: As a user, I want to be able to see a workshop full of other peoples artworks, so that I can engage with the community and make my own posts**

**Issue:**[**Create Workshop section of site · Issue #119 · thomasrotchford/CS386-2024-multiPainter (github.com)**](https://github.com/thomasrotchford/CS386-2024-multiPainter/issues/119)

**Pull request:**[**Added a workshop feature, needs refining still · thomasrotchford/CS386-2024-multiPainter@f290cb7 (github.com)**](https://github.com/thomasrotchford/CS386-2024-multiPainter/commit/f290cb7ba45c29051b22b1e6770aea1d796b4e43)

**Implemented by: Matthew Gardner**

**Approved by: Thomas Rotchford**

**Print screen:**![](RackMultipart20240325-1-9td0dt_html_8f09e68c50cfd621.png)

_Grading criteria_ (10 points): This section will be evaluated in terms of correctness, completeness, thoroughness, consistency, coherence, adequate use of language, and amount of work put into the implementation. Students can receive different grades depending on their involvement. It is expected that all members contribute with non-trivial implementation. All pull requests should be approved and integrated by the scrum master. You should follow an adequate workflow (description of the requirement on the issue tracker, submission of the implemented requirement as a pull request, and review of the pull request by another developer).

#### **3. Tests**

**GitHub Folder Link:**[**https://github.com/thomasrotchford/CS386-2024-multiPainter/tree/main/Unit%20Testing**](https://github.com/thomasrotchford/CS386-2024-multiPainter/tree/main/Unit%20Testing)

**Summary:**

Because of the fact that our webpage was not working we could not run automated unit testing at this time, however our plan once the webpage is online is to run tests on the Mocha framework and collect data at that point using the test automation report documents. A few use cases may produce the following tests:

**Phase 1 Automated Testing:**

Pixel Art Canvas Template Rendering Test

Pixel Coloring Test (Do the pixels fill in when clicked?) Attribute: onclick event

Undo/Redo Functionality Tests

Save/Load Functionality Tests

**Phase 2 Online Functionality Driven Testing:**

Cross Browser Capability Tests

Data Driven Tests (Username/Password information database testing)

#### **4. Adopted technologies**

- AWS Amplify: Website hosting
- AWS DynamoDB: Database
- AWS Route 53: Website routing for a domain name
- React: Language used for website building

We decided to use almost everything AWS services had to offer as there are all free versions, and we don't plan on having a very demanding website that would require us to pay to upgrade out of the free version. Using all of AWS offers us very easy connections between all the different services and a relatively easy time figuring out how each works, as they all use the same AWS Console.

We decided to build the actual website using React as this allows us to have a lot of interactivity and so we could all learn a new software/language. React was also the only way we could figure out how to upload the website to AWS through our GitHub. However, this is turning out to be a little difficult as we had written some code already using just basic HTML/CSS/JavaScript and now have to turn it into React to upload it together.

**5. Learning/training**

At the start of the project, we each began by deciding what we wanted to do in terms of the project. Then the next meeting we each came back with a slew of technologies that we all thought would work well. After deciding on the specific technologies we each were assigned to watch YouTube tutorials and online courses, and generally work with the technology to understand it well. After this, we all came back and talked with each other trying to teach each other the technology we learned.

#### **6. Deployment**

#### [MultiPainter (multi-pixel.com)](https://www.multi-pixel.com/)

We plan to deploy our system in AWS for a couple of reasons. First, AWS offers great scalability, since many students can use it for different reasons. We can start with a small plan for the base necessities of a website, and easily upgrade if we need more. Second, we chose AWS for reliability, as it is a very well-known server hosting website so we would have no worries of bugs or issues. Lastly, we chose AWS for cost-effectiveness, since AWS Educate is free for students

We are going to deploy our system following these steps. We are going to activate our free AWS accounts. Then we are going to use AWS Amplify as the hosting option. Next, we are going to convert all our current HTML files into REACT files to work better with AWS. To upload our files, we have AWS connect directly to our GitHub where it will pull the files we wish to host, all we have to do is alter the build script to open the right files.

After that, we will have our project hosted!

#### **7. Licensing**

We chose the MIT license so that our software can be distributed freely but also used by people who want to create projects that can be distributed to make a profit. This license also protects us from any security issues which may arise from people using our software.

#### **8. The README File**

You can read about all our files Here

#### **9. Look & feel**

For our user interface, we have 2 competing ideas for design that we are currently trying to choose from. These two ideas are **Minimalist** and **Colorful**. Here are a few examples of each from the test pages we have made so far:

**Minimalism Colorful**![](RackMultipart20240325-1-9td0dt_html_7b4b5d4edefe1df3.png) ![](RackMultipart20240325-1-9td0dt_html_c54c8097fb6c962b.png)

![](RackMultipart20240325-1-9td0dt_html_eed24545220f378f.png)

Seen above are our two types of design we are currently deciding between, **Colorful** and **Minimalist**. The reason we are so split right now is two-fold. First, when we all began working on our pages we did not initially decide on a style. Second, we are yet to choose a style for these two to convert to since each has its pros and cons as listed below

- **Minimalist**:
  - **Pros**:
    - Easy to make
    - Common amongst Websites
    - Easy to Navigate
  - **Cons**:
    - A Bit Boring
-
- **Colorful**:
  - **Pros**:
    - Helps inspire creativity
    - Works well with an art-based platform
  - **Cons**:
    - Takes a bit more time to make
    - Can sometimes be too much
    - Possibly Distracting or Confusing

Seen above is our list of pros and cons. We still have much discussion to do on which way to take the website, but for now, we think we will go with the colorful method to keep things in the style of artistic creativity. To avoid having too much color or confusing UI, we plan to be very careful in what we implement.

#### **10. Lessons learned Done**

In retrospect, I'd say we have learned many different things from each Deliverable and each iteration of the project. I can't think of the best way to sort them so I'll just list our thoughts below

1 ) We used planning poker once and found it very useful. Though weeks that we have a Deliverable due, we struggle to find time to also assign coding tasks. That being said we have learned a good bit of usefulness to planning poker. The main useful thing is making sure to include the priority and the time estimates, so that we can make a plan of what needs to be done first and give everyone equal work. The only thing I think we could improve on is having a plan for what to do if goals don't get completed because we have had that happen a few times and it would set us back a bit

2 ) We started with random roles and we are still currently doing that, it seems to be a good fit for our group, as we now have all been the Scrum Master / Archivist / Facilitator at least once so we all have a good understanding of the toles and what's expected.

3) In retrospect I wish we started coding sooner. We had already a little bit of implementation so far, but We didn't expect to need so much more for this deliverable. To remedy this problem in the future, we are going to try to do planning poker every week to keep the project growing, as well as we will look at the Deliverables as far ahead of time as possible. For Example, we are going to read through D5 entirely next meeting so we know what to prepare for the week off.

4) Another thing our team could do to improve, is to not make assumptions about how parts of the project will work in the future. The first few pages we made were HTML/CSS/JS and we had an assumption that these could be easily converted to react. This ended up not being true, and we had to scrap some code and start from scratch. The first major place I can see this being useful is by not making assumptions about how the database will work, and getting started on that sooner rather than later, next meeting.

5) For team-wide communication we tried a few different things, and so far the best method for our team has shown to be a group chat on message. It's just the simplest method and since we all have phones, anytime someone has a time-sensitive question we can answer kinda fast. We also tried Mircosoft Teams, but it didn't work the best because not everyone would use or check it, so it just got forgotten.

6) The best way to find times for meetings by far was When2Meet, it just worked the best and was most efficient.

7) We have about 2 hours for each meeting, but it commonly gets cut short due to people being late or leaving earlier. We have agreed as a group that there's nothing wrong with it, and we don't mind because life happens, but It does not give us much time to work. If we could change things in retrospect, we would do 2 meetings a week, one for planning what to do for the week, and one for checking our tasks are completed and reflecting.

8) Dividing into specialties is efficient, but can lead to some issues, such as needing to have the server up, but lacking the server people, or needing to fix a front-end issue, but missing the front-end people. This could be solved if we had everyone spec into everything, but it would take much more time.

So in retrospect, there would be a lot to change, but it simplifies to these points. Choose some sort of way to track progression earlier on to keep track of work i.e. planning Poker or Waterfall. Work sooner rather than later. Just focus on using messages and When2Meet to plan and coordinate. Possibly have 2 meetings, one for planning, and one for reflection. And not make assumptions about how future code will work

Those are our retrospects, and we will try hard to see if we can make things better in the future!

If we cannot do it for this project, we will be able to use it for our next ones!

#### **11. Demo TBD**
