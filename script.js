const inputs = Array.from(document.querySelectorAll('#form input'));

const checkPasswords = () => {
    const password = inputs.find(input => input.id === 'password')
    const confirmPassword = inputs.find(input => input.id === 'confirm-password')
    if (password.value === confirmPassword.value) return true;
    return false;
};

const checkFormInputs = () => {
    inputs.forEach(elem => elem.parentNode.classList.add('invalid'))
    inputs.forEach(elem => {
        if (elem.value !== ''){
            elem.parentNode.classList.remove('invalid')
        }
    })
    inputs.forEach(elem => {
        if (elem.id.includes('password') && !checkPasswords()){
            elem.parentNode.classList.add('invalid')

        }
        if (elem.id.includes('password') && checkPasswords()){
            elem.parentNode.classList.remove('invalid')
        }
    })
};


document.querySelector('.btn').addEventListener('click', () => checkFormInputs());