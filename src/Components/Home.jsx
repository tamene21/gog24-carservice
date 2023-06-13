import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import car from '../Assets/car1.png'


const Home = () => {
  return (
    
    <div name = 'home' className='flex w-full h-full'>
        <div className='w-full h-screen grid sm:grid-cols-2 '> 
            <div className='max-w-[1000px] grid px-4 gap-1 items-center py-6 grid-cols-1 bg-[#ffd73f] rounded-br-[30%] '>
                <p className='sm:text-right text-4xl font-bold'>Earn. Connect.<br />Contribute to <br />Society </p>
                <p className='sm:text-right text-[12px] font-bold'>
                    Partner with Us to drive your Livelyhood and many more!.
                </p>
                <div>
                    <button className='group flex items-center hover:bg-pink-600 hover:border-pink-600 text-white bg-[#272626] md:resize border-2 font-bold]'>Sign Up Now
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-2'/>
                        </span> 
                    </button>
                </div>
            </div>
            <div className='mx-auto max-w-[1000px] w-full h-screen justify-center items-center sm:grid-cols-2 gap-8 px-2'> 
                <img src={car} alt='car for Home'></img>
            </div>
        </div>
    </div>
  )
}

export default Home

