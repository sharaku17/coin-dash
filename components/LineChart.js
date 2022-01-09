import React from 'react'
import {Line} from 'react-chartjs-2'
import { createChart } from 'lightweight-charts'

const LineChart = ({data, coin}) => {

const chartRef = React.useRef(null);
let currentDate = new Date((data.prices.at(-1)[0]) )
const [price, setPrice] = React.useState(data.prices.at(-1)[1])
const [date, setDate] = React.useState(currentDate.toLocaleString())


React.useEffect(() => {
  console.log(price)

  const chart = createChart(chartRef.current, {  height: 500, 
    rightPriceScale: {
      scaleMargins: {
        top: 0.35,
        bottom: 0.2,
      },
      borderVisible: false,
    },
    timeScale: {
      borderVisible: false,
      timeVisible: true,
    secondsVisible: false,
    },
    grid: {
      horzLines: {
        color: '#eee',
        visible: false,
      },
      vertLines: {
        color: '#ffffff',
        visible: true
      },
    },
    crosshair: {
        horzLine: {
          visible: true,
          labelVisible: true
        },
        vertLine: {
          visible: true,
          style: 0,
          width: 2,
          color: 'rgba(32, 38, 46, 0.1)',
          labelVisible: false,
        }
    },});
const lineSeries = chart.addAreaSeries({topColor: 'rgba(19, 68, 193, 0.4)',	
bottomColor: 'rgba(0, 120, 255, 0.0)',
lineColor: 'rgba(19, 40, 153, 1.0)',
lineWidth: 3});

lineSeries.setData(prices);
chart.subscribeCrosshairMove(function(param) {
  if ( param === undefined || param.time === undefined || param.point.x < 0  || param.point.y < 0  ) {
    setPrice(data.prices.at(-1)[1])
    setDate(currentDate.toLocaleString())
} else {
  let dateStr = new Date(param.time * 1000);
  let day = dateStr.getDay()
  let hour = dateStr.getHours()
  let min = dateStr.getMinutes()

  let dateString = dateStr.toLocaleString();
  var price = param.seriesPrices.get(lineSeries);
  setPrice(price)
  setDate(dateString)
}})
},[])





  
    let prices =   []
    data.prices.map(price => {prices.push({time: (price[0]-(price[0]%1000))/1000, value: price[1]})})
    
    return (
        <div id="container" className="relative border-b pb-2  m-2">
          <div ref={chartRef} className=""> </div>
          <div className=" absolute   text-left text-gray-800 left-3 top-3 z-10">
              <div className="flex items-center">
              <p className="text-3xl font-semibold">{coin.name}</p>
                <img className="ml-2" src={coin.image.small}></img>
              </div>
            <p className="text-xl font-semibold text-gray-500">{price.toFixed(2)+ '€'} </p>
            <p className="text-md text-gray-500 font-light">{date}</p>

            
            
            

          </div>
        </div>
        
    )
}



export default LineChart