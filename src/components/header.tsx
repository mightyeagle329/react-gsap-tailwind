import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from "react-svg"
import logoImg from '../assets/logo.png';
import logoTextImg from '../assets/logo-text.png';
import menuSVG from '../assets/menu.svg';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='relative'>
            <div className="flex relative px-8 md:px-16 py-8 z-[111]">
                <div className="flex justify-center items-center">
                    <img src={logoImg} className='w-12 md:w-20' />
                    <img src={logoTextImg} className='h-4 md:h-12 mx-4' />
                </div>
                <div className='hidden ml-auto justify-center items-center md:flex'>
                    <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>Our Program</Link>
                    <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>For Employers</Link>
                    <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>WP</Link>
                    <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>Whiter Papers</Link>
                    <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>About</Link>
                    <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>Careers</Link>
                </div>
                <div className='flex ml-auto justify-center items-center md:hidden' onClick={() => setOpenMenu(!openMenu)}>
                    <ReactSVG src={menuSVG} />
                </div>
            </div>
            <div className={`absolute w-[90%] flex flex-col z-[9999] rounded-lg py-8 mx-[5%] justify-center items-center transition-all duration-500 bg-[#011C1B] ${openMenu ? 'scale-y-100' : 'scale-y-0'}`}>
                <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>Our Program</Link>
                <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>For Employers</Link>
                <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>WP</Link>
                <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>Whiter Papers</Link>
                <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>About</Link>
                <Link to={'program'} className='mx-4 text-[1.2rem] text-white'>Careers</Link>
            </div>
        </div>
    )
}

export default Header