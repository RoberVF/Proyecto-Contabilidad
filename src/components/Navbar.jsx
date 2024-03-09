import { Fragment, useState, useRef } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronDoubleRightIcon, PlusIcon } from '@heroicons/react/20/solid'

import { Link } from 'react-router-dom'

//Scroll Reveal
import { Fade } from 'react-awesome-reveal'


const navRangesLevels = [
  { name: 'Nivel 1', description: 'Comienza en el proyecto', to: 'level_1' },
  { name: 'Nivel 2', description: 'Continua en el proyecto', to: 'level_2' },
  { name: 'Nivel 3', description: 'Ultimo nivel del proyecto', to: 'level_3' },
  { name: 'Nivel Controller', description: 'Se el mejor', to: 'level_controller' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  //Manejo dropdown con Popover para PC
  const { refToClose } = useRef()

  //Manejo hamburguer menu con Dialog para Mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto sticky-top flex justify-between lg:grid lg:grid-cols-3 max-w-7xl items-center p-6 lg:px-8" aria-label="Global">
        <Link to="/" className="font-bold text-zinc-700 text-xl md:text-2xl">Gracioseros S.A.</Link>
        <div className="flex lg:justify-start lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open main menu'}</span>
            {
              mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3BottomRightIcon className='h-6 w-6' aria-hidden="true" />
              )
            }
          </button>
        </div>
        <Link
          to="/proyect"
          className="hidden lg:flex lg:justify-center bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 mt-2 rounded"
        >Proyecto Universidad</Link>
        <Popover.Group className="hidden lg:flex lg:justify-end">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
              Rangos
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
              >
                <div className="p-4">
                  <div
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <PlusIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={"/range"}
                        className="block w-full font-semibold text-gray-900"
                        onClick={() => {
                          refToClose.current.close()
                          setMobileMenuOpen(false)
                        }}>
                        ¿Cómo funciona?
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">Haz click aquí para recibir información sobre el sistema de rangos</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  {navRangesLevels.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <ChevronDoubleRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto flex-grow">
                        <Link
                          to={`/levels/${item.to}`}
                          className="block w-full font-semibold text-gray-900 flex-grow"
                          onClick={() => {
                            refToClose.current.close()
                            setMobileMenuOpen(false)
                          }}>
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>


      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="font-bold text-zinc-700 text-xl md:text-2xl"
              onClick={() => setMobileMenuOpen(false)}>Gracioseros S.A.</Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 bg-gray-50">
                        Rangos
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">

                        <Link
                          to="/range"
                          className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 bg-gray-50'
                          onClick={() => setMobileMenuOpen(false)}>¿Cómo funciona?</Link>

                        {navRangesLevels.map((item) => (
                          
                            <Link
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            key={item.name}

                              to={`/levels/${item.to}`}
                              onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

              </div>
              <Link
                to="/proyect"
                className=" lg:hidden bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 mt-2 rounded w-full"
                onClick={() => setMobileMenuOpen(false)}>Proyecto Universidad</Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar