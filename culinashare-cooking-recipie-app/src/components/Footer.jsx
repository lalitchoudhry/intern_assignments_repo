import React from 'react';

// ICONS IMPORTS
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';
import facebook from '../assets/icons/facebook.png';

function Footer() {
  return (
    <footer className='flex flex-col '>
        <h1 className='text-3xl font-bold cursor-pointer my-5 px-20'>CulinaShare</h1>
        <div className='flex justify-between items-center px-20 py-5'>
            <div>
                <h3 className='font-semibold text-lg'>Follow Us</h3>
                <ul className='child:text-grey child:cursor-pointer child:text-sm child:my-4'>
                    <li className='hover:underline flex'>
                        <img className='w-5 mr-1' src={twitter} alt="icon" />
                        Twitter
                    </li>
                    <li className='hover:underline flex'>
                        <img className='w-5 mr-1' src={facebook} alt="icon" />
                        Facebook
                    </li>
                    <li className='hover:underline flex'>
                        <img className='w-5 mr-1' src={instagram} alt="icon" />
                        Instagram
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold text-lg'>Subscribe Us</h3>
            </div>
        </div>
        <div className='p-5 bg-black text-white text-center text-sm font-bold w-full'>@lalitchoudhary.in</div>
    </footer>
  )
}

export default Footer;