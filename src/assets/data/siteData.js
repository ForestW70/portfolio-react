import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

// contact info
export const contact = [
    {
        name: "E-mail",
        link: "ForestRWilson@gmail.com",
        type: "email",
        icon: FaEnvelope,
    },
    {
        name: "Phone",
        link: "719-492-9075",
        type: "cell",
        icon: FaPhoneAlt,
    },
    {
        name: "GitHub",
        link: "https://github.com/ForestW70",
        type: "link",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/forestwilson/",
        type: "link",
        icon: FaLinkedin,
    },

]

// project info
export const projects = [
    {
        title: "Space Explorer",
        deploymentDate: "April 3rd, 2021",
        description: "Through the power of NASA's incredible API's, generate a user-unique dashboard to let you explore space your own way!",
        techUsed: "HTML, CSS, JavaScript, JQuery",
        image: "proj-icons/proj1icon.png",
        imageAlt: "SE launch page",
        repo: "https://github.com/ForestW70/SpaceExplorer",
        page: "https://forestw70.github.io/SpaceExplorer/",
    },
    {
        title: "ViBlocks",
        deploymentDate: "June 1st, 2021",
        description: "Web-based DAW (digital audio workstation) that lets you sign up for an account, create and edit live music loops via a sequencer, and save your projects indevidually. Not exactly as polished as I would have liked, but very proud of my team for developing this on such a tight schedule.",
        techUsed: "HTML, CSS, JavaScript, MySQL, Sequelize, Handlebars.js, Express.js, Heroku deployment",
        image: "proj-icons/proj2icon.png",
        imageAlt: "sequencer page",
        repo: "https://github.com/ForestW70/viBlocks",
        page: "https://viblocks.herokuapp.com/",
    },
    {
        title: "Pandora's Box",
        deploymentDate: "July 29th, 2021",
        description: "Using our new knowledge of React, our team set out to create a website that uses Spotify's music library API to allow a user to search, favorite, sort, and review albums using our web interface. Unfortunatly we were unable to build the app to our fullest intent, however we were able to implement many important features such as interfacing with large sets of music data, and a personal profile with favorited albums.",
        techUsed: "React, MongoDB/Mongoose, GraphQL, ApolloDB, Express, JSON web tokens",
        image: "proj-icons/proj3icon.png",
        imageAlt: "the soul got out of the boxxxxxx",
        repo: "https://github.com/AustinJoo97/Pandoras-Box",
        page: "/beepboopnotfound",
    },
    {
        title: 'Booksearch Engine',
        deploymentDate: 'July 30th, 2021',
        description: "My final individual project before graduation! A full-stack MERN app that utilizes Google Book's API to browse and manage lists of favorited books. It was a real race to the finish with this one, so there are still bugs here and there along with an unfinished readme.",
        techUsed: 'React, Express, GraphQL, Mongoose, JSON Web tokens',
        image: 'proj-icons/hw21icon.png',
        imageAlt: 'Book search',
        repo: 'https://github.com/ForestW70/hw21booksearchengine',
        page: '/beepboopnotfound'
    },
    {
        title: 'React portfolio',
        deploymentDate: 'July 28th, 2021',
        description: "React portfolio? You're looking at it! Initially I wanted to have an extra tab for a blog, where I'd describe my daily doings, however I'm more keen to deploying projects than describing them, so that tab was removed. Whats left? A very nice react portfolio if I do say so myself.",
        techUsed: 'React.js, React Hooks, Heroku deployment',
        image: 'proj-icons/reactporticon.png',
        imageAlt: 'React Portfolio',
        repo: 'https://github.com/ForestW70/portfolio-react',
        page: 'https://forestwilson.herokuapp.com/'
    },
    {
        title: 'Offline budget tracker',
        deploymentDate: 'July 23rd, 2021',
        description: "There is potential for myself to be traveling a lot after I land a job, so to be a responsible adult I'll need a budget tracker that I can use anywhere in the world, regardless of if I have an internet connection! That is why I used a service worker to turn my app into a PWA for offline use.",
        techUsed: 'JavaScript, Express, MongoDB/IndexedDB, Service worker/manifest, Heroku deployment, Mongo Atlas',
        image: 'proj-icons/hw19icon.png',
        imageAlt: 'money money money',
        repo: 'https://github.com/ForestW70/hw19offlinebudgettracker',
        page: 'https://budgettracker3456.herokuapp.com/'
    },
    {
        title: 'Regex Tutorial',
        deploymentDate: 'July 30th, 2021',
        description: "I remember looking at regular expressions when I first started my bootcamp and thinking to myself 'wow, I'll never understand this.' This assignment was to use Github Gist to explain Regex as a concept, along with tutorials for many specific Regex techniques. Let's just say I understand them a lot better today!",
        techUsed: 'Github Gist',
        image: 'proj-icons/hw17icon.png',
        imageAlt: 'Regular expression',
        repo: 'https://gist.github.com/ForestW70/6a2947feb689ba886a865f53a9912af7',
        page: 'https://gist.github.com/ForestW70/6a2947feb689ba886a865f53a9912af7'
    },
    {
        title: 'Portfolio3.0',
        deploymentDate: 'July 22nd, 2021',
        description: 'Version 3 of my portfolio. Well, more like 2.5. Since I was already deep into this portfolio by the time I realized this was an assignment, there are few changes. Most notibly is the addition of the resume page, which uses tables to display my resume.',
        techUsed: 'HTML, CSS, JavaScript',
        image: 'proj-icons/hw16icon.png',
        imageAlt: 'Portfolio 3',
        repo: 'https://github.com/ForestW70/Portfolio3.0',
        page: 'https://forestw70.github.io/Portfolio3.0/'
    },
    {
        title: 'Tech Blog',
        deploymentDate: 'July 16th, 2021',
        description: "TechTok is your new one-stop-spot for all things tech. This was my first full-stack app, taking advantage of the MVC paradigm to bring you a website that lets you create an account, create and modify posts, and also comment on other's posts. Please dont tell the other Tok...",
        techUsed: 'JavaScript, MySql, Handlebars, Express.js, Heroku deployment',
        image: 'proj-icons/hw14icon.png',
        imageAlt: 'shell screen',
        repo: 'https://github.com/ForestW70/hw14techblog',
        page: 'https://techblog3456.herokuapp.com/home'
    },
    {
        title: 'E-commerce Backend',
        deploymentDate: 'June 24th, 2021',
        description: 'Are you trying to start your own eBay but arent sure how to connect to your pesky server? Well fear not, because in this project I created a RESTful API that handles it for you.',
        techUsed: 'Node.js, MySql, Express.js, Insomnia/Postman',
        image: 'proj-icons/hw13icon.png',
        imageAlt: 'shell screen',
        repo: 'https://github.com/ForestW70/hw13ecommercebackend',
        page: '',
        demo: 'https://youtu.be/y_LAilM1hRY'
    },
    {
        title: 'Employee Tracker',
        deploymentDate: 'June 7th, 2021',
        description: 'Man this conglomorate of mine sure is hiring a lot of people. I created this program to keep track of every single one of them. This program is similar to hw10, however i have full control over additions, removals, and edits of employees, roles, departments, and salarys.',
        techUsed: 'Node.js, Inquirer, Console.table package, MySQL',
        image: 'proj-icons/hw12icon.png',
        imageAlt: 'shell screen',
        repo: 'https://github.com/ForestW70/hw12employeetracker',
        page: '',
        demo: 'https://youtu.be/x-xalO1bMd8'
    },
    {
        title: 'Note Taker',
        deploymentDate: 'June 7th, 2021',
        description: 'As an avid notetaker, I needed another place to put my notes so I didnt clutter up the hundred other places I take notes. I think i stressed our graders out by conciously making the note title incredibly huge.',
        techUsed: 'HTML, CSS, Express.js, Heroku deployment',
        image: 'proj-icons/hw11icon.png',
        imageAlt: 'note page',
        repo: 'https://github.com/ForestW70/hw11notetaker',
        page: 'https://notetaker3456.herokuapp.com/notes'
    },
    {
        title: 'Team Profile Generator',
        deploymentDate: 'April 27th, 2021',
        description: "I'll soon be needing to hire a whole lot of developers and interns for my multi-brand conglomerate, so for this Node project I have created an input prompt to let me manage and view my growing team.",
        techUsed: 'HTML, CSS, JavaScript, Node.js, Inquirer',
        image: 'proj-icons/hw10icon.png',
        imageAlt: 'team page',
        repo: 'https://github.com/ForestW70/hw10teamprofilegenerator',
        page: '',
        demo: 'https://youtu.be/q5OVMxwlkuU'
    },
    {
        title: 'Node Readme Generator',
        deploymentDate: 'April 27th, 2021',
        description: 'My journey into Node will start by creating something to make my life easier, a readme generator fueled by Inquirer.',
        techUsed: 'JavaScript, Node.js, Inquirer',
        image: 'proj-icons/hw9icon.png',
        imageAlt: 'Readme Generator',
        repo: 'https://github.com/ForestW70/hw9nodereadmegenerator',
        page: '',
        demo: 'https://youtu.be/SuuVYTpCeO4'
    },
    {
        title: 'Portfolio2.0',
        deploymentDate: 'April 22nd, 2021',
        description: 'My second portfolio page. Actually very proud of this one dispite unclear functionality in some places. Tried to get creative with the display here.',
        techUsed: 'HTML, CSS, JavaScript',
        image: 'proj-icons/hw8icon.png',
        imageAlt: 'portfolio page',
        repo: 'https://github.com/ForestW70/Portfolio2.0',
        page: 'https://forestw70.github.io/Portfolio2.0/'
    },
    {
        title: 'Weather Dashboard',
        deploymentDate: 'April 13rd, 2021',
        description: "Want to know what the weather is like in your area but dont own a window or a door? Just search your city to get today's forecast along with the upcoming 5 days. You may also search cities around the world!",
        techUsed: 'HTML, CSS, JavaScript, JQuery',
        image: 'proj-icons/hw6icon.png',
        imageAlt: 'forecast page',
        repo: 'https://github.com/ForestW70/hw6weatherdashboard',
        page: 'https://forestw70.github.io/hw6weatherdashboard/'
    },
    {
        title: 'Work Day Scheduler',
        deploymentDate: 'March 24th, 2021',
        description: 'This bootcamp is starting to get busy, better make an app to track and display everything I need to do in a day, hour by hour.',
        techUsed: 'JavaScript, JQuery',
        image: 'proj-icons/hw5icon.png',
        imageAlt: 'planner page',
        repo: 'https://github.com/ForestW70/hw5workdayscheduler',
        page: 'https://forestw70.github.io/hw5workdayscheduler/'
    },
    {
        title: 'Code Quiz',
        deploymentDate: 'March 18th, 2021',
        description: 'Our task was to create a site that generates a coding-themed multiple choice quiz using js. Only real coding masters can conquer this challenge /s',
        techUsed: 'HTML, CSS, JavaScript',
        image: 'proj-icons/hw4icon.png',
        imageAlt: 'code quiz page',
        repo: 'https://github.com/ForestW70/hw4codequiz',
        page: 'https://forestw70.github.io/hw4codequiz/'
    },
    {
        title: 'Password Generator',
        deploymentDate: 'March 7th, 2021',
        description: "I could never think of a better password than 'password', so to fix this, I created a site that takes in a few user inputs and outputs a secure, randomized password so I no longer need to rack my brain for one.",
        techUsed: 'HTML, CSS, JavaScript',
        image: 'proj-icons/hw3icon.png',
        imageAlt: 'password generator homepage',
        repo: 'https://github.com/ForestW70/hw3passwordgenerator',
        page: 'https://forestw70.github.io/hw3passwordgenerator/'
    },
    {
        title: 'Code Refactor',
        deploymentDate: 'February 20th, 2021',
        description: 'Given poorly written code, our task was to refactor the HTML and CSS to be more effecient and less confusing.',
        techUsed: 'CSS',
        image: 'proj-icons/hw1icon.png',
        imageAlt: 'refactored homepage',
        repo: 'https://github.com/ForestW70/hw1coderefactor',
        page: '/beepboopnotfound'
    },
    {
        title: 'First Portfolio',
        deploymentDate: 'March 4th, 2021',
        description: "First attempt at creating a portfolio site from scratch. Oh how far we've come!",
        techUsed: 'HTML, CSS',
        image: 'proj-icons/hw2icon.png',
        imageAlt: 'first portfolio',
        repo: 'https://github.com/ForestW70/hw2portfolio',
        page: 'https://forestw70.github.io/hw2portfolio/'
    },
    
];


// blog info // Rip
export const blogPosts = [
    {
        postID: 1,
        title: "Welcome to my world, 4.0",
        date: "July 20th, 2021",
        img: "proj-icons/thisicon.png",
        imgAlt: "portfolio icon",
        body: "At this point, you have already visited at least a few of my tabs, so welcome to my post-bootcamp portfolio. Now that I am building version 4.0, I've had a chance to recollect my previous portfolios and realize what was once hard for me to develop is mostly second nature now. This version is taking advantage of React, and wow things have really become much easier. Have ya'll heard about state?!",
        link: "",

    },
    {
        postID: 2,
        title: "For the future...",
        date: "July 22nd, 2021",
        img: "proj-icons/thanks.png",
        imgAlt: "Thank you very muchly",
        body: "This bootcamp has been a whirlwind heat, and it's crazy to see all of the technologies I've studied and projects that I've completed; but I'm still not through quite yet. 24 weeks is such a short amount of time to complete 20-some-on projects, including 3 full-fledged group project. Heck, project 3 is currently still in the works (which by the way is going to be an incredible music database app), but soon I'll be done and have so much to show for it. After this is all said and done, I plan on going back to each project, refactor my very choppy JS, and polish each layout to try and capture what my vision was for each and every one. However, my first order of business will be to actually add a blog feature for myself here, because I will probably not have time before the end to really have this portfolio the way I want it, so stay tuned.",
        link: "",

    },
]
