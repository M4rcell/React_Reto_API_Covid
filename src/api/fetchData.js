
import moment from 'moment';

export const getData= async()=>{

    const url =`https://api.covid19api.com/total/country/peru`;
            
     const resp = await fetch (url);
     const data = await resp.json();
      
     const cont=0;

      const dataCovid = data.map(dt =>{
          
         return{
             fecha: formaDate(dt.Date),
             confirmados:dt.Confirmed,
             muertos:dt.Deaths,
             recuperados:dt.Recovered,
             activos:dt.Active
         }
     }) 

    return  dataCovid;
    }

const formaDate=(date)=>{
    
   const fecha =  moment(date).utc().format('YYYY-MM-DD');
    
    return fecha;
   
}
