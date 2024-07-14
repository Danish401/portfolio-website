import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    aboutMe: String,
    noOfProjects: String,
    yearofexperience: String,
    noofclients: String,
    skills: String,
  },
  {
    timestamps: true,
  }
);

const About = mongoose.models.About || mongoose.model("About", AboutSchema);

export default About;
