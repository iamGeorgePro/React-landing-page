import React from 'react'
import logo from '../../../assets/logo/logo.png'
import follow from '../../../assets/img/Group 117.png'
import img1 from '../../../assets/img/discord-fill (1).png'
import img2 from '../../../assets/img/telegram-fill (1).png'
import img3 from '../../../assets/img/twitter-fill (1).png'

function Footer() {
  return (
   <section>
    <div className='bg-[#826E0038] h-[200px]'>
        <div className='flex  justify-between items-center'>
            <div className=' mt-5 lg:mt-12'>
                <img className=' ml-auto lg:ml-[140px]' src={logo}  alt=''/>
            </div>
            <div className='grid grid-flow-row'>
                <div className='fol'>
                <img className='lg:mt-auto mb-5' src={follow}  alt=''/>
                </div>
                <div className='flex gap-[20px] mr-auto lg:mr-[180px]'>
                <div className='social'>
                <a target='_blank'  rel="noreferrer" href='https://twitter.com/Kwabeeshub'>
                <img className='lg:mt-auto' src={img3}  alt=''/>
                </a>
                </div>
                <div className='social'>
                <a  rel="noreferrer" target='_blank' href='https://discord.gg/EYBtvT9HTB'>
                <img className='lg:mt-auto' src={img1}  alt=''/>
                </a>
                </div>
                <div className='social'>
                <a target='_blank' rel="noreferrer"  href='https://t.me/Kwabeeshub'>
                <img className='lg:mt-auto' src={img2}  alt=''/>
                </a>
                </div>
                </div>
               
                
            </div>
            
        </div>
    </div>
   </section>
  )
}

export default Footer