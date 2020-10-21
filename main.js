const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operator');
const decimalButton = document.getElementById('decimal');
const resultButton = document.getElementById('result');
const clearButtons = document.querySelectorAll('.clear-btn');
const display = document.getElementById('display');
let memoryCurrentNumber = '0';
let memoryNewNumbers = false;
let memoryAllOperation = '';

numbers.forEach(num => {
    num.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
});

operations.forEach(operator => {
    operator.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
});

clearButtons.forEach(clearBtn => {
    clearBtn.addEventListener('click', function (e) {
        clear(e.target.textContent);
    });
});

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
    const localMemory = display.value;
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
    } else if
        (decimaMemory.indexOf('.') === -1) {
        decimaMemory += '.';
    };
};

display.value = decimaMemory;
display.value = '0';
memoryNewNumbers = true;

function clear(id) {
    memoryNewNumbers = true;
    display.value = '0';
    if (id === 'c') {
        memoryNewNumbers = true;
        memoryCurrentNumber = '0';
        memoryAllOperation = '';
    };
};
