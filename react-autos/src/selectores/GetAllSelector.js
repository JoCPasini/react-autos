import React from 'react'
import { Link } from 'react-router-dom'

// Css
import '../selectores/GetAllSelector.css'

// Components
import Auto from '../componentes/Auto'

export const GetAllSelector = ({ autos }) => {

    const [auto, setAutos] = React.useState({});

    const setImages = () => {
        autos.map(auto => {
            if (!auto.imagen.includes("assets")) {
                let imagePath = `/assets/${auto.imagen}`
                auto.imagen = imagePath;
                console.log("ImagePath:", imagePath);
                console.log("auto.imagen:", auto.imagen);
                setAutos(auto);
            }
        })
    }

    React.useEffect(() => {
        setImages();
    })

    return (
        <div className="container">
            <h1><b>A TODO MOTOR AUTOS</b></h1>
            <h3>Publicá sin registrarte y en un solo paso. ¿Apurado por vender? Recibí ofertas en Efectivo de concesionarios registrados. ¡Súper!</h3>
            <h3 className="destacados">Destacados</h3>
            <div className="col">
                <div className="row">
                    {
                        autos.map(x =>
                            <div key={x.id} className="col">
                                <Auto auto={x} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default GetAllSelector;
