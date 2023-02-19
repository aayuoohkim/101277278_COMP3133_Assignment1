const user_model = require("../models/user_schema");

exports.login = async args => {
    let user = await user_model.findOne({ username: args.username });

    let failed = false;
    let message = "Successfully logged in";

    // when user does not exist with the given username
    if (user === null) {
        failed = true;
    }

    // when the password is not correct
    if (failed === false && 
            user.password !== args.password) {
        failed = true;
    }

    if (failed === true) {
        message = "failed to log in with the given information";
        user = null;
    }

    return {
        message,
        user
    }
}

exports.signup = async args => {
    const user = await user_model.create({
        username: args.username,
        email: args.email,
        password: args.password,
    }).catch(err => {});

    let message = "Successfully signed up";
    if (user == null) {
        message = "Failed to sign up a user with the given information";
    }

    return {
        message,
        user
    }
}