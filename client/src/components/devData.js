import React from "react";
import DevCard from "./devCard";
// import DevProfile from "/pages/devProfile";
const devData = [
  {
    devId: 1,
    name: "Tiffany Dempsey",
    image: "/assets/Tiffany.jpeg",

    github:"https://github.com/Tiffany7809",
    portfolio:"https://tiffany7809.github.io/React_Portfolio/",
    linkedin:"https://www.linkedin.com/in/tiffany-d-00a37777/"
  },
  {
    devId:2,
    name: "Nic Catania",
    image: "/assets/profile.jpeg",

    github:"https://github.com/Niccatania",
    portfolio:"https://niccatania.github.io/Portfolioworld/",
    linkedin:"linkedin"

  },
  {
    devId:3,
    name: "Owen Greengo",
    image: "/assets/owen.jpeg",

    github:"https://github.com/OwenMG",
    portfolio:"https://owenmg.github.io/ReactFolio/#portfolio",
    linkedin:"https://www.linkedin.com/in/owen-greengo-6371a1228/"

  },
  {
    devId:4,
    name: "Supriya Sharma",
    image: "/assets/Supriya.jpeg",

    github:"https://github.com/supsha878",
    portfolio:"https://supsha878.github.io/react-portfolio/",
    linkedin:"https://www.linkedin.com/in/supriya-sharma-b1505b194/"
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