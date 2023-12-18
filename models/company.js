const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    short_des: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: false,
    },
    company_url: {
      type: String,
      required: true,
    },
    location: {
      city: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: true,
      },
    },
    company_size: {
      type: String,
      required: true,
    },
    languages: {
      type: [String],
      required: false,
    },
    is_sponservisa: {
      type: Boolean,
      required: false,
    },
    perks_and_benefits: {
      type: [String],
      required: false,
    },
    tags: {
      type: [String],
      required: false,
    },
    founding_year:{
        type: Number,
        required:false
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Company', companySchema);
