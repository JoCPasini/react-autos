
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// JSON
import autos from '../data/autos.json'

// Components
import Auto from '../componentes/Auto'

const AutoByID = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState({});

  const setImages = () => {
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

  React.useEffect(() => {
    getAutos();
    setImages();
  })

  const getAutos = () => {
    autos.map(auto => {
      if (auto.id == id) { setAuto(auto) }
    })
  }


  return (

    <div className="container">
      <Auto auto={auto} />
    </div>
  )
}

export default AutoByID