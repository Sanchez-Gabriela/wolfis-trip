# Wolfis-trip

It is an alternative for those who prefer to follow a plan rather than browsing and deciding for the places to visit.

Functionality:

- Registration
- Calendar to pick the dates to be planned.
- Dropdown selector with 12 catogories, where each selected tag will randomly generate a place. 
- The result is a list of places where each place shows name, picture, address and a short description.


### Landing Page

<img src="/sreeenshots/landingPage.png" width="400"/>

### Registration 

<img src="/sreeenshots/register.png" width="400"/>

### Calendar and Categories

<img src="/sreeenshots/calendar.png" width="400"/>
<img src="/sreeenshots/selector.png" width="400"/>

### Plan

<img src="/sreeenshots/plan.png" width="400"/>


## All technologies used
- Next.js
- Database with PostgresSQL and migrations (Ley).Applying 3 join tables.
- ESLint which is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
- Cookies to store tokens.
- API to get data from Stadt Wien - ...www.wien.gv.at
- API Routes

## Setup instructions

- Install create-next-app
- Run the development server: yarn dev, Open http://localhost:3000 with your browser to see the result.
- You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.
- The data used in the project can be downloaded thanks migrations.


## Deploy

The Next.js app was deployed on Heroku (https://www.heroku.com/#) through GitHub repo.
