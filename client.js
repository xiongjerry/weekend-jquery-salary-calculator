console.log('JS loaded');

// Variable Initialization
let employees = [] // create array holding box to be pushed by objects


// let employee = {} // create empty object to put values into and push into array

$(document).ready(readyNow)


                                    // Functions interacting with DOM

function readyNow(){
    console.log('JQuery loaded');
    

                //Click Listeners

// Step 1: Make a Function that takes in all inputs and adds them into an object than returns an array
$('#submitBtn').on('click', addEmployee)


// Step 2: Make a function that takes the input into a new row in the table on click
$('#submitBtn').on('click', newRow)
$('#submitBtn').on('click', clearInput) // resets input


// Step 3: Add a function to the delete button to empty the current row
$('#output').on('click', '.deleteBtn', deleteRow)


// Step 4: Implement a function to calculate the monthly total of each employee
// Step 5: manipulate the function to highlight monthly cost if > 20,000
$('#submitBtn').on('click', monthlyCosts)


console.log('employees', employees); // testing for objects in array

} // end readyNow

                                    // Functions being called to DOM

// function to add employee into array
function addEmployee(){
    console.log('button clicked');
    
    // const employee = {}
    
    // employee.firstName = $('#firstName').val();
    // employee.lastName = $('#lastName').val();
    // employee.iD = $('#iD').val();
    // employee.title = $('#title').val();
    // employee.annualSalary = $('#annualSalary').val();
    
    // employees.push(employee)

            // OPTIMAL OBJECT CREATION
        let employee = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            iD: $('#iD').val(),
            title: $('#title').val(),
            annualSalary: $('#annualSalary').val()
        }
        employees.push(employee)
} // end addEmployee


// function to clear inputs
function clearInput(){
    // $('#firstName').val('')
    // $('#lastName').val('')
    // $('#iD').val('')
    // $('#title').val('')
    // $('#annualSalary').val('')

            // OPTIMAL SOLUTION --> make all inputs a class and make clear it
            $('.inputs').val('')
} // end clearInput


function newRow(){  // --> should be named renderEmployee

    $('#output').append(`
    <tr>
    <td>${$('#firstName').val()}</td>
    <td>${$('#lastName').val()}</td>
    <td>${$('#iD').val()}</td>
    <td>${$('#title').val()}</td>
    <td class="info">$${$('#annualSalary').val()}</td>
    <td>
    <button class="deleteBtn btn btn-secondary btn-sm"">Delete</button>
    </td>
    </tr>
    `)

            // OPTIMAL TABLE CREATION
// $('#output').empty(). // clears old data on the DOM

// for (let employee of employees){
//     $('#output').append(`
//     <tr>
//         <td>${employee.firstName})</td>
//         <td>${employee.lastName}</td>
//         <td>${employees.iD}</td>
//         <td>${employee.title}</td>
//         <td class="info">$${employee.annualSalary}</td>
//         <td>
//             <button class="deleteBtn btn btn-secondary btn-sm"">Delete</button>
//         </td>
//     </tr>`)                   // pushes new data onto DOM

//     }// end loop
} // end newRow


// function for delete button  --> Stretch Goal: Calculate the removal of an Employee's Monthly Cost
function deleteRow(){
    console.log('deleteBtn clicked');
   
// target specific employee annual salary

    console.log($('.info').text());

// Call monthlyCosts function to update costs



$(this).closest('tr').empty();
} // end deleteRow


// function to calculate monthly costs
function monthlyCosts(){
    let totalSalary = 0;
    let monthly = 0;
    for (i = 0; i < employees.length; i++) {
       totalSalary += Number(employees[i].annualSalary)
    }
    monthly = (totalSalary / 12)
    
    $('#monthlyTotal').text(`Monthly Total: ${monthly.toLocaleString('en-EN', {style: 'currency', currency: 'USD'})}`) // updates DOM of monthly prices

    if (monthly > 20000) {
        $('#monthlyTotal').addClass('highlight')
    } // adds red background
    return console.log('Total monthly costs:$', monthly);
} // end monthlyCosts
