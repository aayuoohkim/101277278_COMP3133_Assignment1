const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const rootValue = {
    hello: () => "hello",
};
const schema = buildSchema(`
    type Query{
        hello: String
    }
`);
module.exports = graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
});
