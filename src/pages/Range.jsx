import { AcademicCapIcon } from '@heroicons/react/20/solid'

import {Fade} from 'react-awesome-reveal'

const features = [
  {
    name: 'Técnico de Gestión I',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    name: 'Técnico de Gestión II',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  },
  {
    name: 'Técnico de Gestión III',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
  {
    name: 'Controller',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
]

export default function Example() {
  return (
    <div className="relative py-24 mt-10 sm:py-32">
      <Fade>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex align-center justify-center">
        <div className="mx-auto max-w-5xl bg-white px-7 py-10 shadow-xl lg:px-24 lg:py-20" style={{ borderRadius: '30px' }}>
          <div className="lg:pr-8 lg:pt-4">
            <div className="">
              <p className="text-base font-semibold leading-7 text-indigo-600">Aumenta tu nivel</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sistema de Rangos</h2>
              <p className="mt-6 text-md leading-8 text-gray-600 lg:text-lg">
                En el proceso de selección, tendrás que superar cuatro niveles distintos, cada uno de los cuales incluye uno o varios retos.
                Cada nivel completado satisfactoriamente, supone subir de rango en la estructura organizativa de la empresa.
              </p>
              <p className='mt-6 text-md leading-8 text-gray-600 lg:text-lg'>
                En cada nivel te enfrentarás a distintos retos, que realizarás de forma autónoma o en las oficinas de la empresa.
                Tras superar los retos que se te propongan en las oficinas de Gracioseros, S.A.,
                podrás ser candidato/a a recibir una mención por parte del equipo docente de la Universidad. Tu puesto dependerá del número de menciones que acumules:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-md text-gray-900">
                      <AcademicCapIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}:
                    </dt>{' '}
                    <dd className="inline text-sm">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className='max-w-7xl px-7 py-3 bg-indigo-400 flex align-center mt-8 shadow-xl' style={{ borderRadius: '20px' }}>
                <p className=' text-md leading-8 text-white font-semibold'>
                  Además, si consigues los puestos de "Técnico de Gestión III" o "Controller",
                  recibirás una invitación para un desayuno con el comité ejecutivo de la empresa y el equipo docente de la asignatura.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </Fade>
    </div>
  )
}
