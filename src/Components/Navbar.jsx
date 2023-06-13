import React, {useState} from 'react'
import Logo from '../Assets/logoweb.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs' 
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='Fixed w-f h-[50px] flex justify-end px-4 bg-[#252424] text-center text-white'>
      {/*menu*/}
      <ul className='hidden md:flex  items-center'>
        <li><Link to="home" smooth={true} duration={500} >Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} > About </Link></li>
        <li><Link to="skills" smooth={true} duration={500} > Cars </Link></li>
        <li><Link to="work" smooth={true} duration={500} > Blogs </Link></li>
        <li><Link to="contact" smooth={true} duration={500} > Contact </Link></li>
        <li className='bg-[#ffd73f] text-center'><Link to="driver" smooth={true} duration={500} > Became A Driver </Link></li>
      </ul>
      {/*dinamic*/}
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
            href='https://www.linkedin.com/in/tamenegelaye' target="_blank">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/tamene21' target='_blank'>
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
            href='https://drive.google.com/file/d/1gEXG4GZflAcVGtLipmwpY1lUp1Qr8hMT/view?usp=sharing' target='_blank'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar
