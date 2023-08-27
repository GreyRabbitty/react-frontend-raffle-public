import React from 'react'
import Auctions2 from '../../common/auctions2';

const WinPart = () => {
  return (
    <div className='flex flex-col gap-[24px] pb-[32px] text-left border-b-[#292C31] border-b-[1px]'>
        <p className='text-[24px] font-extrabold capitalize leading-[32px] text-white'>Wins</p>
        <div className='grid grid-cols-3 gap-[24px]'>
            <Auctions2 imgSrc='./avatar/ (2).png' />
            <Auctions2 imgSrc='./avatar/ (3).png' />
            <Auctions2 imgSrc='./avatar/ (1).png' />
        </div>
    </div>
  )
}

export default WinPart;
