import React, { useState } from 'react'
import NavBar from '../../components/CreativeBox/NavBar'
import Sidebar from '../../components/CreativeBox/Sidebar'
import InfoCuentaBox from '../../components/CreativeBox/InfoCuentaBox';
import Plan from '../../components/CreativeBox/Plan';
import { Footer } from '../../components/CreativeBox/Footer';

//TODO: Cambiar texto por traduccion
export function Account() {
  const [actual, setActual] = useState("cuenta");

  return (
    <div className='flex flex-col items-center w-full bg-gray-100'>
      <NavBar />
      <div className='flex w-full h-[100%]'>
        <Sidebar actual={actual} setActual={setActual} />

        <div className='sm:w-full h-screen mb-20'>
          {actual == "cuenta" ? 
            <div className='p-2 sm:p-4 flex flex-col gap-2.5'>
              <h1 className="text-3xl font-bold">Cuenta</h1>
              <hr />
              <InfoCuentaBox titulo="Imagen del perfil"  />
              <InfoCuentaBox titulo="Nombre de la cuenta" valor='José Hernandez'  />
              <InfoCuentaBox titulo="Nombre de usuario CreativeBox"  />
              <InfoCuentaBox titulo="Empresa"  />
              <InfoCuentaBox titulo="Correo electrónico" valor='jhernandez@gmail.com'  />
              <InfoCuentaBox titulo="Teléfono"  />
            </div>
          :
            <Plan />
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}


