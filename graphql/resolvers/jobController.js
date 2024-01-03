const sanitizeHtml = require('sanitize-html');
const Job = require('../../models/job');
const Company = require('../../models/company');

module.exports = {
    jobs: async () => {
        try {
            const jobs = await Job.find().populate('company');
            return jobs.map(job => ({ ...job._doc, _id: job.id }));
        } catch (err) {
            throw err;
        }
    },
    job: async ({ id }) => {
        try {
            const job = await Job.findById(id).populate('company');
            if (!job) {
                throw new Error('Job not found');
            }
            return { ...job._doc, _id: job.id };
        } catch (err) {
            throw err;
        }
    },
    createJob: async ({ jobInput }) => {
        const {
            title,
            description,
            salary,
            currency = 'USD', // Provide a default value for currency
            relocation,
            visaSponsored,
            languageRequired,
            location = {}, // Provide default values for location
            experienceRequired,
            jobType,
            companyId,
        } = jobInput;

        const sanitizedDescription = sanitizeHtml(description, {
            allowedTags: ['b', 'i', 'em', 'strong', 'a'],
            allowedAttributes: {
                'a': ['href']
            },
        });

        const job = new Job({
            title,
            description: sanitizedDescription,
            salary: {
                min: salary?.min || null,
                max: salary?.max || null,
            },
            currency,
            relocation,
            visaSponsored,
            languageRequired: languageRequired || null,
            location: {
                city: location.city || null,
                country: location.country || null,
            },
            experienceRequired,
            jobType,
            company: companyId,
        });

        try {
            const savedJob = await job.save();
            const populatedJob = await Job.findById(savedJob._id).populate('company');

            await Company.findByIdAndUpdate(
                companyId,
                { $push: { jobs: savedJob._id } },
                { new: true }
            );

            return { ...populatedJob._doc, _id: populatedJob.id };
        } catch (err) {
            console.error(err);
            throw new Error('Error creating a new job.');
        }
    },
    company: async ({ id }) => {
        try {
            const company = await Company.findById(id);
            if (!company) {
                throw new Error('Company not found');
            }
            return { ...company._doc, _id: company.id };
        } catch (err) {
            throw err;
        }
    },
};
