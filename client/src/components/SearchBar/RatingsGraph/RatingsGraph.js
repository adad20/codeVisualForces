import React, {useState} from 'react'
import { Line } from 'react-chartjs-2';
import Classes from './RatingsGraph.module.css'

const RatingsGraph = ({ratingsData}) => {
    // console.log(ratingsData);
    
    let label = ratingsData.map((e) => {
        return e.contestId
    });
    let ratings = ratingsData.map((e) => {
        let data = {
            x: e.contestId,
            myProperty: e.contestName,
            y: e.newRating
        }
        return data;
    })

    const data = {
        labels: label,
        datasets:[ 
            {
                label: 'Ratings',
                data: ratings,
            }
        ]        
    }
    console.log(ratings);
    // const {}
    return (
        <div className={Classes.container}>
        <div className={Classes.chart}>
            <Line
                data={data}
                width={50}
                height={20}
                options={{}}
                className={Classes.chart}
            />
        </div>
        </div>
    )
};

export default RatingsGraph;