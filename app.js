let input = document.getElementById('inp');

function calculator(value) {
    input.value += value;
}

function clearAll() {
    input.value = '';
}

function clearLastEntry() {
    input.value = input.value.slice(0, -1);
}

function equal() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}
