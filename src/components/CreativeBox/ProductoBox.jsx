import React from 'react'

function ProductoBox({nombre, descripcion, imagen, logo, esPlan=false, setOpenModal}) {
  return (
    <div className={`border max-w-xs rounded ${!esPlan && "cursor-pointer hover:bg-gray-200"} shadow bg-white`}>
        <div className='w-full h-24 bg-cover bg-center rounded-tl rounded-tr' style={{ backgroundImage: `url(${imagen})` }}>
          &nbsp;
        </div>

      <div className='flex flex-col justify-between h-40 p-5 '>
        {esPlan && <h1 className='text-lg font-bold'>{nombre}</h1>}
        <p className={`text-sm ${!esPlan && "font-bold"} overflow-auto sm:overflow-visible`}>{descripcion}</p>
        
        {esPlan ?
          <div className='flex items-center justify-center'>
            <button onClick={() => setOpenModal(true)} className='my-3 rounded border border-black p-1 px-3 rounded-full hover:bg-gray-200 font-semibold'>Cancelar plan</button>
          </div>
        :
          <div className='flex gap-1 items-center'>
              <img className='w-5 h-5 rounded' src={logo} alt=""  /> 
              <h2 className='text-sm font-semibold'>{nombre}</h2>
          </div>}
      </div>
    </div>
  )
}

export default ProductoBox
