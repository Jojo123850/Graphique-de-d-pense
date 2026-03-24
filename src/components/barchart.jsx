import React, { useState } from "react";
import {BarChart, Bar, XAxis, Tooltip, Cell,} from 'recharts';
import data from '../data.json'; 
import '../styles/barchart.scss'

function BarChartSimple (){
    const [ activeIndex, setActiveIndex ]= useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return(
        <div className="essemble0">
            <article className="enHaut">
                <article>
                    <p>My balance</p>
                    <h3> $921.48</h3>
                </article>
                <img src="./logo.svg" alt="logo" />
            </article>

            <article className="lesBarres">

                    <h2>Spending - Last 7 days</h2>
                    <BarChart width={400}
                            height={300}
                            data={data}
                             >
                    <XAxis dataKey="day" stroke="hsl(28, 10%, 53%)" tickLine={false} axisLine={false}/> 

                    <Tooltip 
                    cursor={false} position={{y:0}}
                    id="my-tooltip-border"
                    contentStyle={ {border: "1px solid black", backgroundColor:"black", borderRadius:"6px"}}
                   
                    itemStyle={{ color: "#ffffff" }}
                    labelStyle={{ color: "#ffffff" }}
                   
                    formatter={(value) => [`$${value}`]}
                    labelFormatter={() => ""} />
              <Bar
            dataKey="amount"
            radius={[4, 4, 0, 0]}
            onClick={(data, index) => setActiveIndex(index)}
            onMouseEnter={(data, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            activeBar={false}  
            >
            {data.map((entry, index) => (
                <Cell
                key={index}
                fill={activeIndex === index ? 
                 "hsl(186, 34%, 65%)"   
                 : hoveredIndex === index
                ?"hsl(10, 47%, 71%)"   
                : "hsl(10, 79%, 65%)" 
                } 
                    
                />
            ))}
            </Bar>
                    </BarChart>
                    <hr></hr>

                    <article className="article3">
                        <article>
                            <p className="hTotal">Total this month</p>
                            <h2> $478.33</h2>
                        </article>
                        <article className="art30">
                            <h4>  +2.4%</h4>
                            <p className="hTotal"> from last month</p>
                        </article>
                    </article>
            </article> 
            



        </div>
    )
}

export default BarChartSimple;