module.exports = `
    type Job {
        _id: ID!
        name: String!
        description: String!
        salary: String
        location: String!
    }

    input JobInput {
        name: String!
        description: String!
        salary: String
        location: String!
    }
`;
