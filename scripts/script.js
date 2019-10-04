
function init(){
    console.log('Script loaded!');
    checkIfMusselMonth("may");
    checkIfMusselMonth("september");
}

function addTextDynamically(){
    document.querySelector('#content').innerText+=' Added this';
}

function addTable(){
    var dataArray2005_2006 = [{
        year: 2005,
        houses: 15,
        apartments: 10
    },
    {
        year: 2006,
        houses: 90,
        apartments: 18
    }];

    function getTableRows(dataArray){
        var tableRows = '';
        for(var i = 0; i < dataArray.length; i++){
            tableRows+= `<tr>
                <td>${dataArray[i].year}</td>
                <td>${dataArray[i].houses}</td>
                <td>${dataArray[i].apartments}</td>
            </tr>`;
        }
        return tableRows;
    }

    var table = `<table style="border: 1px solid black;">
        <tr>
            <th>year</th>
            <th>houses</th>
            <th>apps</th>
        </tr>
        ${getTableRows(dataArray2005_2006)}
    </table>`;
    
    var div = document.createElement('div');
    div.innerHTML = table.trim();
    document.body.appendChild(div);
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