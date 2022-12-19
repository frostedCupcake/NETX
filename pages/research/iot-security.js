import React from 'react';
import ResearchCard from '../../components/ResearchCard';
import { detailedResearchData } from '../../constants';

const research1 = () => {
  return (
    <ResearchCard
      heading={detailedResearchData[5].heading}
      imageUrl={
        'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg'
      }
      disc={detailedResearchData[5].disc}
      disc1={detailedResearchData[5].disc1}
      disc2={detailedResearchData[5].disc2}
    />
  );
};

export default research1;
