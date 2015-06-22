var name = "Dmitry Krupenya";
var role = "Web Developer";

$("#header").prepend(HTMLheaderRole.replace("%data%", role));
$("#header").prepend(HTMLheaderName.replace("%data%", name));

