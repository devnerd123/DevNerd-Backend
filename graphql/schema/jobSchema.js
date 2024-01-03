module.exports = `
    type Job {
        _id: ID!
        title: String!
        description: String!
        salary: SalaryRange
        currency: String
        relocation: Boolean!
        visaSponsored: Boolean!
        languageRequired: String
        location: Location
        experienceRequired: String!
        jobType: String!
        company:Company!
    }

    type SalaryRange {
        min: String
        max: String
    }

    type Location {
        city: String
        country: String
    }

    input JobInput {
        title: String!
        description: String!
        salary: SalaryRangeInput
        currency: String
        relocation: Boolean!
        visaSponsored: Boolean!
        languageRequired: String
        location: LocationInput
        experienceRequired: String!
        jobType: String!
        companyId: ID!
    }

    input SalaryRangeInput {
        min: String
        max: String
    }

    input LocationInput {
        city: String
        country: String
    }
`;
