import React from 'react';
import Hero from '../../components/Hero';
import Carrusell from '../../components/Carrusell';
import Nav from '../../layouts/Nav';

const fotos = [
    'https://www.germany.travel/media/redaktion/staedte_kultur_content/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg',
    'https://www.civitatis.com/blog/wp-content/uploads/2016/05/Estatua-de-la-Libertad.jpg',
    'https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg',
    'https://media1.travelguide.de/media/2021/12/rio-1.jpeg',
    'https://images.barrons.com/im-86071?width=1280&size=1',
    'https://www.miviaje.info/wp-content/uploads/2018/06/Sidney.jpg',
    'https://vivirafuera.intriper.com/wp-content/uploads/2021/07/Como-es-vivir-en-Tokio-Japon-768x512.jpg',
    'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,height=1081,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/09/AF_X-actividades-al-aire-libre-en-Buenos-Aires-para-hacer-en-familia.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2f/5b/cairo.jpg?w=1100&h=-1&s=1',
    'https://www.thetrainline.com/cms/media/1376/uk-london-tower-bridge-river-thames.jpg?mode=crop&width=800&height=800&quality=70',
    'https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/033/324/slideshow/b51cccd665e853de48dc3456b59ab3e5/slide-spain-barcelona-casa-batllo.jpg',
]




const Home = () => {
  return (
    <div className='max-h-max'>
      {/* Header */}
      <header className='flex justify-around h-16 items-center top-8 relative'>
        <h2 className='w-48 h-11 font-bold text-3xl text-black'>
          My Tinerary
        </h2>
      <Nav/>
      </header>
      <Carrusell fotos={fotos}/>
      <Hero />
    </div>
  )
}

export default Home

