import React from "react";
import DevCard from "./devCard";
const devData = [
  {
    name: "Tiffany Dempsey",
    image: "/assets/dev.webp",
  },
  {
    name: "Nic Catania",
    image: "/assets/dev.webp",
  },
  {
    name: "Owen Greengo",
    image: "/assets/dev.webp",
  },
  {
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