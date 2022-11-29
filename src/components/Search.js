import React from 'react'


 function Search({searchKey}) {
        const inputChange = (e) => {
          searchKey(e)
        }
  return (
    <div className='Search relative w-2/3 mx-auto'>
      <input onChange={ e => inputChange(e.target.value)} className="bg-bg-color-grey transition-all rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"></input>
      <div className="search-img absolute right-3 top-2 cursor-pointer select-none "><i className="fa-solid fa-magnifying-glass"></i></div>
    </div>
  )
}

export default Search;