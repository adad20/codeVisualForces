import React from "react";
import Classes from "./UserDetails.module.css";

const UserDetails = ({ details }) => {
//   console.log(details);
  return (
    <div className={Classes.container}>
      <div className={Classes.block1}>
        <div className={Classes.name}>
          <p>
            Name: {details.firstName} {details.lastName}
          </p>
        </div>
        <div className={Classes.country}>
          <p>Country: {details.country}</p>
        </div>
        <div className={Classes.ranking}>
          <p>Rank: {details.rank}</p>
        </div>
        <div className={Classes.maxranking}>
          <p>MaxRank: {details.maxRank}</p>
        </div>
      </div>
      <div className={Classes.block2}>
        <div className={Classes.rating}>
          <p>
            Rating: {details.rating}
          </p>
        </div>
        <div className={Classes.maxrating}>
          <p>MaxRating: {details.maxRating}</p>
        </div>
        <div className={Classes.ranking}>
          <p>Friend of {details.friendOfCount} users</p>
        </div>
        <div className={Classes.maxranking}>
          <p>Contributions: {details.contribution}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
