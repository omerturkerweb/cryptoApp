import React from 'react'

function ContainerInfo() {
  return (
     <div className="ContainerInfo bg-app-color-grey h-10 my-6 rounded-md flex justify-evenly text-white items-center">
            <h3 className='name-volume-i'>name / volume</h3>
            <h3 className='last-price-i'>last price</h3>
            <h3 className='rank-i'>rank</h3>
            <h3 className='change-i'>change(24h)</h3>
     </div>
  )
}
export default ContainerInfo;
