//     BIO object
var bio = {
    name: "Dmitry Krupenya",
    role: "Web Developer",
    contacts: {
        mobile:"+79119999999",
        twitter: "dkrpn",
        github: "dkrupenya",
        blog: "livejournal",
        location: "Saint-Petersburg",
        email: "dkrupenya@gmail.com"
    },
    bioPic: "http://cs403519.vk.me/v403519261/b0f2/eTwwywaVb2Q.jpg",
    welcome: "Hello, my friends",
    skills: ["HTML5", "CSS3", "JavaScript", "MongoDB", "MeteorJS", "GIT"],
    display: function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", this.role))
            .prepend(HTMLheaderName.replace("%data%", this.name))
            .append(HTMLbioPic.replace("%data%", this.bioPic))
            .append(HTMLwelcomeMsg.replace("%data%", this.welcome));

        $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile))
            .append(HTMLemail.replace("%data%", this.contacts.email))
            .append(HTMLgithub.replace("%data%", this.contacts.github))
            .append(HTMLlocation.replace("%data%", this.contacts.location));

        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (skill in this.skills) {
                $("#skills").append(HTMLskills.replace("%data%", this.skills[skill]));
            }
        }
    }
};
//     Work object
var work = {
    jobs: [
        {   "jobPosition" : "Researcher",
            "employer" : "SPbSU",
            "yearsWorked" : "2003-2015",
            "employerCyty" : "Saint-Petersburg",
            "description" : "Inorganic and Organometallic chemistry"
        },
        {   "jobPosition" : "Junior QA Engineer",
            "employer" : "GGA St.-Petersburg Development Facility",
            "yearsWorked" : "2008-2009",
            "employerCyty" : "Saint-Petersburg",
            "description" : "Manual and automatic testing, Selenium, writing test suits and reports, bugtracking system, Jira"
        }
    ],
    display: function() {
        for (job in this.jobs) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",this.jobs[job].employer))
                .append(HTMLworkTitle.replace("%data%", this.jobs[job].jobPosition))
                .append(HTMLworkDates.replace("%data%", this.jobs[job].yearsWorked))
                .append(HTMLworkLocation.replace("%data%", this.jobs[job].employerCyty))
                .append(HTMLworkDescription.replace("%data%", this.jobs[job].description));
        }
    }
};
//      Projects
var projects = {
    projects: [
        {
            title: "Front-End Nanodegree Project 1",
            dates: "June 2015",
            description: "my first HTML page",
            images: [   "images/p1.png"
                    ]
        },
        {   title: "Front-End Nanodegree Project 2",
            dates: "July 2015",
            description: "my resume (Javascript, jQuery, Google Maps)",
            images: [   "images/p2.png"
            ]
        }
    ],
    display: function() {
        for (project in this.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[project].title))
                .append(HTMLprojectDates.replace("%data%", this.projects[project].dates))
                .append(HTMLprojectDescription.replace("%data%", this.projects[project].description));
            for (img in this.projects[project].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[project].images[img]));
            }
        }
    }
};
//      Education object
var education = {
    schools: [
        {
            "schoolName": "School №222",
            "degree": "Certificate of lower secondary education",
            "years": "1984-1992",
            "schoolCity": "Saint-Petersburg",
            "url": "http://petrischule.spb.ru/",
            "location": "Санкт-Петербург, улица Малая Конюшенная, д. 5"
        },
        {
            "schoolName": "Academic high school at SPbSU",
            "degree": "Certificate of secondary education",
            "years": "1992-1994",
            "schoolCity": "Saint-Petersburg",
            "url": "http://agym.spbu.ru/",
            "location": "Санкт-Петербург, Петергоф, Собственный пр., д. 1"
        },
        {
            "schoolName": "Saint-Petersburg State University",
            "degree": "Master degree",
            "years": "1994-2002",
            "schoolCity": "Saint-Petersburg",
            "url": "http://spbu.ru/",
            "location": "Санкт-Петербург, Петергоф, Университетский пр., д. 26"
        },
        {
            "schoolName": "Saint-Petersburg State University",
            "degree": "PhD in Chemistry",
            "years": "2002-2005",
            "schoolCity": "Saint-Petersburg",
            "url": "http://spbu.ru/",
            "location": "Санкт-Петербург, Университетская наб., д. 7/9"
        }
    ],
    onlineCourses :[
        {
            title: "Heterogeneous Parallel Programming",
            school: "Coursera.org, University of Illinois",
            dates: "2013",
            url: ""
        },
        {
            title: "M101JS: MongoDB for Node.js Developer",
            school: "MongoDB University",
            dates: "January 2015",
            url: "http://education.mongodb.com/downloads/certificates/4b2f70a06cb84ed1886c1cb0ed5ddddb/Certificate.pdf?_ga=1.189629419.1980790262.1422464195"
        },
        {
            title: "The Data Scientist’s Toolbox",
            school: "Coursera.org, Johns Hopkins Bloomberg School of Public Health",
            dates: "October 2014",
            url: "https://www.coursera.org/account/accomplishments/certificate/BMWAG9PJ3N"
        },

        {
            title: "Front-End Nanodegree",
            school: "Udacity",
            dates: "June 2015 - ",
            url: ""
        }
    ],
    display: function() {
        for (school in this.schools) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", this.schools[school].schoolName))
                .append(HTMLschoolDegree.replace("%data%", this.schools[school].degree))
                .append(HTMLschoolDates.replace("%data%", this.schools[school].years))
                .append(HTMLschoolLocation.replace("%data%", this.schools[school].schoolCity));
        }
        $("#education").append(HTMLonlineClasses);
        for (course in this.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title))
                .append(HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school))
                .append(HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates));
            if (this.onlineCourses[course].url) {
                $(".education-entry:last").append(HTMLonlineURL.replace("%data%", this.onlineCourses[course].url));
            }
        }


    }
};

//$("main").append(internationalizeButton);

function inName(name) {
    var names = name.trim().split(" ");
    names[0] = names[0].slice(0,1).toUpperCase() +
                names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names.join(" ");
}

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();





