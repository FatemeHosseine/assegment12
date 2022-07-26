class calculator{
    constructor(previousOperandtextElement,currentOperandtextElement){
        this.previousOperandtextElement = previousOperandtextElement;
        this.currentOperandtextElement = currentOperandtextElement;
        this.clear();

    }
    clear (){
        this.currentOperand = '';
        this.previousOperand = '';

        this.operation = undefined;
    }
    delete(){

    }
    appendNumber( number){
        this.currentOperand = this.currentOperand.tosring() + Number;


    }
    choosOperation(opertaion){

    }
    compute(){

    }
    updateDisplay(){
        this.currentOperandtextElement.innerTexe = this.currentOperand;

    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-opertaion]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
 const previousOperandtextElement = document.querySelector('[data-peevious-operand]');
  const currentOperandtextElement = document.querySelector('[data-current-operand]');
const calculator = new calculator ( previousOperandtextElement,currentOperandtextElement,);
console.log('after');
numberButtons.forEach(button => {
    button.addEventlistener('click', ()=>  {
        console.log('button');
        calculator.appendNumber(button.innerTexe)
        calculator.updateDisplay()


    });


})

