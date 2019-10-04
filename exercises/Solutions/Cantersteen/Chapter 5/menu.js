function showMenu(index)
{
document.write("<ul id='navigation'>");
var myItem = new Array("About us","Our work","Our designs","History of architecture","Becoming an architect","Contact us");
var myPath = new Array("10","slide01","design","history","architect","contact");
var i;
for (i = 0; i < 6; i++){
	var li = "<li";
	if (index == myItem[i])
	{
		li += " class='current'";
	}
	li += "><a href='"+myPath[i]+".html'>"+myItem[i]+"</a></li>";
	document.write(li);
}
document.write("</ul>");
}