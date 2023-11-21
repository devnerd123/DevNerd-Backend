module.exports = `
    type Company {
        _id: ID!
        name: String!
        short_des: String!
        description: String!
        logo_url: String
        location: String!
        date: String!
    }

    input CompanyInput {
        name: String!
        short_des: String!
        description: String!
        logo_url: String
        location: String!
        date: String!
    }
`;
