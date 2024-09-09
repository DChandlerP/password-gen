document.addEventListener('DOMContentLoaded', function() {
    const lengthEl = document.getElementById('length');
    const lengthValueEl = document.getElementById('lengthValue');
    const uppercaseEl = document.getElementById('uppercase');
    const lowercaseEl = document.getElementById('lowercase');
    const numbersEl = document.getElementById('numbers');
    const symbolsEl = document.getElementById('symbols');
    const passwordEl = document.getElementById('password');
    const generateEl = document.getElementById('generate');
    const copyEl = document.getElementById('copy');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Update the length value display when the slider changes
    lengthEl.addEventListener('input', function() {
        lengthValueEl.textContent = this.value;
    });

    function generatePassword() {
        let chars = '';
        if (uppercaseEl.checked) chars += uppercaseChars;
        if (lowercaseEl.checked) chars += lowercaseChars;
        if (numbersEl.checked) chars += numberChars;
        if (symbolsEl.checked) chars += symbolChars;

        if (chars === '') {
            alert('Please select at least one character type.');
            return;
        }

        const length = parseInt(lengthEl.value);
        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        passwordEl.value = password;
    }

    function copyToClipboard() {
        passwordEl.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    }

    generateEl.addEventListener('click', generatePassword);
    copyEl.addEventListener('click', copyToClipboard);

    // Generate a password when the page loads
    generatePassword();
});
