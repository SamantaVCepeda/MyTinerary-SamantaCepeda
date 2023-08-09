import React from 'react';
import { useState } from 'react';
import Derecha from '../assets/img/Derecha.png';
import Izquierda from '../assets/img/Izquierda.png';




const Carrusell = ({ fotos }) => {

  const [index, setIndex] = useState(0)

  const manejarClickDerecha = () =>{
    if (index < diapositiva.length -1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
    
    
  }

  const manejarClickIzquierda = () =>{
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(diapositiva.length - 1)
    }
    
    
  }

  const diapositiva = [];
  for (let i = 0; i < fotos.length; i+=4) {
    diapositiva.push(fotos.slice(i, i+4));
  }

  const clickBolita = (i) =>{
    setIndex(i)
  }
  
  return (
    <div>
      <div className='flex justify-around items-center'>
        <div>
          <img src={ Izquierda } className='w-16 cursor-pointer p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={ manejarClickIzquierda }/>
        </div>

        <div className='flex justify-center'>
          {diapositiva[index].map(f => (
            <img key={f} src={f} className='w-80 h-80'/>
          ))}
        </div>
          
        <div>
          <img src={ Derecha } className='w-16 cursor-pointer p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={ manejarClickDerecha }/>
        </div>
      </div>

      <div className='flex flex-wrap justify-center'>
        {
          diapositiva.map((f, i) => {
            if (i === index) return <span key={i} className='cursor-pointer'>🟣</span>
            else  return <span key={i} className='cursor-pointer' onClick={()=> clickBolita(i)}>🔘</span>
          })
        }
      </div>
    </div>
  )
}

export default Carrusell
