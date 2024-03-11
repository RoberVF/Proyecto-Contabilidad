
import { Fade } from 'react-awesome-reveal'

import { Link, useParams } from 'react-router-dom'




function Challenge() {

    const {challengeNumber} = useParams()

    const getChallenge = (challenge) => {
        switch (challenge) {
            case '1':
                return {
                    level: "1",
                    number: "1",
                    challenge: "Reto 1",
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


            case '2':
                return {

                }

            case '3':
                return {

                }

            case '4':
                return {

                }

            default:
                return {
                    challenge: "Reto desconocido",
                    descriptions: {
                        description1: "Reto desconocido, no existe descripcion"
                    }
                }
        }
    }

    const challenge = getChallenge(challengeNumber)

    return (
        <div className="relative py-24 mt-10 sm:py-32">
            <Fade>
                <div className='mx-auto max-w-7xl px-6 lg:px-8 flex align-center justify-center'>
                    <div className='mx-auto max-w-5xl bg-white px-7 py-10 shadow-xl lg:px-24 lg:py-20' style={{ borderRadius: '30px' }}>

                        {/* Explanation */}
                        <div>
                            
                            <Link to={`/level/${challenge.level}`} className="mt-3 font-semibold text-indigo-500">
                                Nivel {challenge.level}
                            </Link>
                            <h3 className='mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>
                                {challenge.challenge}
                            </h3>
                            {
                                challenge && challenge.descriptions ? (
                                    Object.values(challenge.descriptions).map((description, index) => (
                                        <p key={index} className="mt-6 text-md leading-8 text-gray-600 lg:text-lg" >
                                            {description}
                                        </p>
                                    ))
                                ) : (
                                    <p>Description undefined or null</p>
                                )
                                
                            }
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
                                {
                                    challenge && challenge.guidelines ? (
                                        Object.values(challenge.guidelines).map((guideline, index) => (
                                            <Link key={index} to={guideline.link} className='bg-indigo-500 rounded-lg px-3 py-2 text-white font-semibold' target='_blank'>
                                                {guideline.name}
                                            </Link>
                                        ))
                                    ) : (
                                        <p>Guidelines undefined or null</p>
                                    )
                                    
                                }
                            </div>
                        </div>

                        <hr className='mx-auto my-6 border-t-1 border-gray-300 w-5/6' />

                        {/* Resolution */}
                        <div>
                            <h3 className='mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl'>
                                Resolución del {challenge.challenge}
                            </h3>
                            <p className="mt-6 text-md leading-8 text-gray-600 lg:text-lg">
                                {challenge.resolutionDescription}
                            </p>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
                                {
                                    challenge && challenge.resolutions ? (
                                        Object.values(challenge.resolutions).map((resolution, index) => (
                                            <Link key={index} to={resolution.link} className='bg-green-500 rounded-lg px-3 py-2 text-white font-semibold' target='_blank'>
                                                {resolution.name}
                                            </Link>
                                        ))
                                    ) : (
                                        <p>Resolutions undefined or Null</p>
                                    )
                                
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>
    )
}

export default Challenge