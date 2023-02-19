const mongoose = require("mongoose");
const employee_schema = mongoose.Schema({
    firstname: {
        type: String,
        unique: true,
        required: true,
    },
    lastname: {
        type: String,
        unique: true,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        default: "other",
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
});
module.exports = mongoose.model("employee", employee_schema);
