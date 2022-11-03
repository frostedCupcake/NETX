import React from "react";
import ResearchCard from "../../components/ResearchCard";
import dataR from "../../data/research";

const research1 = () => {
  return (
    <ResearchCard
      heading={dataR[1].heading}
      imageUrl={
        "https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
      }
      disc={dataR[1].disc}
      disc1={dataR[1].disc1}
      disc2={dataR[1].disc2}
    />
  );
};

export default research1;
