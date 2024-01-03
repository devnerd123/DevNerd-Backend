const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        salary: {
            min: String,
            max: String,
        },
        currency: {
            type: String,
            default: 'USD',
        },
        relocation: {
            type: Boolean,
            required: true,
        },
        visaSponsored: {
            type: Boolean,
            required: true,
        },
        languageRequired: {
            type: String,
            default: null,
        },
        location: {
            city: String,
            country: String,
        },
        experienceRequired: {
            type: String,
            required: true,
        },
        jobType: {
            type: String,
            required: true,
        },
        company: {
            type: Schema.Types.ObjectId,
            ref: 'Company',
        },
        created_by: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Job', jobSchema);
