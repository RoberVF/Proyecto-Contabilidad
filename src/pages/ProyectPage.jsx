import {React, useState} from 'react'
import { BuildingOffice2Icon, HandThumbUpIcon, PlusIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

import Proyect from '../components/Proyect'

function ProyectPage() {
  return (
    <div className="py-24 sm:py-24 relative isolate px-6 pt-14 lg:px-8">
      
      {/* Page */}
      <Proyect colorTitle={"gray-900"} colorText={"gray-600"}/>

    </div>
  )
}
export default ProyectPage