// define our calculator
const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null
};


function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // check to see if we are waiting for a second number to be input
    if (Wait_Second_Operand === true) {
        // if so, set the display to this new number
        Calculator.Display_Value = digit;
        // tell the calc we aren't waiting for it anymore
        Calculator.Wait_Second_Operand = false;
    }
    else {
        //overwrite Display_Value if current value is 0
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) {
    // if were waiting for a digit, we don't want a decimal
    // although technically, we could just have it do a 0. in this case.
    if (Calculator.Wait_Second_Operand === true) return;
    // add a dot if we don't alread have one
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}


function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;

    // convert screen to number
    const Value_of_Input = parseFloat(Display_Value);

    //if we have an operator, switch it to the one we just entered
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    // if we don't have a first number, set it equal to current display value
    if (First_Operand === null) {
        console.log("second if");
        Calculator.First_Operand = Value_of_Input;
    }
    // if we already have an operator, handle the operation
    else if (operator) {
        console.log("actually handling the operator")
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9);
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

// defines our operation handling
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

// clear calc so we can start from scratch
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

// refresh display on start
Update_Display();


// setup an event listener for all of our buttons
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    // check if we clicked a button
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    // believe this was missing from the course
    // when we hit this button it actually returns what we want calculated
    if (target.classList.contains('equal-sign')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})