import React from 'react'
import ProfileDetail from './profileDetails';
import MyRaffle from './myRaffle';


const ProfilePage = () => {
  return (
    <div className='flex flex-row py-[50px] px-[130px] gap-[50px]'>
        <ProfileDetail />
        <MyRaffle />
    </div>
  )
}

export default ProfilePage;
