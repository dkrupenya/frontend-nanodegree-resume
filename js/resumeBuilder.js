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
    picUrl: "http://cs403519.vk.me/v403519261/b0f2/eTwwywaVb2Q.jpg",
    welcome: "Hello, my friend",
    skills: ["HTML5", "javaScript", "MongoDB", "MeteorJS", "ReactJS", "GIT"]
};

var work = {};
work.jobPosition = "Researcher";
work.employer = "SPbSU";
work.yearsWorked = "10";
work.employerCyty = "Saint-Petersburg";
work.description = "inorganic chemistry";

var education = {
    "schoolName": "222",
    "degree": "Certificate of secondary education",
    "years": "1984-1994",
    "schoolCity": "Saint-Petersburg"
};



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

    .append(HTMLskillsStart)
    .append(HTMLskills.replace("%data%", bio.skills));


$("#workExperience").append(HTMLworkStart)
    .append(HTMLworkEmployer.replace("%data%", work["employer"]))
    .append(HTMLworkTitle.replace("%data%", work["jobPosition"]))
    .append(HTMLworkDates.replace("%data%", work["yearsWorked"]))
    .append(HTMLworkLocation.replace("%data%", work["employerCyty"]))
    .append(HTMLworkDescription.replace("%data%", work["description"]));

$("#education").append(HTMLschoolStart)
    .append(HTMLschoolName.replace("%data%", education.schoolName))
    .append(HTMLschoolDegree.replace("%data%", education.degree))
    .append(HTMLschoolDates.replace("%data%", education.years))
    .append(HTMLschoolLocation.replace("%data%", education.schoolCity));









function upperCaseFirstLetter(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1);
}