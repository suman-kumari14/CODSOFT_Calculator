let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculator = {
    displayValue: '',
    firstOperand: '',
    secondOperand: '',
    operator: '',

    handleButtonPress: function(button) {
        switch (button.id) {
            case 'clear':
                this.displayValue = '';
                this.firstOperand = '';
                this.secondOperand = '';
                this.operator = '';
                break;
            case 'backspace':
                this.displayValue = this.displayValue.slice(0, -1);
                break;
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
                this.operator = button.id;
                this.firstOperand = this.displayValue;
                this.displayValue = '';
                break;
            case 'equals':
                this.secondOperand = this.displayValue;
                this.displayValue = this.calculate();
                this.firstOperand = '';
                this.secondOperand = '';
                this.operator = '';
                break;
            default:
                this.displayValue += button.id;
        }
        display.value = this.displayValue;
    },

    calculate: function() {
        let result;
        switch (this.operator) {
            case 'divide':
                result = parseFloat(this.firstOperand) / parseFloat(this.secondOperand);
                break;
            case 'multiply':
                result = parseFloat(this.firstOperand) * parseFloat(this.secondOperand);
                break;
            case 'subtract':
                result = parseFloat(this.firstOperand) - parseFloat(this.secondOperand);
                break;
            case 'add':
                result = parseFloat(this.firstOperand) + parseFloat(this.secondOperand);
                break;
        }
        return result.toString();
    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.handleButtonPress(button);
    });
});