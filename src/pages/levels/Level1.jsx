import Level from '../../components/Level'

// Esto no va aqui, sino en challenge 1
const levelInfo = {
  level: "Nivel 1",
  challege: "Reto 1",
  mainDescription: 'En este primer nivel,  encontrarás varios retos en el universo de la contabilidad. Debes alcanzar y controlar el planeta de los "costes" y otros elementos básicos necesarios para el desempeño de tus funciones. ',
  
  descriptions: {
    description1: 'Dado que el "coste" es una de las principales magnitudes económicas en torno a la que girarán tus funciones en la empresa, es imprescindible que demuestres saber llegar al planeta correcto, diferenciándolo de "gastos" y "pagos". ',
    description2: 'La ausencia de un marco conceptual normalizado para la Contabilidad de costes y de gestión, puede complicar el camino, pues a veces  se utiliza de forma muy imprecisa. ',
    description3: 'Lee la guía de abordo y visualiza el vídeo antes de comenzar la dinámica del reto. Te ayudarán a comprender los conceptos básicos: "gastos", "costes" y "pagos". Cuando lo hayas hecho, te lanzaremos en una nave al espacio para comenzar el reto 1 y solo podrás llegar a tierra si has comprendido la definición de cada término.',
  },
  guidelines: {
    guideline1: {
      name: "Guía de apoyo 1",
      link: "https://aep24.ulpgc.es/pluginfile.php/391960/mod_resource/content/2/Primer%20ep%C3%ADgrafe%20tema%202%20%20definitivo.pdf"
    },
    guideline2: {
      name: "Guía de apoyo 2",
      link: "https://aep24.ulpgc.es/mod/resource/view.php?id=363539",
    },
  },

  resolutionDescription: "En este primer reto, debes salir del espacio sideral y alcanzar el planeta de los costes. Para ello, dispones de dos dinámicas de gamificación: Elemental y Básico. Resuelve en ese orden:",
  resolutions: {
    resolution1: {
      name: "Elemental",
      link: "https://aep24.ulpgc.es/mod/url/view.php?id=367047",
    },
    resolution2: {
      name: "Básico",
      link: "https://aep24.ulpgc.es/mod/url/view.php?id=366919"
    }
  }
}

function Level1() {
  return (
    <div className='relative py-24 sm:py-32'>
      <Level></Level>
    </div>
  )
}

export default Level1