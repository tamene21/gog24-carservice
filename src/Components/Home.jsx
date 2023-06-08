import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#0a192f]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Earn. Connect.</p>
            <p className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Contribute to</p>
            <p className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Society </p>
            <p className='text-2xl sm:text-2xl text-[#8a8f9f] py-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in nisl ac elit vestibulum euismod. Donec et diam sem. Curabitur eget aliquet nulla, eget fringilla odio. Phasellus sodales, leo sed scelerisque mattis, quam justo interdum nibh, sit amet vulputate nibh nisl nec tellus. Aenean non dapibus mi.
            </p>
            <div>
                <button className='px-6 py-3 group my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 text-white md:resize border-2 font-bold]'>Explore more
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-2'/>
                    </span> 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home

