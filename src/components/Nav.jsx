import React from 'react';
import logo from '../media/logo.png';
import { PiGithubLogoDuotone, PiInstagramLogoDuotone, PiLinkedinLogoDuotone } from 'react-icons/pi';
import { FaXTwitter } from 'react-icons/fa6'

export const Nav = () => {
    return (
        <header className="h-[191px] xsm:h-[170px] m-0 p-0 w-screen flex items-center justify-around flex-row top-0">
            <div className="self-start h-full w-[200px] m-0 p-0 xsm:h-[5%] xsm:hidden sups:hidden xsm:flex sm:flex lg:flex xl:flex">
                <a href="/"><img className="xsm:w-full cursor-pointer hover:-translate-y-2 transition-all duration-700" alt="Voxify Logo" src={ logo } style={{ margin: 0, padding: 0, height: '180px', width: '200px' }} /></a>
            </div>
            <div className="w-[15%] h-full self-end flex items-center justify-around flex-row xsm:w-full xsm:h-full sups:w-full xl:w-[20%]">
                <a href="https://www.instagram.com/its_omar_00/" target="_blank" rel="noreferrer" ><PiInstagramLogoDuotone className="hover:text-pink-700 text-purple-500 transition-all duration-[600ms] hover:-translate-y-1 relative text-5xl xsm:text-3xl xl:text-5xl" /></a>
                <a href="https://twitter.com/its_omar_00" target="_blank" rel="noreferrer" ><FaXTwitter className="hover:text-black text-purple-500 transition-all duration-[600ms] hover:-translate-y-1 relative text-[45px] xsm:text-3xl xl:text-5xl" /></a>
                <a href="https://www.linkedin.com/in/taouilomar/" target="_blank" rel="noreferrer" ><PiLinkedinLogoDuotone  className="hover:text-[#0072B1] text-purple-500 transition-all duration-[600ms] hover:-translate-y-1 relative text-5xl xsm:text-3xl xl:text-5xl" /></a>
                <a href="https://github.com/OmarTl2005" target="_blank" rel="noreferrer" ><PiGithubLogoDuotone className="hover:text-[#3f3e88] text-purple-500 transition-all duration-[600ms] hover:-translate-y-1 relative text-5xl xsm:text-3xl xl:text-5xl" /></a>
            </div>
        </header>
    )
}
