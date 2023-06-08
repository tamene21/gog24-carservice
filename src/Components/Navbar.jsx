import React, {useState} from 'react'
import Logo from '../Assets/gog24.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs' 
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='Fixed w-f h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='logo image' style={{width:'50px', borderRadius:'50%'}}></img>
      </div>
      {/*menu*/}
      <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500} >Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} > About </Link></li>
        <li><Link to="skills" smooth={true} duration={500} > Cars </Link></li>
        <li><Link to="work" smooth={true} duration={500} > Blogs </Link></li>
        <li><Link to="contact" smooth={true} duration={500} > Contact </Link></li>
      </ul>
      {/*Hamburger*/}
      <div onClick ={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile menu*/}
      <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li onClick={handleClick} className='py-6 text-4xl'><Link to="home" smooth={true} duration={500} >
          Home
        </Link></li>
        <li onClick={handleClick} className='py-6 text-4xl'><Link to="about" smooth={true} duration={500} >
          About
        </Link></li>
        <li onClick={handleClick} className='py-6 text-4xl'><Link to="skills" smooth={true} duration={500} >
          Cars
        </Link></li>
        <li onClick={handleClick} className='py-6 text-4xl'><Link to="work" smooth={true} duration={500} >
          Blogs
        </Link></li>
        <li onClick={handleClick} className='py-6 text-4xl'><Link to="contact" smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>
      {/*social icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0f3773]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='/'>
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='/'>
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6a9f93]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='/'>
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#938484]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='/'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar
