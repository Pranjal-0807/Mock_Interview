import React, { useState, useEffect } from "react";
import location_logo from "../assets/location_logo.png";
import search_logo from "../assets/search_logo.png";
import { CardData } from "../data/CardData";
import Card from "./Card";

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [allJobs, setAllJobs] = useState(CardData);

  useEffect(() => {
    const loadMoreJobs = () => {
      const moreJobs = [
        {
          id: 5,
          JobTitle: "UX Designer",
          Location: "San Francisco",
          Salary: "$90k",
          Company: "Company E",
          Logo: "logo5.png",
          JobType: "Full-time",
        },
        {
          id: 6,
          JobTitle: "Software Engineer",
          Location: "Austin",
          Salary: "$110k",
          Company: "Company F",
          Logo: "logo6.png",
          JobType: "Full-time",
        },
      ];
      setAllJobs((prevJobs) => [...prevJobs, ...moreJobs]);
    };

    setTimeout(loadMoreJobs, 3000);
  }, []);

  const handleSearch = (e) => {
    if (e.target.placeholder.includes("Job Title")) {
      setSearchTerm(e.target.value);
    } else {
      setLocation(e.target.value);
    }
  };

  const handleSubmit = () => {
    const filtered = allJobs.filter((job) => {
      const matchesTitle = job.JobTitle.toLowerCase().includes(
        searchTerm.toLowerCase()
      );
      const matchesLocation = job.Location.toLowerCase().includes(
        location.toLowerCase()
      );
      return matchesTitle && matchesLocation;
    });
    setFilteredJobs(filtered);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="mt-6 ml-10">
        <div className="flex space-x-4">
          <div className="flex items-center bg-white shadow-md rounded-md p-2 w-full max-w-4xl">
            <img src={search_logo} alt="Search Logo" className="w-6 h-6 mr-2" />
            <input
              type="search"
              className="outline-none flex-1"
              placeholder="Search by: Job Title, Position, Keyword..."
              onChange={handleSearch}
              value={searchTerm}
            />
            <img
              src={location_logo}
              alt="Location Logo"
              className="w-6 h-6 ml-2"
            />
            <input
              type="search"
              className="outline-none flex-1"
              placeholder="City, state or country"
              onChange={handleSearch}
              value={location}
            />
            <button
              className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600"
              onClick={handleSubmit}
            >
              Find Job
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredJobs.length === 0 ? (
              <p className="text-center text-gray-500"></p>
            ) : (
              filteredJobs.map((job) => <Card key={job.id} card={job} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
