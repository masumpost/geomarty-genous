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
