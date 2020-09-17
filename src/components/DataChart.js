import React from 'react'
import Chart from 'chart.js';
import moment from 'moment';
import {Line} from 'react-chartjs-2';
import { useFechDataCovid } from '../hooks/useFechDataCovid';

export const DataChart = () => {

    const {data,loading}=useFechDataCovid();

    console.log(data);

    var arrayFechas=[];
    var arrayConfirmados=[];
    var arrayMuertos=[];
    var arrayRecuperados=[];
    var arrayActivos=[];


    data.forEach(myFunction)
    function myFunction(item, index, arr) {
      arrayFechas[index] =  moment(item.fecha).utc().format('MM/DD/YYYY');;
      arrayConfirmados[index]=item.confirmados;
      arrayMuertos[index]=item.muertos;
      arrayRecuperados[index]=item.recuperados;
      arrayActivos[index]=item.activos;
    }
   
    
    const dataCovid = {
        labels: arrayFechas,
        datasets: [
          {
            label: 'Confirmados',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192)',
            borderColor: 'rgba(75,192,192,0.4)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192)',
            pointHoverBorderColor: 'rgba(220,220,220)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: arrayConfirmados
          },
         
          {
            label: 'Muertos',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 51, 119)',
            borderColor: 'rgba(255, 51, 119,0.5)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 51, 119)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 51, 119)',
            pointHoverBorderColor: 'rgba(255, 51, 119)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: arrayMuertos
          },
          {
            label: 'Recuperados',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 178, 51)',
            borderColor: 'rgba(255, 178, 51,0.5 )',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 178, 51)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 178, 51)',
            pointHoverBorderColor: 'rgba(255, 178, 51)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: arrayRecuperados
          }
          ,
          {
            label: 'Activos',
            fill: false,
            lineTension: 0.3,
            borderWidth: 2,
            backgroundColor: 'rgba(104, 220, 43)',
            borderColor: 'rgba(104, 220, 43,0.4)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.3,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(104, 220, 43)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(104, 220, 43)',
            pointHoverBorderColor: 'rgba(104, 220, 43)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: arrayActivos
          }
        ]
      };


    return (
        <div>
          {
            loading ?
            <h3>Cargando ...</h3>
            :<Line data={dataCovid} />
          }
        
      </div>
    )
}
