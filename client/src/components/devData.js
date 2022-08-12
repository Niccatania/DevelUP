import React, { useEffect } from "react";
import DevCard from "./devCard";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_DEVS } from "../utils/queries";
// import DevProfile from "/pages/devProfile";

export default function Container() {

  const { loading, data } = useQuery(QUERY_ALL_DEVS);
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div>
      <DevCard devData={data.allDevelopers} />
      {/* <DevProfile devData={devData} /> */}
    </div>
  );
}