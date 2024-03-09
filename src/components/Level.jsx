
import { Fade } from 'react-awesome-reveal'

import {Link} from 'react-router-dom'


function Level(info) {
    return (
        <div className="relative py-24 mt-10 sm:py-32">
            <Fade>
                <div className='mx-auto max-w-7xl px-6 lg:px-8 flex align-center justify-center'>
                    <div className='mx-auto max-w-5xl bg-white px-7 py-10 shadow-xl lg:px-24 lg:py-20'  style={{ borderRadius: '30px' }}>
                        <div>
                            <Link 
                                to="/range"
                                className="text-base font-semibold leading-7 text-indigo-600"
                                >
                                    ¿Cómo funciona?
                                </Link>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {info.level}
                            </h2>
                            <p className="mt-6 text-md leading-8 text-gray-600 lg:text-lg">
                                {info.description}
                            </p>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>
    )
}

export default Level