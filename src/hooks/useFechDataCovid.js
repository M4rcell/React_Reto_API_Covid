import React, { useEffect, useState } from 'react'
import { getData } from '../api/fetchData';

export const useFechDataCovid = () => {

    const [state, setState] = useState({
        data:[],
        loading:true    
    });

         
    useEffect (()=>{

        getData()
        .then(dt =>{
            setTimeout(()=>{
                
                console.log(dt);

                setState({
                    data:dt,
                    loading:false
                });

            },1000);
           
        });

    },[]);

    

    return state;
    
}
