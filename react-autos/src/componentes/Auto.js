import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Css
import ImgCss from '../ImgCss.css'

export const Auto = ({ auto }) => {

  return (
    <div className="container">
      <div className="card-card">
        <Link
          className="btn btn-outline-dark btn-lg"
          role="button"
          to={`/auto/${auto.id}`}
        >
          <img className="card-img-top" src={auto.imagen} alt={auto.modelo} />
          </Link>
          <div className="card-body">
            <h5 className="card-title"><b>{auto.marca}</b></h5>
            <p className="card-text"><b>{auto.modelo}</b></p>
            {(auto.precio == 0) ?
              <p className="card-text-price-free">Consultar precio</p>
              :
              <p className="card-text-price">${auto.precio}</p>
            }
            <a href="/" className="btn btn-primary">Volver</a>
          </div>
      </div>
    </div>

  )
}
export default Auto;
