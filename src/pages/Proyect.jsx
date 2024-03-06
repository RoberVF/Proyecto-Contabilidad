import {React, useState} from 'react'
import { BuildingOffice2Icon, HandThumbUpIcon, PlusIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const features = [
  {
    name: 'Recursos Humanos',
    description:
      "Nuestro Departamento de Recursos Humanos, en colaboración con el equipo docente de Contabilidad de Gestión de la ULPGC, ha diseñado una dinámica para evaluar competencias según los niveles y retos superados.",
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Prueba de selección',
    description: 'Estas pruebas de selección serán individuales y/o en dinámicas de equipo, pudiéndose realizar algunas de ellas fuera de nuestras oficinas.',
    icon: HandThumbUpIcon,
  },
  {
    name: 'Ofertas',
    description: 'Se ofertan tres puestos de Técnico de gestión (Nivel 1, Nivel 2 y Nivel 3) y uno de Controller, que dependerá directamente del CEO de nuestra compañía.',
    icon: PlusIcon,
  },
]

function Proyect() {
  return (
    <div className="bg-white py-24 sm:py-24 relative isolate px-6 pt-14 lg:px-8">

      {/* Gradient superior */}
      <div
        className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100 lg:opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

        <div
        className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 lg:hidden md:hidden"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[40deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100 lg:opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      {/* Page */}
      <div className="mx-auto max-w-7xl px-2 mt-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="hidden lg:block text-base font-semibold leading-7 text-indigo-600">
            <Link to="https://ulpgc.es" target="_blank">ULPGC</Link>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proyecto Universidad - Empresa
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Formas parte del proceso de selección de personal para la creación del nuevo Departamento de Control de Gestión de nuestra empresa.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Gradient inferior */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

export default Proyect