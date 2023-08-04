import React from 'react';
import usuario from '../../../public/Vector.png';

const Home = () => {
  return (
    <div className='box-border p-0 m-0 bg-neutral-100 h-24 '>
      <header className='flex justify-around h-16 items-center top-8 relative'>
        <h1 className='font-sans w-48 h-11 font-bold text-3xl text-black'>
          My Tinerary
        </h1>
        <nav>
          <ul className='flex flex-wrap items-center text-black font-sans text-2xl font-bold w-96 justify-around'>
            <li className='flex'>
              <a href='#'>Home</a>
            </li>
            <li className='flex'>
              <a href='#'>Cities</a>
            </li>
            <li>
              <button className='flex bg-indigo-600 rounded px-8 py-4 text-white font-sans font-bold'>
                <div className='w-8'>
                  <img src={usuario} className='top-2 left-1 relative gap-2.5 flex' />
                </div>
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Home

