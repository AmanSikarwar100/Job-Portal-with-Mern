import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js"; // names can be of your's choice after import
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";


dotenv.config({});

const app = express();

// app.get("/", (req, res) =>{
//     return res.status(200).json({
//         message: "Welcome to the API",
//         timestamp: new Date().toISOString(),
//         success: true,
//     });
// });

//Middleware
app.use(express.json());
app.use(express.urlencoded({ entended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: ["https://localhost:5121"],
    credintials: true,

};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5001;


//api's

app.use("/api/users", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);













app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});