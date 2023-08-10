import React from 'react';
import Titulo from '../layouts/Titulo';

const Footer = () => {
  return (
    <div className= 'flex items-end w-full relative bg-indigo-600'>
      <div className='absolute inset-x-0 top-96 bg-indigo-600 h-16'>
        <Titulo/>
      </div>
    </div>
  )
}

export default Footer
