const inputs = Array.from(document.querySelectorAll('#form input'));

const checkPasswords = () => {
    const password = inputs.find(input => input.id === 'password')
    const confirmPassword = inputs.find(input => input.id === 'confirm-password')
    if (password.value === confirmPassword.value) return true;
    return false;
}

document.querySelector('.btn').addEventListener('click', () => {
    console.log(checkPasswords());
});