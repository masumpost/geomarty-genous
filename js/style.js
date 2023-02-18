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