
function init(){
    console.log('Script loaded!');
    checkIfMusselMonth("may");
    checkIfMusselMonth("september");
}

function addTextDynamically(){
    document.querySelector('#content').innerText+=' Added this';
}

function checkIfMusselMonth(month){
    var aOrNotA;

    switch(month){
        case 'september':
        case 'october':
        case 'november':
                aOrNotA = 'a';
            break;
        default:
                aOrNotA = 'not a';
    }
    console.log(month + ' is ' + aOrNotA + ' mussel month!');
}