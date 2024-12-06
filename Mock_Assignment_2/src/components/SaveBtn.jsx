import React from "react";
import { FaBookmark } from "react-icons/fa";

const SaveBtn = ({ id }) => {
  const [isSaved, setIsSaved] = React.useState(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    return savedJobs.includes(id);
  });

  const handleSave = () => {
    const jobId = id;
    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    if (!savedJobs.includes(jobId)) {
      savedJobs.push(jobId);
      localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
      setIsSaved(true);
    } else {
      savedJobs = savedJobs.filter((job) => job !== jobId);
      localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
      setIsSaved(false);
    }
  };

  const buttonClass = isSaved
    ? "absolute top-3 right-3 text-blue-500 transition-colors duration-300"
    : "absolute top-3 right-3 text-gray-400 hover:text-blue-500 transition-colors duration-300";

  return (
    <button onClick={handleSave} className={buttonClass} title="Save Job">
      <FaBookmark size={20} />
    </button>
  );
};

export default SaveBtn;
