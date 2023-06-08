import React from 'react'

const About = () => {
  return (
    <div name= 'about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold  '>
                        <p>Hi, Nice To Meet You. Partner With Us To Drive Your Livelyhood And Many More.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in nisl ac elit vestibulum euismod. Donec et diam sem. Curabitur eget aliquet nulla, eget fringilla odio. Phasellus sodales, leo sed scelerisque mattis, quam justo interdum nibh, sit amet vulputate nibh nisl nec tellus. Aenean non dapibus mi</p>
                    </div>
                </div>
            </div>
        </div> 
    
  )
}

export default About
