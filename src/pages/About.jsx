import React from 'react'
import { UserIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Margarita Mesa',
    role: 'Profesora',
  },
  {
    name: 'Sonia Granado',
    role: 'Profesora',
  },
  {
    name: 'Arminda García',
    role: 'Profesora',
  },
]

function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Equipo Docente</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            El equipo docente ha desarrollado esta página con el fin de conseguir la mejora de los resultados académicos del alumnado
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <UserIcon className="h-6 w-6" aria-hidden="true"  />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About