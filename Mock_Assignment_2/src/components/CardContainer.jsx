import React, { useState, useEffect } from "react";
import Card from "./Card";
import { CardData } from "../data/CardData";

const CardContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreJobs = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const nextJobs = CardData.slice(jobs.length, jobs.length + 12);
      setJobs((prevJobs) => [...prevJobs, ...nextJobs]);

      if (nextJobs.length < 5) {
        setHasMore(false); 
      }
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadMoreJobs(); 

    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const documentHeight = document.documentElement.offsetHeight;

      if (scrollPosition >= documentHeight - 10) {
        loadMoreJobs();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} card={job} />
          ))}
        </div>

        {loading && (
          <div className="flex justify-center items-center py-4">
            <div className="spinner-border animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        )}

        {!hasMore && (
          <p className="text-center mt-4 text-gray-500">
            No more jobs to load.
          </p>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
