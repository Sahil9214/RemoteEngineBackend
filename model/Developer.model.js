const mongoose = require("mongoose");

  
const skillSchema = new mongoose.Schema({
  name: String,
  // Add other skill-related fields as needed
});

const professionalExperienceSchema = new mongoose.Schema({
  company_name: String,
  tech_stack: String,
  skills_used: [skillSchema],
  time_period: String,
});

const educationalExperienceSchema = new mongoose.Schema({
  degree_name: String,
  school_name: String,
  time_period: String,
});

const developerSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone_number: String,
  email: String, 
  skills: [String],
  professional_experience: [professionalExperienceSchema],
  educational_experience: [educationalExperienceSchema],
});

const DeveloperModel = mongoose.model("Developer", developerSchema);

module.exports = {DeveloperModel};
