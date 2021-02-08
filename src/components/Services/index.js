import React from "react";
import Icon1 from "../../images/ben.jpg";
import Icon2 from "../../images/mo.jpg";
import Icon3 from "../../images/louis.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Speakers</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Ben Taylor</ServicesH2>
          <ServicesP> Chief AI Evangelist Data Robot</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Mo Rebaie</ServicesH2>
          <ServicesP>Mentor deeplearning.ai</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Louis Owen</ServicesH2>
          <ServicesP> Data Science Consultant The World Bank</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
