import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, error } = useGetAllJobs(); // Internal jobs
  const jobs = useSelector((state) => state.jobs.allJobs); // Internal jobs from Redux
  console.log("Jobs in Component:", { loading, error, jobs }); // Log to check state

  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 animate-gradient opacity-10" style={{ top: '64px' }}></div>
      <div className="animate-fade-in relative z-10">
        <Header />
      </div>
      <div className="animate-fade-in relative z-10" style={{ animationDelay: '0.2s' }}>
        <Categories />
      </div>
      {loading && <p className="animate-fade-in relative z-10" style={{ animationDelay: '0.4s' }}>Loading jobs...</p>}
      {error && <p className="animate-fade-in relative z-10" style={{ animationDelay: '0.4s' }}>Error: {error}</p>}
      {!loading && !error && (
        <div className="animate-fade-in relative z-10" style={{ animationDelay: '0.4s' }}>
          <LatestJobs jobs={jobs} />
        </div>
      )}
      <div className="animate-fade-in relative z-10" style={{ animationDelay: '0.6s' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
