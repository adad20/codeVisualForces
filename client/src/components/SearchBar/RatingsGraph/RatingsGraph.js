import React, {useState} from 'react'
import { Line } from 'react-chartjs-2';
import Classes from './RatingsGraph.module.css'

const RatingsGraph = ({ratingsData}) => {
    // console.log(ratingsData);
    
    let label = ratingsData.map((e) => {
        return e.contestId
    });
    let ratings = ratingsData.map((e) => {
        return e.newRating
    })

    const data = {
        labels: label,
        datasets:[ 
            {
                label: 'Ratings',
                data: ratings
            }
        ]        
    }
    console.log(data);
    // const {}
    return (
        <div>
            <Line
                data={data}
                width={30}
                height={10}
                options={{ }}
                className={Classes.chart}
            />
        </div>
    )
};

export default RatingsGraph;