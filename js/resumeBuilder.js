var skills = ["creative writing", "programming", "HTML/CSS", "Javascript"];

var bio = {
	"name": "Patarida Kiatsamuttara",
	"role": "n/a",
	"contact_info": "Bangkok, Thailand",
	"pictuer_url": picture_url,
	"welcome_msg": "Welome to my resume page.",
	"skills": skills 
};

for ( bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);

   var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
   $("#header").append(formattedSkills);

   var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
   $("#header").append(formattedSkills);
   
   var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
   $("#header").append(formattedSkills);
   
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
   $("#header").append(formattedSkills);

};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);