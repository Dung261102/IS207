// Function to create a form and a submit button
function createForm() {
    // Get the container where the form will be inserted
    const formContainer = document.getElementById("formContainer");

    // Create a new form element
    const form = document.createElement('form');

    // Create an input field
    const input = document.createElement('input');
    input.type = "text";
    input.name = "username";
    input.placeholder = "Enter your username";

    // Create a submit button
    const submitButton = document.createElement('input');
    submitButton.type = "submit";
    submitButton.id = "submitButton";
    submitButton.value = "Submit";

    // Append the input and submit button to the form
    form.appendChild(input);
    form.appendChild(submitButton);

    // Append the form to the container
    formContainer.appendChild(form);
}

// Function to get the value of the submit button
function getSubmitButtonValue() {
    // Get the submit button element by its ID
    const submitButton = document.getElementById("submitButton");

    // Get the value (text) of the button
    const value = submitButton.value;

    // Log the value to the console
    console.log("The value of the submit button is: ", value);
}

// Use window.onload to make sure the HTML is fully loaded before running the script
window.onload = function () {
    // Create the form and submit button
    createForm();

    // Get the value of the submit button
    getSubmitButtonValue();
};
