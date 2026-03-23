// UU-16: Basic Email & Password Validation
function validateForm(email, password) {
    if (!email.includes('@')) return "Invalid Email";
    if (password.length < 6) return "Password too short";
    return true;
}