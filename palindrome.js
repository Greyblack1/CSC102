function checkPalindrome() {
    event.preventDefault();
    var inputString = document.getElementById('palindromeInput').value;
    // Remove unwanted characters, convert to lowercase to make the check case-insensitive
    var regex = /[^A-Za-z0-9]/g;
    var processedString = inputString.toLowerCase().replace(regex, '');
    // Reverse the processed string
    var reverseString = processedString.split('').reverse().join('');
    // Check if the string is a palindrome
    if (processedString === reverseString) {
        document.getElementById('result').textContent = '"' + inputString + '" is a palindrome.';
    } else {
        document.getElementById('result').textContent = '"' + inputString + '" is not a palindrome.';
    }
}
window.addEventListener("DOMContentLoaded", (event) => {

    const form = document.getElementById("palCheck")
    if(form){
        form.addEventListener("submit", checkPalindrome);
    }


});    