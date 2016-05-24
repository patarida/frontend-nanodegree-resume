/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Patarida Kiatsamuttara";
 var formattedName = HTMLheaderName.replace("%data%", name);

 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

//---------------------variable arrays-------------------------//

var bio = {
    "name": name,
    "role": role,
    "bioPic": "http://postimg.org/image/oerfq3lvf/",
    "welcome_msg": "Welcome",
    "skills": ["Python", "HTML/CSS", "JavaScript", "Statistics"],
    "contacts": {
        "email": "patarida@gmail.com",
        "skype": "lhinoroom",
        "mobile": "+66-88-234-8062",
        "gitHub": "Patarida",
        "twitter": "@happypata",
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

var works = {
    "jobs": [
        {
        "employer":"Schlumberger China", 
        "title":"Operation Support Engineer", 
        "location":"Shekou, China", 
        "dates":"2014-2016", 
        "descriptions":"Technical support for drilling operation."
        },
        {
        "employer":"Schlumberger China", 
        "title":"General Field Engineer", 
        "location":"Tanggu, China", 
        "dates":"2013-2014", 
        "descriptions":"Lead the drilling & measurement operation projects."
        },
        {
        "employer":"Schlumberger Overseas S.A.", 
        "title":"General Field Engineer", 
        "location":"Phitsanulok, Thailand", 
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
        "images": "images/rig3.jpg"
        }
    ]
};
//----------end of variable declaratin--------- //


//------- if skills not empty, add skills------ //
if (bio["skills"]){
    $("#header").append(HTMLskillsStart)
    for (var i in bio["skills"]) {
        var formattedSkills = HTMLskills.replace("%data%", bio["skills"][i]);
        $("#skills").append(formattedSkills);
    };
};

//--for all jobs in works, append HTMLworkStart for each one-- //
for (var job in works.jobs) {
    $("#workExperience").append(HTMLworkStart);    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", works.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", works.jobs[job]["title"]);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);

    
    
    
    var formattedDates = HTMLworkDates.replace("%data%", works.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", works.jobs[job]["location"]);
    var formattedDescription = HTMLworkDescription.replace("%data%", works.jobs[job]["descriptions"]);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);

};
