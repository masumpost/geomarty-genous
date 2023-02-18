function inputValue(idName){
        let input1 = document.getElementById(idName);
        let input1Value = input1.value;
        let input = parseFloat(input1Value);
        return input;
}
function textValue(idName){
        let input1 = document.getElementById(idName);
        let input1Value = input1.innerText;
        let input = parseFloat(input1Value);
        return input;
}


function getTableValue(number, name, total){
    let container = document.getElementById('table-container');
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${number}</td>
    <td>${name}</td>
    <td>${total} <span>cm<sup>2</sup></span></td>
    <td><button class="bg-blue-500 rounded-lg text-white p-2 font-semibold">Convert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr);
}