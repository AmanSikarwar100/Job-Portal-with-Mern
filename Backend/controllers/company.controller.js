// For creating jobs, we are creating register company 

import { Company } from "../models/company.model.js";
// import getDataUri from "../utils/datauri.js";
// import cloudinary from '../utils/cloud.js';


export const registerCompany = async (req, res) => {
    try {
        const { companyName, description } = req.body; // Ensure description is included
        if (!companyName) {
            return res.status(401).json({
                message: "Company name is required",
            });
        }
        if (!description) {
            return res.status(401).json({
                message: "Description is required",
            });
        }
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(401).json({
                message: "Company already exists",
                success: false,
            });
        }
        company = await Company.create({
            name: companyName,
            description: description,
            userId: req.id
        });
        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true,
        });
    } catch (error) {
        console.log("Register Comapny Error:",error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
};

export const getAllCompanies = async (req, res) => {
    try {
        const userId = req.id; // loggedin user id(means only user's registered companies will be shown here)
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({ message: "No companies found" });
        }
        return res.status(200).json({
            companies,
            success: true,
        });
    } catch (error) {
        console.log("Get Company Error:",error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

//get company by id
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }
        return res.status(200).json({ company, success: true });
    } catch (error) {
        console.log("Get By Id Company Error:",error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

//update company details
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        const file = req.file;
        //cloudinary
        // const fileUri = getDataUri(file);
        // const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        // const logo = cloudResponse.secure_url;

        const updateData = { name, description, website, location};

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
        });
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }
        return res.status(200).json({ message: "Company updated" });
    } catch (error) {
        console.log("Update Company Error:",error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};