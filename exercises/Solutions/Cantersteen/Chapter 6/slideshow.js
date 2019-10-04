var i = 1;
function slideShow()
{
document.getElementById("slideshow").src = "images/work/image0"+i+".jpg";
if (i!=7)
{
i++;
} else
{
i=1;
}
setTimeout("slideShow()",2000);
}
slideShow();