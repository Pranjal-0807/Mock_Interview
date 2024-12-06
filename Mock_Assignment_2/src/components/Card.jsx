import React from "react";
import SaveBtn from "./SaveBtn";

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="relative border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full"
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{card.JobTitle}</h3>
        <p className="text-sm text-green-600 font-medium">{card.JobType}</p>
        <p className="text-sm text-gray-600">Salary: {card.Salary}</p>
        <div className="flex items-center mt-4">
          <img
            src={card.Logo}
            alt="Company Logo"
            className="w-10 h-10 rounded-full border border-gray-200 mr-4"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">
              {card.Company}
            </p>
            <p className="text-sm text-gray-500">{card.Location}</p>
          </div>
        </div>
      </div>

      <div className="mt-auto flex justify-end">
        <SaveBtn id={card.id} />
      </div>
    </div>
  );
};

export default Card;
