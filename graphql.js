const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const user_controller = require("./user_controller");
const employee_controller = require("./employee_controller");

const rootValue = {
    login: user_controller.login,
    signup: user_controller.signup,
    getEmployees: employee_controller.getEmployees,
    getEmployee: employee_controller.getEmployee,
    createEmployee: employee_controller.createEmployee,
    updateEmployee: employee_controller.updateEmployee,
    deleteEmployee: employee_controller.deleteEmployee
};

const schema = buildSchema(`
    type Query {
        login(username: String, password: String!): UserResult
        getEmployees: EmployeesResult
        getEmployee(id: String!): EmployeeResult
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): UserResult
        createEmployee(firstname: String!, lastname: String!, email: String!, salary: Float!, gender: String): EmployeeResult
        updateEmployee(id: String!, firstname: String, lastname: String, email: String, salary: Float, gender: String): EmployeeResult
        deleteEmployee(id: String!): String
    }

    type User {
        username: String
        email: String
        password: String
    }

    type UserResult {
        message: String
        user: User
    }

    type Employee {
        _id: String
        firstname: String
        lastname: String
        email: String
        gender: String
        salary: Float
    }
    
    type EmployeesResult {
        message: String,
        employees: [Employee]
    }

    type EmployeeResult {
        message: String,
        employee: Employee
    }
`);

module.exports = graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
});
