
function inputValue(idName){

        let input1 = document.getElementById(idName);
        let input1Value = input1.value;
        let input = parseFloat(input1Value);

        if(input < 0 ){
                alert('input a number');
        }
        else{

                return input;
        }
}


function textValue(idName){
        let input1 = document.getElementById(idName);
        let input1Value = input1.innerText;
        let input = parseFloat(input1Value);
        return input;
}

let count = 0;
function getTableValue(name, total){
        count += 1;
    let container = document.getElementById('table-container');
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${count}</td>
    <td>${name}</td>
    <td>${total} <span>cm<sup>2</sup></span></td>
    <td><button class="bg-blue-500 rounded-lg text-white p-2 font-semibold">Convert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr);
}

var cards = document.getElementsByClassName('card');
for (var i = 0; i < cards.length; i++) {
    cards[i].onmouseover = function(e) {
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        var colorString = '0px 0px 30px 0px ' + color;
        this.style['box-shadow'] = colorString;
        this.style['-webkit-box-shadow'] = colorString;
        this.style['-moz-box-shadow'] = colorString;
    }  
}