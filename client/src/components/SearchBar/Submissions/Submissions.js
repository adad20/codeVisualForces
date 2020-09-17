import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Classes from "./Submissions.module.css";

const Submissions = ({ handle }) => {
  const [data, setData] = useState({
    WA: null,
    AC: null,
    TLE: null,
  });

  let { WA, AC, TLE } = data;

  useEffect(() => {
    async function getSubmissions() {
      try {
        let temp = await axios.get(`/api/submissions/${handle}`);
        let wac = 0,
          acc = 0,
          tlec = 0;
          temp.data.result.map((e) => {
          if (e.verdict === "OK") acc++;
          else if (e.verdict === "WRONG_ANSWER") wac++;
          else if (e.verdict === "TIME_LIMIT_EXCEEDED") tlec++;

          return null;
        });

        setData({WA: wac, AC: acc, TLE: tlec });
      } catch (err) {
        console.error(err);
      }
    }
    getSubmissions();
  }, [handle]);

  let dataSet = {
    labels: ["AC", "WA", "TLE"],
    datasets: [
        {
          label: ['Submissions'],
          data: [AC, WA, TLE],
          backgroundColor: ['rgba(129, 178, 20, 0.5)', 'rgba(236, 1, 1, 0.5)', 'rgba(253, 219, 58, 0.5)'],
        },
    ],
  };

  return (
    <div className={Classes.container}>
    <div className={Classes.graph} >
      <Bar
          data={dataSet}
          options={{}}
        />
    </div>
    </div>
  );
};

export default Submissions;
