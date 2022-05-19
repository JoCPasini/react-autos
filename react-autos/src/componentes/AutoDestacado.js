import React from 'react'

import '../styles/destacados.css'

// Components
import Auto from '../componentes/Auto'

import autos from '../data/autos.json'

export const AutoDestacado = () => {

  const [auto, setAuto] = React.useState([]);

  React.useEffect(() => {
    let auto = destacado();
    setAuto(auto)
    setImages(autos);
  }, [])

  const destacado = () => {
    return autos.filter(x => x.destacado === "Y")
  }

  const setImages = (autos) => {
    autos.map(auto => {
      if (!auto.imagen.includes("assets")) {
        let imagePath = `/assets/${auto.imagen}`
        auto.imagen = imagePath;
        console.log("ImagePath:", imagePath);
        console.log("auto.imagen:", auto.imagen);
        setAuto(auto);
      }
    })
  }

  return (
    <div className="container">
      <h1 className="h1-destacado">Destacados ! </h1>
      <div className="col">
        <div className="row">
          {
            auto.map(x =>
              <div key={x.id} className="col">
                <Auto auto={x} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default AutoDestacado;