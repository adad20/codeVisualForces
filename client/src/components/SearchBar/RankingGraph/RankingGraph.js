import React, { useState, useEffect } from "react";
import axios from "axios";
import Classes from "./RankingGraph.module.css";
import { Line } from "react-chartjs-2";

const RankingGraph = ({ handle }) => {
  let [data, setData] = useState({
    contests: null,
    ranks: null,
  });

  let { contests, ranks } = data;

  useEffect(() => {
    async function getUserRanking() {
      try {
        let rankingData = await axios.get(`/api/ratings/${handle}`);
        let labe = rankingData.data.map((e) => {
          return e.contestId;
        });
        let rank = rankingData.data.map((e) => {
          return e.rank;
        });

        setData({ contests: labe, ranks: rank });
      } catch (err) {
        console.error(err);
      }
    }
    getUserRanking();
  }, [handle]);

  let dataSet = {
    labels: contests,
    datasets: [
      {
        label: "Ranking",
        data: ranks,
        options: {
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Y text",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "X text",
                },
              },
            ],
          },
        },
      },
    ],
  };

  return (
    <div className={Classes.container}>
      <div className={Classes.graph}>
        <Line data={dataSet} width={50} height={30} options={{}} />
      </div>
    </div>
  );
};

export default RankingGraph;
