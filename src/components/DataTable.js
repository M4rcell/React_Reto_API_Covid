import React from 'react'
import { getData } from '../api/fetchData'
import { useFechDataCovid } from '../hooks/useFechDataCovid'

export const DataTable = () => {
    const {data}=useFechDataCovid();
    console.log(data);
    return (
        <div>
            
        </div>
    )
}
