function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

    if(values.username === '') {
        error.username = 'Name should not be empty'
    } else {
        error.username = ''
    }
    if(values.password === '') {
        error.password = 'Password should not be empty'
    } else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } else {
        error.password = ''
    }
    return error;
}

export default Validation;