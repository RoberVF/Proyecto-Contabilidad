import { Link, useParams, useNavigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

function Level() {

    const { levelNumber } = useParams()

    const navigate = useNavigate()

    const getLevel = (index) => {
        switch (index) {
            case '1':
                return {
                    number: "1",
                    level: "Nivel 1",
                    levelDescription: 'En este primer nivel,  encontrarás varios retos en el universo de la contabilidad. Debes alcanzar y controlar el planeta de los "costes" y otros elementos básicos necesarios para el desempeño de tus funciones. ',
                    challenges: {
                        challenge1: {
                            isActivated: true,
                            number: "1",
                            name: "Reto 1",
                        },
                        challenge2: {
                            isActivated: false,
                            number: "2",
                            name: "Reto 2",
                        },
                        challenge3: {
                            isActivated: false,
                            number: "3",
                            name: "Reto 3",
                        },
                        challenge4: {
                            isActivated: true,
                            number: "4",
                            name: "Reto 4",
                        }
                    }

                }
            case '2':
                return {
                    isActivated: false,
                    number: "2",
                    level: "Nivel 2",
                    levelDescription: 'Some description 2'
                }

            case '3':
                return {
                    level: "Nivel 3",
                    levelDescription: "Some description 3"
                }

            case 'controller': {
                return {
                    level: "Nivel Controller",
                    levelDescription: "Some description Controller"
                }
            }

            default: {
                navigate('/')
                return {
                    level: "Nivel desconocido"
                }
            }
        }
    }

    const level = getLevel(levelNumber)


    return (
        <div className='relative py-24 mt-10 sm:py-32'>
            <Fade>
                <div className='mx-auto max-w-7xl px-6 lg:px-8 flex align-center justify-center'>
                    <div className='mx-auto max-w-5xl bg-white px-7 py-10 shadow-xl lg:px-24 lg:py-20' style={{ borderRadius: '30px' }}>
                        <Link
                            to="/range"
                            className="text-base font-semibold leading-7 text-indigo-600"
                        >
                            ¿Cómo funciona?
                        </Link>

                        <h2 className='mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                            {level.level}
                        </h2>
                        <p className="mt-6 text-md leading-8 text-gray-600 lg:text-lg">
                            {level.levelDescription}
                        </p>
                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 mt-3'>
                            {
                                level && level.challenges ? (
                                    Object.values(level.challenges).map((challenge, index) => (
                                        challenge.isActivated ? (
                                            <Link
                                                key={index}
                                                to={`/level/${level.number}/challenge/${challenge.number}`}
                                                className='bg-indigo-500 rounded-lg font-semibold px-3 py-2 text-white'>
                                                {challenge.name}
                                            </Link>
                                        ) : (
                                            <span key={index} className='hidden'></span>
                                        )
                                    ))
                                ) : (
                                    <p>Level undefined or Null</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Level