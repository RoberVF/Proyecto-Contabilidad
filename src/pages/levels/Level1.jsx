import React from 'react'

import Level from '../../components/Level'

const levelInfo = {
  level: "Nivel 1",
  description: 'En este primer nivel,  encontrarás varios retos en el universo de la contabilidad. Debes alcanzar y controlar el planeta de los "costes" y otros elementos básicos necesarios para el desempeño de tus funciones. ',
}

function Level1() {
  return (
    <div className='relative py-24 sm:py-32'>
      <Level {...levelInfo}></Level>
    </div>
  )
}

export default Level1