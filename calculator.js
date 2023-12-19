let currentInput = '';

function clearScreen(){
    currentInput = '';
    updateScreen();
}

function deleteLast(){
    currentInput = currentInput.slice(0, -1);
    updateScreen();
}

function appendValue(value){
    currentInput += value;
    updateScreen();
}

function calculateResult(){
    try{
        const result = eval(currentInput)
         currentInput = result.toString();
         updateScreen();
    }catch (error) {
        currentInput = 'Error';
        updateScreen();
}
}
function updateScreen(){
    document.getElementById("dom").textContent = currentInput;
}