import React from 'react'
import autos from '../data/autos.json'

export const autoSelector = (marca) => {
  return autos.filter( auto => auto.marca.toLowerCase() === marca.toLowerCase())
}

export default autoSelector;