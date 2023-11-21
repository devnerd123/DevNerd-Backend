const Job = require('../../models/job');

module.exports = {
    jobs: async () => {
        try {
            const jobs = await Job.find();
            return jobs.map(job => ({ ...job._doc, _id: job.id }));
        } catch (err) {
            throw err;
        }
    },
    createJob: async (values, req) => {
        if(!req.isAuth){
            throw new Error("Unauthenticated!")
        }
        const jobInput = values.jobInput;
        const job = new Job({
            name: jobInput.name,
            description: jobInput.description,
            salary: jobInput.salary,
            location: jobInput.location,
        });
        try {
            const savedJob = await job.save();
            console.log(savedJob);
            return { ...savedJob._doc, _id: savedJob.id };
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
};
