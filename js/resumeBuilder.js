var name = "Dmitry Krupenya";
var role = "Web Developer";

$("#header").prepend(HTMLheaderRole.replace("%data%", role));
$("#header").prepend(HTMLheaderName.replace("%data%", name));

function upperCaseFirstLetter(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1);
}