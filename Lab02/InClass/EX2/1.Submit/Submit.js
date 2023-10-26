function changeButtonText() {
    // Get the submit button element by its ID
    const submitButton = document.getElementById("submitButton");

    // Change the value (text) of the button
    submitButton.value = "New Text";
}

// Use window.onload to make sure the HTML is fully loaded before running the script
window.onload = function () {
    changeButtonText();
};
