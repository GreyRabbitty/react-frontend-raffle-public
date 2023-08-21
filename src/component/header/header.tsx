import React from 'react'
import { AiOutlineTwitter,  } from 'react-icons/ai'
import { BiLogoTelegram, BiLogoDiscordAlt } from 'react-icons/bi'

const Header = () => {
  return (
    <div className='grid grid-cols-3 justify-items-center align-middle header-bg border border-gray-400 w-full rounded-full py-[18px] pl-[32px] pr-[18px] '>
        <ul className="flex gap-[32px] text-white my-auto">
          <li className=''>DeFi</li>
          <li className=''>Colourize</li>
          <li className=''>Arm Protocol</li>
          <li className=''>Winners</li>
        </ul>
        <div className='flex'>
          <img src='./header.png' alt='header png' className='w-[44px] h-[48px]'></img>
          <img src='./headerTitle.png' alt='headerTitle png' className='w-[158px] h-[43px]'></img>
        </div>
        <div className='flex '>
          <div className='w-[46px] p-[11px]'>
            <AiOutlineTwitter size={'24px'} color='#E5E1A8' />
          </div>
          <div className='w-[46px] p-[11px]'>
            <BiLogoTelegram size={'24px'} color='#E5E1A8' />
          </div>
          <div className='w-[46px] p-[11px]'>
            <BiLogoDiscordAlt size={'24px'} color='#E5E1A8' />
          </div>
          <div className='w-[184px] h-[50px] py-[10px] px-[32px] justify-center align-middle rounded-full header-border-style text-white'>
            Connect Wallet
          </div>
        </div>
    </div>
  )
}

export default Header;
