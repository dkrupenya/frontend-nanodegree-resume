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
    welcome: "Hello, my friend",
    skills: ["HTML5", "javaScript", "MongoDB", "MeteorJS", "ReactJS", "GIT"]
};
//     Work object
var work = {
    jobs: [
        {   "jobPosition" : "Researcher",
            "employer" : "SPbSU",
            "yearsWorked" : "10",
            "employerCyty" : "Saint-Petersburg",
            "description" : "inorganic chemistry"
        },
        {   "jobPosition" : "Researcher",
            "employer" : "SPbSU",
            "yearsWorked" : "10",
            "employerCyty" : "Saint-Petersburg",
            "description" : "inorganic chemistry"
        }
    ]
};
//      Projects
var projects = {
    projects: [
        {
            title: "Front-End Nanodegree Project 1",
            dates: "June 2015",
            description: "my first HTML page",
            images: [   "/img/194x148.jpg",
                        "/img/194x148.jpg"
                    ]
        },
        {   title: "Front-End Nanodegree Project 1",
            dates: "June 2015",
            description: "my first HTML page",
            images: [   "/img/194x148.jpg",
                        "/img/194x148.jpg"
                    ]
        }
    ],
    display: function() {
        for (project in this.projects) {
            $("#projects").append(HTMLprojectStart)
                .append(HTMLprojectTitle.replace("%data%", this.projects[project].title))
                .append(HTMLprojectDates.replace("%data%", this.projects[project].dates))
                .append(HTMLprojectDescription.replace("%data%", this.projects[project].description));
            for (img in this.projects[project].images) {
                $("#projects").append(HTMLprojectImage.replace("%data%", this.projects[project].images[img]);
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
            "url": "http://petrischule.spb.ru/"
        },
        {
            "schoolName": "Academic high school at SPbSU",
            "degree": "Certificate of secondary education",
            "years": "1992-1994",
            "schoolCity": "Saint-Petersburg",
            "url": "http://agym.spbu.ru/"
        },
        {
            "schoolName": "Saint-Petersburg State University",
            "degree": "Master degree",
            "years": "1994-2002",
            "schoolCity": "Saint-Petersburg",
            "url": "http://spbu.ru/"
        },
        {
            "schoolName": "Saint-Petersburg State University",
            "degree": "PhD in Chemistry",
            "years": "2002-2005",
            "schoolCity": "Saint-Petersburg",
            "url": "http://spbu.ru/"
        }
    ],
    onlineCourses :[
        {
            title: "Front-End Nanodegree",
            school: "Udacity",
            dates: "June 2015 - ",
            url: ""
        },
        {
            title: "Front-End Nanodegree",
            school: "Udacity",
            dates: "June 2015 - ",
            url: ""
        }
    ]
};

$("main").append(internationalizeButton);

function inName(name) {
    var names = name.trim().split(" ");
    names[0] = names[0].slice(0,1).toUpperCase() +
                names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names.join(" ");
}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
    .prepend(HTMLheaderName.replace("%data%", bio.name))

// $("#header").append(HTMLcontactGeneric.replace("%data%", bio.email).replace("%contact%", bio.contact));
    .append(HTMLmobile.replace("%data%", bio.contacts.mobile))
    .append(HTMLemail.replace("%data%", bio.contacts.email))
    .append(HTMLtwitter.replace("%data%", bio.contacts.twitter))
    .append(HTMLgithub.replace("%data%", bio.contacts.github))
    .append(HTMLblog.replace("%data%", bio.contacts.blog))
    .append(HTMLlocation.replace("%data%", bio.contacts.location))

    .append(HTMLbioPic.replace("%data%", bio.picUrl))
    .append(HTMLwelcomeMsg.replace("%data%", bio.welcome))

// Lesson 2 Flow control

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }


}


function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart)
            .append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer))
            .append(HTMLworkTitle.replace("%data%", work.jobs[job].jobPosition))
            .append(HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked))
            .append(HTMLworkLocation.replace("%data%", work.jobs[job].employerCyty))
            .append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

$(document).click(function(loc) {
    // your code goes here
    console.log(loc.pageX, loc.pageY);
});


$("#education").append(HTMLschoolStart)
    .append(HTMLschoolName.replace("%data%", education.schoolName))
    .append(HTMLschoolDegree.replace("%data%", education.degree))
    .append(HTMLschoolDates.replace("%data%", education.years))
    .append(HTMLschoolLocation.replace("%data%", education.schoolCity));
