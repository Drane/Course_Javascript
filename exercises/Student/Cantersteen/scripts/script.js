
function onMouseDownBody(nsEvent){
    // in IE, the event is available from the window object
    var theEvent = nsEvent ? nsEvent : window.event;
    var locString = "X = " + theEvent.screenX + " Y = " + theEvent.screenY;
    console.info(locString);
}

function onLoadWindow(event){
    console.info('Focussing... Event:', event);
    document.getElementById('name').focus();
}

window.onload=onLoadWindow;

function onKeyUpMessage(){
    console.info('Message entered... Event:', event);
    let messageLengthLeft = 50 - parseInt(document.getElementById('message').value.length);
    document.getElementById('charsLeft').value = messageLengthLeft;    
}
