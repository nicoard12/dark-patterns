import React from 'react'

function Search() {
  return (
    <div className="flex items-center bg-gray-300/70 rounded p-1.5 gap-2 w-full max-w-[700px] shadow ">
        <i className="fa-solid fa-magnifying-glass text-gray-600 px-2 py-2"></i>



      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none text-gray-700 text-sm min-w-0"
      />

      <button className="bg-red-800 hover:bg-red-900 text-white font-semibold p-1 px-3 rounded text-sm">
        Buscar
      </button>
    </div>
  );
}

export default Search