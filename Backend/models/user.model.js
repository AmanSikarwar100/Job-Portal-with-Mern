// // User Schema
// import mongoose from "mongoose";
// const userSchema = mongoose.Schema({
//         fullname: {
//             type: String,
//             required: true // means user must fill(put) the value

//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true
//         },
//         phoneNumber: {
//             type: String,
//             required: true,
//             unique: true
//         },
//         password: {
//             type: String,
//             required: true
//         },
//         role: {
//             type: String,
//             enum: ['student', 'recruiter'], // for options whether student or recruiter
//             default: 'Student',
//             required: true
//         },
//         profile: {
//             bio: {
//                 type: String
//             },
//             skills: [{
//                 type: String
//             }],
//             resume: {
//                 type: String // URL to Resume from database
//             },
//             resumeOriginalname: {
//                 type: String // Original File
//             },
//             company: {
//                 type: mongoose.Schema.Types.ObjectId, // Relation between company table and user table
//                 ref: "Company"
//             },
//             profilePhoto: {
//                 type: String, // URL to profile photo
//                 default: "",
//             },
//         },
//     },
//     { timeStamps: true }
// );

// const User = mongoose.model("User", userSchema);
// export default User;
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pancard: {
      type: String,
      required: true,
      unique: true,
    },
    adharcard: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["Student", "Recruiter"],
      default: "Student",
      required: true,
    },
    profile: {
      bio: {
        type: String,
      },
      skills: [{ type: String }],
      resume: {
        type: String, // URL to resume file
      },
      resumeOriginalname: {
        type: String, // Original name of resume file
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
      profilePhoto: {
        type: String, // URL to profile photo file
        default: "",
      },
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
