import { Fade } from 'react-awesome-reveal'

import Proyect from '../components/Proyect'

function ProyectPage() {
  return (
    <div className="py-24 sm:py-24 relative isolate px-6 pt-14 lg:px-8">
      <Fade>
        {/* Page */}
        <Proyect colorTitle={"gray-900"} colorText={"gray-600"} />
      </Fade>
    </div>
  )
}
export default ProyectPage