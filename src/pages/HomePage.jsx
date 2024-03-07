import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BuildingOffice2Icon, HandThumbUpIcon, PlusIcon } from '@heroicons/react/20/solid'
import Proyect from '../components/Proyect'

function HomePage() {

  const [widthSize, setWidthSize] = useState(window.innerWidth)

  useEffect(() => {
    const actualWidthSize = () => {
      setWidthSize(window.innerWidth)
    }

    window.addEventListener('resize', actualWidthSize)

    return () => {
      window.removeEventListener('resize', actualWidthSize)
    }

  }, [])

  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">

        <section id='header'>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Página web de la asignatura Contabilidad de Gestion.{' '}

                <Link
                  to="https://www.ulpgc.es/"
                  className="font-semibold text-indigo-600"
                  target="_blank">
                  <span className="absolute inset-0" aria-hidden="true" />
                  ULPGC <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Gracioseros S.A.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Somos una empresa canaria situada en el Polígono de Arinaga. Nuestra actividad es la fabricación y venta de dos tipos de productos: paquetes de folios de papel DIN A-4 (D4) y paquetes de folios reciclados de 80 gsm. (PR80).
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">

                <Link
                  to="/proyect"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Proyecto
                </Link>

                <Link
                  to="/about"
                  className='text-sm font-semibold leading-6 text-gray-900'>
                  Sobre nosotros
                </Link>
              </div>

            </div>
          </div>
        </section>

        <section id='proyect'>

          {
            widthSize < 768 ? (
              <div
                className='container mx-auto my-3 bg-zinc-800 whitespace-pre-line shadow-xl'
                style={{ borderRadius: '30px', padding: '2.5rem 2rem 3rem' }}
              >
                <div>
                  <div className='flex align-center justify-center'>
                    <h2
                      className='text-3xl text-white font-bold'
                      style={{ letterSpacing: '-.8px', lineHeight: '1em' }}
                    >
                      Proyecto Universidad Empresa</h2>
                  </div>
                  <div className='flex align-center justify-center py-5 mb-4'>
                    <p
                      className='text-white'
                      style={{ lineHeight: '1.3em', }}
                    >
                    Formas parte del proceso de selección de personal para la creación del nuevo Departamento de Control de Gestión de nuestra empresa.
                    </p>
                  </div>
                  <Link
                    to="/proyect"
                    className='rounded-md w-full py-3 px-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold'
                  >
                    Proyecto Universidad - Empresa
                  </Link>
                </div>
              </div>

            ) : widthSize >= 768 && widthSize < 992 ? (
              <div
                className='container mx-auto my-3 bg-zinc-800 whitespace-pre-line shadow-xl'
                style={{ borderRadius: '30px', padding: '2.5rem 2rem 3rem' }}
              >
                <Proyect colorTitle={"white"} colorText={"white"} />
              </div>

            ) : (
              <div
                className='container max-w-screen-lg mx-auto my-3 bg-zinc-800 whitespace-pre-line shadow-xl'
                style={{ borderRadius: '30px', padding: '2.5rem 2rem 3rem' }}
              >
                <Proyect colorTitle={"white"} colorText={"white"} />

              </div>
            )
          }
        </section>

        <section id='team'>

        </section>

      </div>
    </div>
  )
}
export default HomePage