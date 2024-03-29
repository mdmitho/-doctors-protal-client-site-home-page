import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
      <InfoCard
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        cardTitle="Opening Hours"
        img={clock}
      ></InfoCard>
      <InfoCard bgClass="bg-base-100" cardTitle="Our Locations" img={phone}></InfoCard>
      <InfoCard
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        cardTitle="Contact Us"
        img={marker}
      ></InfoCard>
    </div>
  );
};

export default Info;
