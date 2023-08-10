import React from 'react';
import Titulo from '../layouts/Titulo';
import Nav from '../layouts/Nav';
import ResponsiveNav from '../layouts/ResponsiveNav';

const Header = () => {
  return (
    <div>
      <header className='flex justify-around h-16 items-center top-8 relative'>
        <Titulo/>
        <Nav>
          <ResponsiveNav/>
        </Nav>
      </header>
    </div>
  )
}

export default Header
