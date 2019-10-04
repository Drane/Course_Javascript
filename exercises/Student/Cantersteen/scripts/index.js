function onLoadWindow(event){
    setDynamicYear();
    document.getElementById("visitorCounter").value = Math.floor(Math.random() * 100);
    document.getElementById("navigation").innerHTML = getMenu(menuArray);
}

function setDynamicYear(){
    document.getElementById("fromDate").innerHTML = new Date('1 Jan 1986 00:00:00 GMT').getFullYear();
    document.getElementById("sinceDate").innerHTML = new Date('1 Jan 1987 00:00:00 GMT').getFullYear();
}

function getMenu(menuArray){
    var menuString = '';
    for(item of menuArray){
        menuString += `<li><a href="${item.page}" target="${item.target}">${item.title}</a></li>`;
    }
    return menuString;
}
window.onload=onLoadWindow;
var menuArray = ['About us','Our work','Our designs','History of architecture','Becoming an architect','Contact us'];
var menuArray = [];
menuArray.push({
    title: "About us",
    page: "index.html",
    target: "_self"
});
menuArray.push({
    title: "Our work",
    page: "slide01.html",
    target: "_blank"
});
menuArray.push({
    title: "Our designs",
    page: "design.html",
    target: "_self"
});
menuArray.push({
    title: "History of architecture",
    page: "history.html",
    target: "_self"
});
menuArray.push({
    title: "Becoming an architect",
    page: "architect.html",
    target: "_self"
});
menuArray.push({
    title: "Contact us",
    page: "contact.html",
    target: "_self"
});