import React from 'react';


const Hero = () => {
  return (
    <div>
      <main className='flex top-2 relative justify-center relative top-24'>
        <div className='flex flex-col space-y-16 max-w-2xl max-h-96'>
          <h1 className='flex text-5xl font-bold'>
            Find the perfect destination
          </h1>
          <p className='flex text-2xl'>
            Our app will help you find the perfect path for your next trip.
            With an easy-to-use interface and a host of itinerary options, 
            planning your next trip has never been easier.
          </p>
          <button className='flex bg-indigo-600 rounded-lg items-center justify-center text-white font-bold gap-4 w-80 h-16'>
            View More
          </button>
        </div>
      </main>
    </div>
  )
}

export default Hero
