import React from "react";
import DevCard from "./devCard";
const devData = [
  {
    devId: 1,
    name: "Tiffany Dempsey",
    image: "/assets/dev.webp",
  },
  {
    devId:2,
    name: "Nic Catania",
    image: "/assets/profile.jpeg",
  },
  {
    devId:3,
    name: "Owen Greengo",
    image: "/assets/dev.webp",
  },
  {
    devId:4,
    name: "Supriya Sharma",
    image: "/assets/dev.webp",
  },
 
];

export default function Container() {
  return (
    <div>
      <DevCard devData={devData} />
    </div>
  );
}