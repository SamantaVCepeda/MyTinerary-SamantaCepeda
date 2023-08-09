import React from "react";
import usuario from '../assets/img/Vector.png';


const Nav = () => {
  return (

      <nav>
        <ul className='flex flex-wrap items-center text-black text-2xl font-bold w-96 justify-around'>
          <li className='flex'>
            <a href='#'>Home</a>
          </li>
          <li className='flex'>
            <a href='#'>Cities</a>
          </li>
          <li>
            <button className='flex bg-indigo-600 rounded-lg px-8 py-4 text-white font-bold'>
              <div className='w-8'>
                <img src={usuario} className='top-2 left-1 relative gap-2.5 flex' />
              </div>
                Login
            </button>
          </li>
        </ul>
      </nav>

  )
}

export default Nav
