console.log('JS loaded');

// Helpful Initialization Variables

// Useful Variables to think about
let firstName;
let lastName;
let iD = 0;
let title;
let annualSalary =0;


let employees = [] // create array holding box to be pushed my objects

// let employee = {} // create empty object to put values into and push into array



$(document).ready(readyNow)


                                    // Functions interacting with DOM

function readyNow(){
    console.log('JQuery loaded');
    
//Step 1: Make a Function that takes in all inputs and adds them into an object than returns an array

                //Click Listeners
$('#submitBtn').on('click', addEmployee)
console.log(employees); // testing for array





} // end readyNow

                                    // Functions being called to DOM

// function to add employee into array
function addEmployee(){
    console.log('button clicked');
    
    const employee = {}
    
    employee.firstName = $('#firstName').val()
    employee.lastName = $('#lastName').val()
    employee.iD = $('#iD').val()
    employee.title = $('#title').val()
    employee.annualSalary = $('#annualSalary').val()
    
    return employees.push(employee);
} // end addEmployee