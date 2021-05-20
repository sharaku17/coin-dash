import React from 'react'
import {Line} from 'react-chartjs-2'

const Sparkline = ({sparkline}) => {
    
    const options = {
        legend: {
            display: false,
            scales: { xAxes: [{ display: false, }], yAxes: [{ display: false, }], },
        },
        scales: { xAxes: [{ display: false, }], yAxes: [{ display: false, }], },
    };

    
        const data_green = {
            labels: Array.from(Array(sparkline.price.length).keys()),
            datasets:  [
                {
                    
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(96, 211, 148,1)',
                    pointBorderColor: 'rgba(96, 211, 148,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: sparkline.price
                }
            ]
        }

        const data_red = {
            labels: Array.from(Array(sparkline.price.length).keys()),
            datasets:  [
                {
                    
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(238, 96, 85,1)',
                    pointBorderColor: 'rgba(238, 96, 85,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: sparkline.price
                }
            ]
        }
 
  
    return (
        <div>
            <Line data={sparkline.price[0] < sparkline.price[sparkline.price.length -1 ] ? data_green:data_red}  options={{
                animation: {
                    duration: 0
                },
                scales:{
                x:{
                    display:false
                },
                y:{
                    display:false
                }
            }
                ,maintainAspectRatio:false,plugins:{
            legend: {
    display: false
  }}}} width={300} height={100} >
            

            </Line>
        </div>
    )
}


export default Sparkline