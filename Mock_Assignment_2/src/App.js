import React from "react";
import NavBar from "./components/NavBar";
import JobSearch from "./components/JobSearch";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <JobSearch />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
