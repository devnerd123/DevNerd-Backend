module.exports = `
    type Company {
        _id: ID!
        name: String!
        short_des: String!
        description: String!
        company_url: String!
        logo: String
        location: CompanyLocation!
        company_size: String!
        languages: [String]
        is_sponservisa: Boolean
        perks_and_benefits: [String]
        tags: [String]
        created_by: ID
        founding_year: Int
        is_public: Boolean
        createdAt: String
        updatedAt: String
    }

    type CompanyLocation {
        city: String
        country: String!
    }

    input CompanyInput {
        name: String!
        short_des: String!
        description: String!
        logo: String
        company_url: String!
        location: CompanyLocationInput!
        company_size: String!
        languages: [String]
        is_sponservisa: Boolean
        perks_and_benefits: [String]
        tags: [String]
        founding_year: Int
        is_public: Boolean
    }

    input CompanyLocationInput {
        city: String
        country: String!
    }
`;
