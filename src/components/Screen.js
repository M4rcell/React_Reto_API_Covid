import React from 'react'
import { DataChart } from './DataChart'
import { DataTable } from './DataTable'
import './style.css'

export const Screen = () => {
   /*  style="width: 18rem;" */
    return (
        <>
            <div  className="card" >
                <div className="card-header ">
                Casos COVID-19 en Perú al 2020-07-15
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">  <DataChart/></li>
                    <li className="list-group-item"> <DataTable/></li>
                </ul>
            </div>
        </>
    )
}
