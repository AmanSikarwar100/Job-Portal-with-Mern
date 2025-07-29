import mongoose, { trusted } from "mongoose";
const jobSchema = new mongoose.Schema({
    title:{
    },
    description:{
        type:String,
        required:true,
    },
    requirements:[
        {
        type: String,
        required: true

    }],
    location: {
        type: String,
        required:true
    },
    salary:{
        type: String,
        required: true
    },
    jobType:{
        type:String,
        required:true
    },
    experience:{
        type: Number,
        required:true
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true

    },
    position:{
        type:String,
        required:true,
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    applications:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Application",
        default: null
    }],
})

export const Job = mongoose.model("Job", jobSchema);
