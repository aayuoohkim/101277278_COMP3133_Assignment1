const employee_model = require("./models/employee_schema");

exports.getEmployees = async () => {
    const employees = await employee_model.find();

    return {
        message: "Successfully fetched all employees",
        employees
    };
}

exports.getEmployee = async args => {
    const employee = await employee_model.findById(args.id);

    let message = "Successfully fetched an employee with the given id";
    if (employee == null) {
        message = "Failed to fetch an employee with the given id"
    }

    return {
        message,
        employee
    };
}

exports.createEmployee = async args => {
    const employee = await employee_model.create({
        firstname: args.firstname,
        lastname: args.lastname,
        email: args.email,
        gender: args.gender,
        salary: args.salary
    }).catch(err => {});

    let message = "Successfully created an employee";
    if (employee == null) {
        message = "Failed to create an employee with the given information"
    }

    return {
        message,
        employee
    }
}

exports.updateEmployee = async args => {
    const employee = await employee_model.findByIdAndUpdate(args.id, args, { new: true, runValidators: true }).catch(err => {});

    let message = "Successfully updated an employee";
    if (employee == null) {
        message = "Failed to update an employee with the given information";
    }

    return {
        message,
        employee
    }
}

exports.deleteEmployee = async args => {
    let message = "Successfully deleted";
    await employee_model.findByIdAndDelete(args.id)
        .catch(err => {
            if (err.name === "CastError") {
                message = "Failed to delete an employee with Invalid ID"
            }
        });
    
    return message;
}