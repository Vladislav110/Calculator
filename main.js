let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operator');
let decimalButton = document.getElementById('decimal');
let resultButton = document.getElementById('result');
let clearButtons = document.querySelectorAll('.clear-btn');
let display = document.getElementById('display');
let memoryCurrentNumber = '0';
let memoryNewNumbers = false;
let memoryAllOperation = '';

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
};

for (let i = 0; i < operations.length; i++) {
    let operator = operations[i];
    operator.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
};

for (let i = 0; i < clearButtons.length; i++) {
    let clearBtn = clearButtons[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
    });
};

decimalButton.addEventListener('click', decimal);
resultButton.addEventListener('click', result);

function numberPress(number) {
    if (memoryNewNumbers) {
        display.value = number;
        memoryNewNumbers = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };
};

function operation(oper) {
    let localMemory = display.value;
    if (memoryNewNumbers && memoryAllOperation !== '=') {
        display.value = memoryCurrentNumber;
    } else {
        memoryNewNumbers = true;
        if (memoryAllOperation === '+') {
            memoryCurrentNumber += parseFloat(localMemory);
        } else if (memoryAllOperation === '-') {
            memoryCurrentNumber -= parseFloat(localMemory);
        } else if (memoryAllOperation === '*') {
            memoryCurrentNumber *= parseFloat(localMemory);
        } else if (memoryAllOperation === '/') {
            memoryCurrentNumber /= parseFloat(localMemory);
        } else {
            memoryCurrentNumber = parseFloat(localMemory);
        };
        display.value = memoryCurrentNumber;
        memoryAllOperation = oper;
    };
};


function decimal(params) {
    let decimaMemory = display.value;

    if (memoryNewNumbers) {
        decimaMemory = '0.'
        memoryNewNumbers = false;
    } else {
        if (decimaMemory.indexOf('.') === -1) {
            decimaMemory += '.';
        };
    };
    display.value = decimaMemory;
};

function clear(id) {
    if (id === 'ce') {
        display.value = '0';
        memoryNewNumbers = true;
    } else if (id === 'c') {
        display.value = '0';
        memoryNewNumbers = true;
        memoryCurrentNumber = '0';
        memoryAllOperation = '';
    };

};
