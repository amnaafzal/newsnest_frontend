'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/Image'
import { useTheme } from '../context/themeContext'

const Navbar = () => {

  const { isDarkMode, toggleMode } = useTheme()
  const [hamberger, setHamberger] = useState(false)


  useEffect(() => {

    if (isDarkMode) {

      document.querySelector('.navbar').classList.remove('bg-gray-300', 'border-gray-300')
      document.querySelector('.navbar').classList.add('bg-gray-900', 'border-gray-900')
      document.getElementById('toggleModeIcon').src="clear_day_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"
      
      
    }
    else {
      document.querySelector('.navbar').classList.remove('bg-gray-900', 'border-gray-900')
      document.getElementById('toggleModeIcon').src="dark_mode_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" 
      document.querySelector('.navbar').classList.add('bg-gray-300', 'border-gray-300')
    

    }
  })

  const showMenu = () => {

    const items_dropdown = document.getElementById('items_dropdown')

    if (hamberger == false) {
      setHamberger(true)

    }

    else {
      setHamberger(false)


    }

  }


  return (
    <div>
      <nav className='navbar flex justify-between  bg-gray-300 transition-colors duration-500 text-white px-10 items-center border border-gray-300 border-b-gray-600'>
        <div className="logo flex items-center gap-2">
          <Image src="/logo2.png" alt="NewsNest" width={90} height={30} />

        </div>

        <ul className='sm:flex justify-center items-center gap-6 hidden' id='navbar_items'>
          <li><Link href='/' className=' text-xl  hover:text-blue-500'>Home</Link></li>
          <li><Link href='/my_notes' className=' text-xl  hover:text-blue-500'>My Notes</Link></li>
          <li><Link href='/about' className=' text-xl  hover:text-blue-500'>About</Link></li>
        </ul>

        <div className="sm:flex justify-center items-center hidden" id='toggle_mode'>
          <Image id='toggleModeIcon' src="/dark_mode_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt="dark" className='border rounded-md p-2 border-white cursor-pointer' width={40} height={40} onClick={() => toggleMode()} />
         
        </div>





        <div className="hamberger  block sm:hidden">
          <Image src="/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt="hamberger_icon" width={30} height={30} onClick={showMenu} className='curser-pointer' />
        </div>

      </nav>

      <div id='items_dropdown' className={`sm:hidden absolute mt-4 top-[70px] left-0 w-full bg-black text-white flex flex-col items-center gap-4 z-50 shadow-md transition-all duration-700 ease-in-out ${hamberger ? "max-h-[500px] py-4" : "max-h-0 py-0"}`} >
        {hamberger && (<>
          <ul className="flex flex-col gap-4" id="navbar_items">
            <li><Link href='/' className='text-xl hover:text-blue-400'>Home</Link></li>
            <li><Link href='/' className='text-xl hover:text-blue-400'>About</Link></li>
            <li><Link href='/' className='text-xl hover:text-blue-400'>Contact</Link></li>
          </ul>

          <div className="flex" id="toggle_mode">
            <Image id='toggleModeIcon' src="/dark_mode_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt="dark" className='border rounded-bl-md rounded-tl-md p-2 border-white cursor-pointer' width={40} height={40} onClick={() => toggleMode()} />
           
          </div>
        </>)}
      </div>



    </div>
  )
}

export default Navbar
