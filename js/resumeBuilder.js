/*
This is empty on purpose! Your code to build the resume will go here.
 */
//---------------------variable arrays-------------------------//

var bio = {
    "name": "Patarida Kiatsamuttara",
    "role": "Web Developer",
    "bioPic": "http://postimg.org/image/oerfq3lvf/",
    "welcome_msg": "Welcome",
    "skills": ["Python", "HTML/CSS", "JavaScript", "Statistics"],
    "contacts": {
        "email": "patarida@gmail.com",
        "skype": "lhinoroom",
        "mobile": "+66-88-234-8062",
        "gitHub": "Patarida",
        "twitter": "@happypata",
        "location": "Bangkok, Thailand",
    }
};

var education = {
    "schools": [
        {
        "name": "Chulalongkorn University",
        "location": "Bangkok, Thailand",
        "degree": "Bachelor",
        "major": "Petroleum Engineer",
        "dates": "2003-2008",
        "url": "http://www.mining.eng.chula.ac.th/",
        },
           {
        "name": "Triamudom Suksa School",
        "location": "Bangkok, Thailand",
        "degree": "High School",
        "major": "Science",
        "dates": "2000-2003",
        "url": "http://www.triamudom.ac.th/",
        },
    ],

    "online": [
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
    ]
};

var work = {
    "jobs": [
        {
        "employer":"Schlumberger China", 
        "title":"Operation Support Engineer", 
        "location": "Shekou, China", 
        "dates":"2014-2016", 
        "descriptions":"Technical support for drilling operation."
        },
        {
        "employer":"Schlumberger China", 
        "title":"General Field Engineer", 
        "location": "Tanggu, China", 
        "dates":"2013-2014", 
        "descriptions":"Lead the drilling & measurement operation projects."
        },
        {
        "employer":"Schlumberger Overseas S.A.", 
        "title":"General Field Engineer", 
        "location": "Phitsanulok, Thailand", 
        "dates":"2008-2013", 
        "descriptions":"Lead the drilling & measurement operation projects."
        }
    ]
};

var projects = {
    project: [
        {
        "title": "Rig up operation",
        "dates": "2012",
        "descriptions": "Rig up operation",
        "images": ["images/rig3.jpg"]
        }
    ]
};
//----------end of variable declaratin--------- //

var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//------- if skills not empty, add skills------ //
if (bio["skills"]){
    $("#header").append(HTMLskillsStart)
    for (var i in bio["skills"]) {
        var formattedSkills = HTMLskills.replace("%data%", bio["skills"][i]);
        $("#skills").append(formattedSkills);
    };
};

//--for all jobs in works, append HTMLworkStart for each one-- //
for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job]["title"]);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job]["location"]);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job]["descriptions"]);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
};

//---internationalize Button to convert to Firstname LASTNAME style ---//
function inName(name){   
    names = name.trim().split(" ");
    return names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase() +" "+names[1].toUpperCase()
};
// append inName button to main div //
$("#main").append(internationalizeButton);


//------------- add personal data --------------//



projects.display = function(){
    for (var all in projects.project) {
        $("#projects").append(HTMLprojectStart);    
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[all]["title"]);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[all]["dates"]);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[all]["descriptions"]);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        for (i = 0; i < projects.project[all]["images"].length; i++){
            var formattedImages = HTMLprojectImage.replace("%data%", projects.project[all]["images"][i]);
            $(".project-entry:last").append(formattedImages);
        };
    };  
};

education.display = function(){
    for (var school in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school]["name"]);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school]["degree"]);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school]["dates"]);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school]["location"]);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school]["major"]);
        var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school]["url"]);
        $("#education").append(HTMLschoolStart);            
        $(".education-entry:last").append(formattedSchoolName );
        $(".education-entry:last").append(formattedSchoolDegree );
        $(".education-entry:last").append(formattedSchoolDates );
        $(".education-entry:last").append(formattedSchoolLocation );
        $(".education-entry:last").append(formattedSchoolMajor );
        $(".education-entry:last").append(formattedSchoolURL );
    };
    for (var online in education.online) {        
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[online]["title"]);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[online]["school"]);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[online]["dates"]);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[online]["url"]);
        
        $(".education-entry:last").append(formattedOnlineTitle );
        $(".education-entry:last").append(formattedOnlineSchool );
        $(".education-entry:last").append(formattedOnlineDates );
        $(".education-entry:last").append(formattedOnlineURL );
    };
};

projects.display()
education.display()

$("#mapDiv").append(googleMap);