var formattedName = "Dmitry Krupenya";
var formattedRole = "Web Developer";

$("#header").append(HTMLheaderName.replace("%data%", formattedName));
$("#header").append(HTMLheaderRole.replace("%data%", formattedRole));
