import React from "react";
import DevCard from "./devCard";
// import DevProfile from "/pages/devProfile";
const devData = [
  {
    devId: 1,
    name: "Tiffany Dempsey",
    image: "/assets/Tiffany.jpeg",
    github:"Github",
    portfolio:"https://tiffany7809.github.io/React_Portfolio/",
    linkedin:"linkedin"
  },
  {
    devId:2,
    name: "Nic Catania",
    image: "/assets/profile.jpeg",
    github:"github",
    portfolio:"https://niccatania.github.io/Portfolioworld/",
    linkedin:"linkedin"
  },
  {
    devId:3,
    name: "Owen Greengo",
    image: "/assets/owen.jpeg",
    github:"github",
    portfolio:"https://owenmg.github.io/ReactFolio/#portfolio",
    linkedin:"linkedin"
  },
  {
    devId:4,
    name: "Supriya Sharma",
    image: "/assets/Supriya.jpeg",
    github:"github",
    portfolio:"https://supsha878.github.io/react-portfolio/",
    linkedin:"linkedin"
  },
 
];

export default function Container() {
  return (
    <div>
      <DevCard devData={devData} />
      {/* <DevProfile devData={devData} /> */}
    </div>
  );
}