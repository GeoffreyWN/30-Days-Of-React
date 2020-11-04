import React from 'react'

import './population.styles.css'
import {tenHighestPopulation} from '../../data/populationdata'

const Population = ({populationTitle})=>{
    const data = tenHighestPopulation;
    // console.log(data[0].population)
    // console.log(Object.entries({data}))

    // for(const {country, population} of data) {
    //     console.log(country, population)
    // }
    
    return(
        <div>
            <h2>{populationTitle}</h2>
                {data.map(({country, population})=>(
                    <div key={country} className="percentage">
                        <div style={{width: "400px"}}>{country}</div> <div style={{width: "500px"}}> <div className="percentage-value" style={{ width: `${Math.floor((population / data[0].population) * 100)}%`  }}> </div> </div> <div style={{width: "400px"}}>{population}</div>
                    </div>
                ))}

        </div>
    )
}


export default Population
