import React from "react";
import Card from "../../components/Card";
import data from "../../data/research";

const research = () => {
  return (
    <div>
      <h2 className="text-center text-2xl lg:text-3xl p-5 uppercase  font-medium">
        Our research areas
      </h2>
      {data.map((item) => (
        <Card
          heading={item.heading}
          small_disc={item.small_disc}
          disc={item.disc}
          key={item.heading}
          reference={item.reference}
        />
      ))}
    </div>
  );
};

export default research;
