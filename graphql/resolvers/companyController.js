const Company = require('../../models/company');

module.exports = {
    companies: async () => {
        try {
            const companies = await Company.find();
            return companies.map(company => ({ ...company._doc, _id: company.id }));
        } catch (err) {
            throw err;
        }
    },
    createCompany: async ({ companyInput }) => {
        const { name, short_des, description,company_url,logo, location, company_size, languages, is_sponservisa, perks_and_benefits, tags, founding_year} = companyInput;

        const company = new Company({
            name,
            short_des,
            description,
            logo,
            company_url,
            location,
            company_size,
            languages,
            is_sponservisa,
            perks_and_benefits,
            tags,
            founding_year
        });

        try {
            const savedCompany = await company.save();
            console.log(savedCompany);
            return { ...savedCompany._doc, _id: savedCompany.id };
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
};
