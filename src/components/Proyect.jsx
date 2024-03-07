import { BuildingOffice2Icon, HandThumbUpIcon, PlusIcon } from '@heroicons/react/20/solid'


function Proyect({colorTitle, colorText}) {

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

    return (
        <div className="mx-auto max-w-7xl px-2 mt-20 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                {/* <h2 className="hidden lg:block text-base font-semibold leading-7 text-indigo-600">
                    <Link to="https://ulpgc.es" target="_blank">ULPGC</Link>
                </h2> */}
                <h2 className={`text-2xl font-bold tracking-tight text-${colorTitle} lg:text-6xl`}>
                    Proyecto Universidad - Empresa
                </h2>
                <p className={`mt-6 text-lg leading-8 text-${colorText}`}>
                    Formas parte del proceso de selección de personal para la creación del nuevo Departamento de Control de Gestión de nuestra empresa.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                            <dt className={`text-base font-semibold leading-7 text-${colorTitle}`}>
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                {feature.name}
                            </dt>
                            <dd className={`mt-2 text-base leading-7 text-${colorText}`}>{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

export default Proyect