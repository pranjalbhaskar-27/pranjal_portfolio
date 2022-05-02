"use strict";
//Grab elements from the DOM
const projectContainer = document.getElementsByClassName("projects-container");
//For Mini Project
const miniProjects = [
  {
    title: "Twitter Bot",
    description:
      "A twitter bot which retweets all the tweet containing hashtag #explorenepal madeby Twitter API and NodeJS.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Twitter-Bot",
    languagesUsed: ["Node JS"],
    icons: ["la:node"],
  },
  {
    title: "E-Commerce REST API",
    description: "Rest API for E-Commerce Application.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/E-Commerce-REST-API",
    languagesUsed: ["Node JS", "Express JS", "Mongo DB"],
    icons: ["la:node", "simple-icons:express", "simple-icons:mongodb"],
  },
  {
    title: "Tic Tac Toe",
    description: "A web based classic tic tac toe game made with javascript.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://tictactoemadebypramesh.netlify.app",
    githubLink: "https://github.com/PrameshKarki/Tic-Tac-Toe",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Telegram UI Clone",
    description: "Telegram UI clone by Flutter.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Telegram-UI-Clone",
    languagesUsed: ["Dart", "Flutter"],
    icons: ["simple-icons:dart", "cib:flutter"],
  },
  {
    title: "Whatsapp UI Clone",
    description: "Whatsapp UI clone by Flutter.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Whatsapp-UI-Clone",
    languagesUsed: ["Dart", "Flutter"],
    icons: ["simple-icons:dart", "cib:flutter"],
  },
  {
    title: "Todo App",
    description: "Todo app created by Flutter.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Todo-App",
    languagesUsed: ["Dart", "Flutter"],
    icons: ["simple-icons:dart", "cib:flutter"],
  },

  {
    title: "Snake Game",
    description: "Snake game made by Java.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Snake-Game",
    languagesUsed: ["Java"],
    icons: ["cib:java"],
  },
  {
    title: "Infix to Postfix Converter",
    description:
      "This basically converts mathematical expressions written in infix notation to postfix notation",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://infix-to-postfix-converter.herokuapp.com",
    githubLink: "https://github.com/PrameshKarki/webTRON-InfixToPostfix",
    languagesUsed: ["Express JS", "Mongo DB"],
    icons: ["simple-icons:express", "simple-icons:mongodb"],
  },
  {
    title: "COVID-19 Tracker",
    description: "A webpage that track the current COVID-19 stats of Nepal.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://covidtrackernepal.netlify.app/",
    githubLink: "https://github.com/PrameshKarki/COVID-19-Tracker-For-Nepal",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Quiz App",
    description: "Simple quiz app created by javascript.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://quizappmadebypramesh.netlify.app",
    githubLink: "https://github.com/PrameshKarki/Quiz-App",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Running Tracker",
    description:
      " A web app tracks your daily run and store this in local storage.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://runningtrackermadebypramesh.netlify.app",
    githubLink: "https://github.com/PrameshKarki/Running-Tracker",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Rock Paper and Scissor",
    description: "Web based Rock,Paper and Scissor game.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://rockpaperscissorgamebypramesh.netlify.app",
    githubLink: "https://github.com/PrameshKarki/Rock-Paper-and-Scissor",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Password Generator",
    description: "Random password generator made with Javascript.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://passwordgeneratormadebypramesh.netlify.app/",
    githubLink: "https://github.com/PrameshKarki/Password-Generator",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Online Store",
    description: "React app for online store.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Online-Mini-Store",
    languagesUsed: ["React JS"],
    icons: ["bx:bxl-react"],
  },
  {
    title: "Love Calculator",
    description: "Check how much you love your partner.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Love-Calculator",
    languagesUsed: ["React JS"],
    icons: ["bx:bxl-react"],
  },
  {
    title: "Employee Records Management",
    description: "React app which manages employee records.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Employee-Records-Management",
    languagesUsed: ["React JS", "Material UI"],
    icons: ["bx:bxl-react", "mdi:material-ui"],
  },
  {
    title: "Color Generator",
    description: " A web app that generates random colors and linear gradient.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://colorgeneratormadebypramesh.netlify.app",
    githubLink: "https://github.com/PrameshKarki/Color-Generator",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Luck Calculator",
    description: "A web app that predicts your day how awesome it will be.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Luck-Calculator",
    languagesUsed: ["React JS"],
    icons: ["bx:bxl-react"],
  },
  {
    title: "Text to Speech Converter",
    description:
      "React app which converts text to speech with the help of browser API.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Text-to-Speech-Converter",
    languagesUsed: ["React JS"],
    icons: ["bx:bxl-react"],
  },
  {
    title: "Personal Assistant",
    description:
      "Node app that reminds me to take water after some time and do some other funny stuff as well.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Personal-Assistant",
    languagesUsed: ["Node JS"],
    icons: ["la:node"],
  },
  {
    title: "Random Password Generator",
    description:
      "CLI app to generate random passwords and copy to the clipboard.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Random-Password-Generator",
    languagesUsed: ["Node JS"],
    icons: ["la:node"],
  },

  {
    title: "Personal Website",
    description: "Responsive single page personal site template.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    liveLink: "#",
    githubLink: "https://github.com/PrameshKarki/Portfolio-Website",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Number Conversion",
    description:
      "CUI Program that convert number from one number system to another number system.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Number-Conversion",
    languagesUsed: ["C++"],
    icons: ["file-icons:c"],
  },
  {
    title: "Expense Tracker",
    description: "Webapp that stores your expenses and incomes.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://expensetrackermadebypramesh.netlify.app/",
    githubLink: "https://github.com/PrameshKarki/Expense-Tracker",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Note App",
    description:
      "Webpage that take the notes from the user and store it in Local Storage.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Note-App",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Temperature Converter",
    description:
      "A web app that converts temperature from one system to another.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://temperatureconvertermadebypramesh.netlify.app",
    githubLink: "https://github.com/PrameshKarki/Temperature-Converter",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "To Do App",
    description: "Simple To Do app with simple functionality.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://todoappcreatedbypramesh.netlify.app/",
    githubLink: "https://github.com/PrameshKarki/To-Do-App",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Calculator",
    description: "Simple calculator that performs basic arithmetic operation.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    githubLink: "https://github.com/PrameshKarki/Calculator",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Analog Clock",
    description: "Realtime analog clock made with javascript.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://analogclockmadebypramesh.netlify.app/",
    githubLink: "https://github.com/PrameshKarki/Analog-Clock",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },

  {
    title: "Book App",
    description: "A book app that stores book information in local storage.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://bookappmadebypramesh.netlify.app",
    githubLink: "https://github.com/PrameshKarki/Book-App",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "BMI Calculator",
    description:
      "A web app that calculates your BMI from the provided information.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://bmicalculatormadebypramesh.netlify.app",
    githubLink: "https://github.com/PrameshKarki/BMI-Calculator",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Tip Calculator",
    description: "A simple web app that calculates the tip.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://tipcalculatorbypramesh.netlify.app/",
    githubLink: "https://github.com/PrameshKarki/Tip-Calculator",
    languagesUsed: ["HTML", "CSS", "Javascript"],
    icons: [
      "icomoon-free:html-five",
      "simple-icons:css3",
      "mdi:language-javascript",
    ],
  },
  {
    title: "Library Book Keeper",
    description:
      "Webpage that keep the library book information in local storage.",
    hasLiveLink: true,
    hasCheckRepositoryButton: true,
    liveLink: "https://librarybookkeeper.netlify.app/",
    githubLink: "https://github.com/PrameshKarki/Library-Book-Keeper",
    languagesUsed: ["Bootstrap", "Javascript"],
    icons: ["bi:bootstrap-fill", "mdi:language-javascript"],
  },
  {
    title: "News Website",
    description:
      "Simple webpage that fetch the latest news from the BBC with the help of API.",
    hasLiveLink: false,
    hasCheckRepositoryButton: true,
    liveLink: "#",
    githubLink: "https://github.com/PrameshKarki/News-Website",
    languagesUsed: ["Bootstrap", "Javascript"],
    icons: ["bi:bootstrap-fill", "mdi:language-javascript"],
  },
];
const projects = [
  {
    title: "Mamaearth.com clone",
    description:
      "It is an ecommerce website which provides varieties of organic and toxic free cosmetic products.",
    hasLiveLink: true,
    hasCheckRepositoryButton: false,
    liveLink:
      "https://mamaearth-clone-u2.netlify.app/",
      
    technologiesUsed: ["HTML", "CSS", "Javascript", "Bootstrap"],
    icons: [
      "arcticons:github",
      "cib:flutter",
      "mdi:language-javascript",
      "cib:postgresql",
    ],
    screenshotSrc: "https://camo.githubusercontent.com/d869e36f9071086bef52f96407a62695f0c364bc32bf67b80666bd455ba58a57/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a68577875504250684c76614a57465a4d4570387766412e706e67",
    githubLink:"https://github.com/pranjalbhaskar-27/MamaEarth_Group_Project_U2.git",
  },
  {
    title: "Shopperstop.com clone",
    description:
      "This company is a well-known e-com giant that deals in textiles, clothing, accessories, cosmetics, etc.",
    hasLiveLink: true,
    hasCheckRepositoryButton: false,
    liveLink: "https://u4-shopperstop-pranjal.netlify.app/",
    technologiesUsed: ["HTML", "SCSS", "JS", "React", "Typescript", "Mongo DB"],
    icons: [
      "icomoon-free:html-five",
      "vscode-icons:file-type-scss",
      "mdi:language-javascript",
      "bx:bxl-react",
      "cib:typescript",
      "simple-icons:mongodb",
    ],
    screenshotSrc: "https://miro.medium.com/max/1400/1*0rR7a6sKKQyqxwyV64UXGg.png",
    githubLink:"https://github.com/pranjalbhaskar-27/U4-Proj-ShoppersStop.git",
  },
  
  // 
];
(function () {
  //!You can make your own logic.Don't try to understand this foolish logic
  let htmlCode = ``;
  miniProjects.forEach((element, index) => {
    let innerHtml = ``;
    let liveLinkBtnCode = element.hasLiveLink
      ? `<button class="live-link" title="Live Link" aria-label="Live Link"><a rel="noopener" aria-label="Live Link" target="_blank" href="${element.liveLink}">
        <span class="iconify" data-inline="false" data-icon="mdi:web"></span>
        </a></button>`
      : ``;
      
    let checkRepositoryButtonCode = element.hasCheckRepositoryButton
      ? `<button class="check-repo" aria-label="Github Link"><a rel="noopener" target="_blank" aria-label="Github Link" href="${element.githubLink}">Check Repository</a></button>`
      : ``;
    htmlCode += `<div class="project-item" >
        <h3 class="title">${element.title}</h3>
        <p>${element.description}</p>
        <!-- Content Wrapper -->
        <div class="wrapper">
            <div class="buttons-container" >
            ${checkRepositoryButtonCode}
            ${liveLinkBtnCode}    
            </div>
            <!-- Made From -->
            <div class="made-from">`;
    element.languagesUsed.forEach((innerElement, index) => {
      innerHtml += `<div title="${innerElement}" class="technology-used">
                    <span class="iconify" data-inline="false" data-icon="${element.icons[index]}"></span>
                    </div>`;
    });
    htmlCode += innerHtml + `</div ></div ></div >`;
  });
  //For mini projects
  projectContainer[1].innerHTML += htmlCode;
})();

//Function to display projects
(function () {
  let htmlCode = ``;
  projects.forEach((element, index) => {
    var gitlink=element.githubLink
    let aosAttribute =
      index % 2 === 0 ? `data-aos="fade-left"` : `data-aos="fade-right"`;
    aosAttribute += ` data-aos-offset="300" data-aos-easing="ease-in-sine"`;

    let innerHtml = "";
    let checkRepositoryButtonCode = element.hasCheckRepositoryButton
      ? `<button class="check-repo" aria-label="Github Link"><a rel="noopener" target="_blank" aria-label="Github Link" href="${element.githubLink}">Check Repository</a></button>`
      : ``;
    let liveLinkBtnCode = element.hasLiveLink
      ? `<button class="live-link" aria-label="Live Link"><a target="_blank" rel="noopener" aria-label="Live Link" href="${element.liveLink}"><span class="iconify" data-inline="false" data-icon="mdi:web"></span></a></button>`
      : ``;

    htmlCode += `<div class="project-card" ${aosAttribute}>
        <header class="screenshot-container">
          <img src="${element.screenshotSrc}" alt="Screenshot of Project">
        </header>
        <main>
            <h1>${element.title}</h1>
            <a href="${element.githubLink}"><p>Github-Repo</p></a>
            <p>${element.description}</p>
        </main>
        <footer class="card-footer">
            <div class="left-side">
                        ${checkRepositoryButtonCode}
                        ${liveLinkBtnCode}
             </div>
             <div class="right-side">
                        <div class="icons-container">`;
    element.technologiesUsed.forEach((innerElement, index) => {
      innerHtml += `<div title="${innerElement}" class="technology-used">
                                    <span class="iconify" data-inline="false" data-icon="${element.icons[index]}"></span>
                                  </div>`;
    });
    htmlCode +=
      innerHtml +
      `</div>
                        </div>
                         </footer>
                    </div>`;
  });
  projectContainer[0].innerHTML += htmlCode;
})();
