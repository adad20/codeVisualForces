import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Classes from './RatingsGraph.module.css'
import { Box, Card, CardContent, Container } from '@material-ui/core';

const RatingsGraph = ({handle}) => {
    let [details, setDetails] = useState({
        label: null,
        ratings: null
    });

    let {label, ratings} = details;

    useEffect(() => {
      async function fetchData() {
        try {
          let json = await axios.get(`/api/ratings/${handle}`);
          let tlabel = json.data.map((e) => {
              return e.contestId;
          });
          let tratings = json.data.map((e) => {
            let data = {
                x: e.contestId,
                myProperty: e.contestName,
                y: e.newRating
            }
            return data;
          });

          setDetails({label: tlabel, ratings:tratings});

        } catch (err) {
          console.error(err);
        }
      }
      fetchData();
    }, [handle]);

    
    let dataSet = {
        labels: label,
        datasets:[ 
            {
                label: 'Ratings',
                data: ratings,
            }
        ]   
    }
    
    return (
      <Container>
        <Box boxShadow={5}>
          <Card>
            <CardContent>
              <Line
                  data={dataSet}
                  width={50}
                  height={20}
                  options={{}}
                  className={Classes.chart}
              />
            </CardContent>
          </Card>
        </Box>
      </Container>
    )
};

export default RatingsGraph;