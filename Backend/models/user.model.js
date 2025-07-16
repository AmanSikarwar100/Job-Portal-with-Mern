// User Schema
import mongoose from "mongoose";
const userSchema = mongoose.Schema({
        fullname: {
            type: String,
            required: true // means user must fill(put) the value

        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['student', 'recruiter'], // for options whether student or recruiter
            default: 'Student',
            required: true
        },
        profile: {
            bio: {
                type: String
            },
            skills: [{
                type: String
            }],
            resume: {
                type: String // URL to Resume from database
            },
            resumeOriginalname: {
                type: String // Original File
            },
            company: {
                type: mongoose.Schema.Types.ObjectId, // Relation between company table and user table
                ref: "Company"
            },
            profilePhoto: {
                type: String, // URL to profile photo
                default: "",
            },
        },
    },
    { timeStamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
