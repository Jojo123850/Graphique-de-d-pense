import React from "react";
import {BarChart, Bar, XAxis, Tooltip} from 'recharts';
import data from '../data.json'; 
import '../styles/barchart.scss'

function BarChartSimple (){

    return(
        <div className="essemble0">
            <article>
                <p>My balance</p>
                <h3> $921.48</h3>
            </article>

            <div className="lesBarres">

            <h2>Spending - Last 7 days</h2>
            <BarChart width={400}
                    height={300}
                    data={data} >
            <XAxis dataKey="day"/> 
            <Tooltip />
            <Bar dataKey= "amount"
            fill= " hsl(10, 79%, 65%)"
            />
            </BarChart>
            <hr></hr>
            <p>Total this month</p>
            <h3> $478.33</h3>
            <h4>  +2.4%</h4>
            <p> from last month</p>
            </div>
            



        </div>
    )
}

export default BarChartSimple;