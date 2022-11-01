import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../graph_lib/canvasjs.react';
import axios from 'axios';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


function Graph1() {
    const [ar, setAr] = useState([]);
    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = "https://coronavirus-19-api.herokuapp.com/countries";
        const resp = await axios.get(url);
        const countries_ar = ["USA", "Spain", "Brasil", "UK", "France"];
        let temp_ar = resp.data.filter(item => countries_ar.includes(item.country))
        console.log(temp_ar);
        let graph_ar = temp_ar.map(item =>{
            let obg = {
                label:item.country,
                y:item.testsPerOneMillion
            }
            return obg
        })
        console.log(graph_ar);
        setAr(graph_ar);
    }

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title: {
            text: "graph of pop in ciyies"
        },
        axisY: {
            includeZero: true,
            title: "pop * 1000"
        },
        axisX: {
            title: "cities"
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: ar
        }]
    }
    return (
        <div className='container p-4'>
            <CanvasJSChart options={options} />
        </div>
    )
}

export default Graph1