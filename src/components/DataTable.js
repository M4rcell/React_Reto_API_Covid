import React from 'react'
import { useFechDataCovid } from '../hooks/useFechDataCovid'

export const DataTable = () => {
   
   const {data,loading}=useFechDataCovid();
   
    data.sort(function(a, b) {
        var c = new Date(a.fecha);
        var d = new Date(b.fecha);
        return d-c;
    });
    

    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Confirmados</th>
                    <th scope="col">Muertos</th>
                    <th scope="col">Recuperados</th>
                    <th scope="col">Activos</th>

                    </tr>
                </thead>
                <tbody>

                    {
                    loading ?
                    <h3>Cargando ...</h3>
                    :          
                    data.map(dt =>(
                       
                        <tr key={dt.fecha}>
                            <th >{dt.fecha}</th>
                            <td>{dt.confirmados}</td>
                            <td>{dt.muertos}</td>
                            <td>{dt.recuperados}</td>
                            <td>{dt.activos}</td>
                        </tr>


                    ))

                    }
                   
                </tbody>
            </table>
        </div>
    )
}
