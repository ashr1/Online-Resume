/*
The display functions for the section objects are declared later in dot notation
 */
var bio = {
    "name": "Ashwin Ramachandran",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "1-669-294-7913",
        "email": "ashwinram1@gmail.com",
        "github": "ashr1",
        "location": "SF"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Hello World!",
    "skills": ["Bootstrap", "Perf Op", "Responsive Design"]
};

var education = {
    "schools": [{
        "name": "DeAnza Community College",
        "location": "Cupertino",
        "degree": "N/A -> transfer",
        "majors": ["CS"],
        "dates": "9/2010 - 7/2013",
        "url": "www.deanza.com"
    }, {
        "name": "San Jose State University",
        "location": "San Jose",
        "degree": "none",
        "majors": ["CS"],
        "dates": "9/2013 - 7/2015",
        "url": "www.sjsu.edu"
    }],
    "onlineCourses": [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "7/23-7/31/2016",
        "url": "https://github.com/udacity/frontend-nanodegree-resume"
    }]
};

var work = {
    "jobs": [{
        "employer": "NBA",
        "title": "Basketball Player",
        "location": "Miami",
        "dates": "2015 - in progress",
        "description": "I wish this was my job!"
    }, {
        "employer": "NFL",
        "title": "Football Player",
        "location": "LA",
        "dates": "2012 - 2014",
        "description": "Too many injuries!"
    }]
};

var projects = {
    "projects": [{
        "title": "Basic Portfolio",
        "dates": "7/15-7/20",
        "description": "Just a basic portfolio to display projects",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGit);

    // Since twitter is optional check for its existence
    if (bio.hasOwnProperty("twitter")) {
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts, #footerContacts").append(formattedTwitter);
    }

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);

    // Users can have different number of skills, so loop through the array
    bio.skills.forEach(function(aSkill) {
        var formattedSkill = HTMLskills.replace("%data%", aSkill);
        $("#header").append(formattedSkill);
    });
};

bio.display();

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var workHeader1 = HTMLworkEmployer.replace("%data%", job.employer);
        var workHeader2 = HTMLworkTitle.replace("%data%", job.title);
        var workHeader = workHeader1 + workHeader2;
        $(".work-entry:last").append(workHeader);

        $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
};

work.display();

projects.display = function() {
    projects.projects.forEach(function(proj) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", proj.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", proj.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", proj.description));
        proj.images.forEach(function(pic) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", pic));
        });
    });
};

projects.display();

education.display = function() {
    // First, a loop to diaply the schools array of objects
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors));
    });
    // Second, a loop to display the Online Classes
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
        });
    }
};

education.display();

$("#mapDiv").append(googleMap);
