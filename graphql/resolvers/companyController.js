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
    createCompany: async (values) => {
        const companyInput = values.companyInput;
        const company = new Company({
            name: companyInput.name,
            short_des: companyInput.short_des,
            description: companyInput.description,
            logo_url: companyInput.logo_url,
            location: companyInput.location,
            date: new Date(companyInput.date)
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
