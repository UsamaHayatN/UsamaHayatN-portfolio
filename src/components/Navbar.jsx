import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-15 h-9 object-contain" />
          <p className="text-white text-[16px] font-bold cursor-pointer">Usama Hayat</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 justify-center flex-1">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>
        <div className="hidden sm:flex gap-4">
          <a href='https://github.com/UsamaHayatN' className="text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"><AiFillGithub size="2rem" /></a>
          <a href='https://www.linkedin.com/in/usamahayatn/' className="text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"><AiFillLinkedin size="2rem" /></a>
          <a href='https://www.instagram.com/usamahayatn/' className="text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"><AiFillInstagram size="2rem" /></a>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}> {link.title} </a>
                </li>
              ))}
              <div className="flex gap-4 mt-4">
                <a
                  href='https://github.com/UsamaHayatN'
                  className="text-white p-2 rounded-full 
                  hover:bg-gray-700 transition duration-300"
                >
                  <AiFillGithub size="2rem" /></a>
                <a
                  href='https://www.linkedin.com/in/usamahayatn/'
                  className="text-white p-2 rounded-full 
                  hover:bg-gray-700 transition duration-300"
                >
                  <AiFillLinkedin size="2rem" /></a>
                <a
                  href='https://www.instagram.com/usamahayatn/'
                  className="text-white p-2 rounded-full 
                  hover:bg-gray-700 transition duration-300"
                >
                  <AiFillInstagram size="2rem" /></a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
