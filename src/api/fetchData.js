
export const getData= async()=>{

    const url =`https://api.covid19api.com/total/country/peru`;
            
     const resp = await fetch (url);
     const data = await resp.json();
    
      const dataCovid = data.map(dt =>{
         return{
             fecha: dt.Date,
             confirmados:dt.Confirmed,
             muertos:dt.Deaths,
             recuperdos:dt.Recovered,
             activos:dt.Active
         }
     }) 

    return  dataCovid;
    }