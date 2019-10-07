var current = "";

const collapse = () => {
	if (current != "") {
		document.getElementById(current).innerHTML = "";
		document.getElementById("architect").innerHTML = "Architect Portrait";
	}
}

const getArchitect = (name) => {
    console.log(`Getting architect ${name}...`);
    collapse();
    if (current != name) {
		current = name;
    	sendRequest(name);
    } else {
    	current = "";
    }
};

const sendRequest = async (name) => {
    const response = await fetch(`architects/${name}.txt`);
    response.text().then((text) => {
        document.getElementById(current).innerHTML = text;
		document.getElementById("architect").innerHTML = "<img src='images/architects/" +current+".jpg' />";
    });
};