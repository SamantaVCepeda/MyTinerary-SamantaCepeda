import React from 'react';
import foto1 from '../assets/img/New-York.jpg';
import foto2 from '../assets/img/Tokyo.jpg';

const Carrusell = () => {
  return (
    <div className='flex top-24 relative justify-center'>
          <figure>
            <img src={ foto1 } className='w-96 h-96 opacity-50' />
          </figure>
          <figure>
            <img src={ foto2 } className='w-96 h-96 opacity-50' />
          </figure>
          <figure>
            <img src={ foto1 } className='w-96 h-96 opacity-50' />
          </figure>
          <figure>
            <img src={ foto2 } className='w-96 h-96 opacity-50' />
          </figure>
    </div>
  )
}

export default Carrusell
