/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')


// TODO create chart object
let expensesChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [],
                backgroundColor: []
            }
        ],
        labels: []
    },
    options: {}
})


// TODO (optional) replace with colors of your choice. The array can have as many or as few colors as you like
let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]


function addExpenseToChart(name, amount) {
    // Add data to the label array, and first dataset array
    expensesChart.data.labels.push(name)
    expensesChart.data.datasets[0].data.push(amount)

    // How many colors are used so far?
    let colorCount = expensesChart.data.datasets[0].backgroundColor.length;
    // push the next color from the chartColor list
    // cycle back to the start of the list, if they've all been used
    expensesChart.data.datasets[0].backgroundColor.push(chartColors[colorCount % chartColors.length])
    expensesChart.update()

}


addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value
    let expenseAmount = expenseAmountInput.value

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length == 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length == 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not procede to add to chart
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // TODO call function to update chart
    addExpenseToChart(expenseName, expenseAmount)

    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})
window.addEventListener('keyup', function(event){
    //check if enter key is pressed, which has keycode 13
    if (event.keyCode === 13) {
        // And if the focus is on one of the inputs, then click the addExpenseButton
        let inputElements = [ expenseNameInput, expenseAmountInput, addExpenseButton]
        if ( inputElements.includes(document.activeElement) ) {
            addExpenseButton.click()
        }
    }
})

// TODO add event listener to click the Add Expense button when the enter key is pressed