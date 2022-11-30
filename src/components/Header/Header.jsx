import React from 'react'
import logo from '../../assets/logo/logo.png'
import img1 from '../../assets/img/discord-fill (1).png'
import img2 from '../../assets/img/telegram-fill (1).png'
import img3 from '../../assets/img/twitter-fill (1).png'

function Header() {
  return (
    <>
    <section className='bg-[#FFFFFF9C] h-[82px]'>

    <div className='container '>
        <div className='flex justify-between items-center'>
            <div>
                <img src={logo} alt='' />
            </div>
            <div className='flex gap-[22px] cursor-pointer'>
          
            <img src={img3}  alt=''/>
            <img src={img1}  alt=''/>
            <img src={img2}  alt=''/>
            </div>
        </div>

    </div>
    </section>
    </>
  )
}

export default Header