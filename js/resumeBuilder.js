/*
This is empty on purpose! Your code to build the resume will go here.
 */
//--------variables declaration and encapsulated display function-------------------------//
var bio = {
    "name": "Patarida Kiatsamuttara",
    "role": "Petroleum Engineer",
    "biopic": "images/rig4.jpg",
    "welcomeMessage": "Welcome to my resume page. It's nice to meet you all.",
    "skills": ["M/LWD", "Drilling Engineering", "Log Interpretation", "Stuck Pipe Prevention"],
    "contacts": {
        "email": "patarida@gmail.com",
        "mobile": "+66-88-234-8062",
        "github": "Patarida",
        "twitter": "@happypata",
        "location": "Bangkok, Thailand"
    },
    "display": function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio["role"]));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio["name"]));
        $("#topContacts").append(HTMLmobile.replace("%data%", bio["contacts"]["mobile"]));
        $("#topContacts").append(HTMLemail.replace("%data%", bio["contacts"]["email"]));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio["contacts"]["github"]));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio["contacts"]["location"])); 
        $("#topContacts").append(HTMLbioPic.replace("%data%", bio["biopic"]));
        $("#topContacts").append(HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]));
        $("#header").append(HTMLskillsStart);
        bio["skills"].forEach(function(val) {
            $("#skills").append(HTMLskills.replace("%data%", val));
        });
        $("#footerContacts").append(HTMLmobile.replace("%data%", bio["contacts"]["mobile"]));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio["contacts"]["email"]));
        $("#footerContacts").append(HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio["contacts"]["github"]));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio["contacts"]["location"]));
    }
};

var education = {
    "schools": [
        {
        "name": "Chulalongkorn University",
        "location": "Bangkok, Thailand",
        "degree": "Bachelor",
        "majors": "Petroleum Engineer",
        "dates": "2003-2008",
        "url": "http://www.mining.eng.chula.ac.th/",
        },
        {
        "name": "Triamudom Suksa School",
        "location": "Bangkok, Thailand",
        "degree": "High School",
        "majors": "Science",
        "dates": "2000-2003",
        "url": "http://www.triamudom.ac.th/",
        },
    ],
    "onlineCourses": [
        {
            "title": "Introduction to programming nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",
        },
        {
            "title": "How to use Git and GitHub",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://classroom.udacity.com/courses/ud775/",
        },
        {
            "title": "JavaScript",
            "school": "Codeacademy",
            "dates": "2016",
            "url": "https://www.codecademy.com/learn/javascript",
        },
    ],
    "display": function(){
        education.schools.forEach(function(val) {
            $("#education").append(HTMLschoolStart);        
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", val["name"]));
            $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", val["degree"]));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", val["dates"]));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", val["location"]));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", val["majors"]));
            $(".education-entry:last").append(HTMLschoolURL.replace("%data%", val["url"]));
        });
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(val) {
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", val["title"]));
            $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", val["school"]));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", val["dates"]));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", val["url"]));
        });
    }
};

var work = {
    "jobs": [
        {
        "employer":"Schlumberger China", 
        "title":"Operation Support Engineer", 
        "location": "Shekou, China", 
        "dates":"2014-2016", 
        "description":"Technical support for drilling operation."
        },
        {
        "employer":"Schlumberger China", 
        "title":"General Field Engineer", 
        "location": "Tanggu, China", 
        "dates":"2013-2014", 
        "description":"Lead the drilling & measurement operation projects."
        },
        {
        "employer":"Schlumberger Overseas S.A.", 
        "title":"General Field Engineer", 
        "location": "Phitsanulok, Thailand", 
        "dates":"2008-2013", 
        "description":"Lead the drilling & measurement operation projects."
        }
    ],
    "display": function(){
        work.jobs.forEach(function(val) {
            $("#workExperience").append(HTMLworkStart);    
            var formattedEmployer = HTMLworkEmployer.replace("%data%", val["employer"]);
            var formattedTitle = HTMLworkTitle.replace("%data%", val["title"]);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", val["dates"]));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", val["location"]));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", val["description"]));
        });
    }
};

var projects = {
    projects: [
        {
        "title": "Rig up operation",
        "dates": "2012",
        "description": "Rig up operation",
        "images": ["images/rig3.jpg"]
        }
    ],
    "display": function(){
        projects.projects.forEach(function(val) {
            $("#projects").append(HTMLprojectStart);    
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", val["title"]));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", val["dates"]));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", val["description"]));
            for (i = 0; i < val["images"].length; i++){
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", val["images"][i]));
            }
        });  
    }
};
//----------end of variable declaratin--------- //

//---internationalize Button to convert to Firstname LASTNAME style ---//
function inName(name){   
    names = name.trim().split(" ");
    return names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase() +" "+names[1].toUpperCase();
}
// append inName button to main div //
$("#main").append(internationalizeButton);


//--call function --//
bio.display();
work.display();
projects.display();
education.display();

//--call googleMap --//
//$("#mapDiv").append(googleMap);