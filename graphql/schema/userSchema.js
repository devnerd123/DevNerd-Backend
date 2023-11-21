module.exports = `
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        is_admin: Boolean!
    }
    type AuthData{
        userId:ID!
        token:String!
        tokenexp:Int!
    }
    input UserInput {
        name: String!
        email: String!
        password: String!
        is_admin: Boolean!
    }
`;
