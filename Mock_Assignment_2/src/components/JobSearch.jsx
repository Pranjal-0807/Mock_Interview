import React, { useState } from "react";
import location_logo from "../assets/location_logo.png";
import search_logo from "../assets/search_logo.png";
import { CardData } from "../data/CardData";

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleSearch = (e) => {
    if (e.target.placeholder.includes("Job Title")) {
      setSearchTerm(e.target.value);
    } else {
      setLocation(e.target.value);
    }
  };

  const handleSubmit = () => {
    const filtered = CardData.filter((job) => {
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
          <ul className="mt-4 space-y-4">
            {filteredJobs.map((job) => (
              <li
                key={job.id}
                className="bg-white shadow-md p-4 rounded-md border border-gray-300 flex items-center space-x-4"
              >
                <img
                  src={job.Logo}
                  alt={`${job.Company} Logo`}
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium">{job.JobTitle}</h3>
                  <p className="text-sm text-gray-600">{job.Company}</p>
                  <p className="text-sm text-gray-500">{job.Location}</p>
                  <p className="text-sm text-gray-400">{job.JobType}</p>
                  <p className="text-sm text-gray-400">{job.Salary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
