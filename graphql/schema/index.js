const { buildSchema } = require('graphql');
const jobSchema = require('./jobSchema');
const companySchema = require('./companySchema');
const userSchema = require('./userSchema');

const mainSchema = `
    ${jobSchema}
    ${companySchema}
    ${userSchema}

    type Query {
        jobs: [Job!]!
        companies: [Company!]!
        users: [User!]!
        login(email:String!, password:String!): AuthData!
    }

    type Mutation {
        createJob(jobInput: JobInput): Job
        createCompany(companyInput: CompanyInput): Company
        createUser(userInput: UserInput): User
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;

module.exports = buildSchema(mainSchema);
