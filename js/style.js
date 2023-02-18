document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = "answer.html";
})


document.getElementById('first-cal-btn').addEventListener('click', function(){
    let firstInput1 = inputValue('first-input1');
    let firstInput2 = inputValue('first-input2');
    let calculateArea = 0.5 * firstInput1 * firstInput2;
    let area = calculateArea.toFixed(2);
    let fName = document.getElementById('first-name').innerText;
    getTableValue(1, fName, area);
});
document.getElementById('second-cal-btn').addEventListener('click', function(){
    let secondInput1 = inputValue('second-input1');
    let secondInput2 = inputValue('second-input2');
    let calculateArea = secondInput1 * secondInput2;
    let area = calculateArea.toFixed(2);
    let sName = document.getElementById('second-name').innerText;
    getTableValue(2, sName, area);
});
document.getElementById('third-cal-btn').addEventListener('click', function(){
    let thirdInput1 = textValue('third-input1');
    let thirdInput2 = textValue('third-input2');
    let calculateArea = thirdInput1 * thirdInput2;
    let area = calculateArea.toFixed(2);
    let tName = document.getElementById('third-name').innerText;
    getTableValue(3, tName, area);
});
document.getElementById('fourth-cal-btn').addEventListener('click', function(){
    let fourthInput1 = textValue('fourth-input1');
    let fourthInput2 = textValue('fourth-input2');
    let calculateArea = 0.5 * fourthInput1 * fourthInput2;
    let area = calculateArea.toFixed(2);
    let forName = document.getElementById('fourth-name').innerText;
    getTableValue(4, forName, area);
});
document.getElementById('fifth-cal-btn').addEventListener('click', function(){
    let fifthInput1 = textValue('fifth-input1');
    let fifthInput2 = textValue('fifth-input2');
    let calculateArea = 0.5 * fifthInput1 * fifthInput2;
    let area = calculateArea.toFixed(2);
    let fifName = document.getElementById('fifth-name').innerText;
    getTableValue(5, fifName, area);
});
document.getElementById('sixth-cal-btn').addEventListener('click', function(){
    let sixthInput1 = textValue('sixth-input1');
    let sixthInput2 = textValue('sixth-input2');
    let calculateArea = 3.1416 * sixthInput1 * sixthInput2;
    let area = calculateArea.toFixed(2);
    let sixName = document.getElementById('sixth-name').innerText;
    getTableValue(6, sixName, area);
});

