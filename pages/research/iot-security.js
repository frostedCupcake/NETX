import React from "react";
import ResearchCard from "../../components/ResearchCard";
import dataR from "../../data/research";

const research1 = () => {
  return (
    <ResearchCard
      heading={dataR[5].heading}
      imageUrl={
        "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
      }
      disc={dataR[5].disc}
    />
  );
};

export default research1;
