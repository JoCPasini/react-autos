import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const AutoList = ( {autos} ) => {

  const verDetalles = (e, id) => {
    e.preventDefault();

  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Destacado</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Precio</th>
            <th scope="col">Detalles</th>
          </tr>
        </thead>
        <tbody>
          { autos.map( auto => 
            <tr key={auto.id}>
              <th scope="row">{auto.destacado}</th>
              <td>{auto.marca}</td>
              <td>{auto.modelo}</td>
              <td>${auto.precio}</td>
              <td><Link to={`/auto/${auto.id}`}><button class="btn btn-success">Ver Detalles</button></Link></td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  )
}

export default AutoList;