export default function validateInfo(values) {
    //console.log(values)//Object { username: "sdfsdfs", email: "sdfsd", password: "fff", password2: "" }
    let errors = { }
    //username
    //.trim() removes whitespace from both ends of a string
    if (!values.username.trim()) {
        errors.username = "Username required"
    }

    //email
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    //password
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    //confirm password
    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }
    return errors;
}