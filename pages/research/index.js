import React from "react";
import Card from "../../components/Card";
import data from "../../data/research";

const research = () => {
  return (
    <div>
      <h2 className="text-center text-xl p-5 text-gray-500">
        Our research areas
      </h2>
      {data.map((item) => (
        <Card
          heading={item.heading}
          small_disc={item.small_disc}
          disc={item.disc}
          key={item.heading}
        />
      ))}
    </div>
  );
};

export default research;
