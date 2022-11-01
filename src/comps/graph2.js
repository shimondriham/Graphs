import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../graph_lib/canvasjs.react';
import axios from 'axios';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


function Graph2() {
    const [ar, setAr] = useState([]);
    const [url, setUrl] = useState("http://fs1.co.il/bus/tsla_stock.php");
    const [textI, setTextI] = useState("Stock Price of Tsla - april 20 to may 22");
    useEffect(() => {
        doApi();
    }, [textI])

    const doApi = async () => {
        const resp = await axios.get(url);
        let temp_ar = resp.data.results.map(item => {
            return {
                x: new Date(item.t), 
                y: item.c
            }
        })
        console.log(temp_ar);
        setAr(temp_ar);
    }
    const onBtnClick = ()=>{
        if(url =="http://fs1.co.il/bus/tsla_stock.php"){
             setUrl("http://fs1.co.il/bus/msft_stock.php");
             setTextI("Stock Price of Microsoft - april 20 to may 22")
        }
        else{
            setUrl("http://fs1.co.il/bus/tsla_stock.php"); 
            setTextI("Stock Price of Tsla - april 20 to may 22")

        }
       
    }
 
    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text:textI
        },
        axisX: {
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Closing Price (in EUR)",
            valueFormatString: "$##0.00",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function (e) {
                    return "$" + CanvasJS.formatNumber(e.value, "##0.00");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM",
            yValueFormatString: "$##0.00",
            dataPoints: ar
        }]
    }

    return (
        <div className='container p-4'>
            <button onClick={onBtnClick} className='btn btn-success'>Change company</button>
            <CanvasJSChart options={options} />
        </div>

    )
}

export default Graph2