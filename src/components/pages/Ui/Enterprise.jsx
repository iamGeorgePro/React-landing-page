import React from 'react'
import img1 from '../../../assets/img/Blue.png'
import img2 from '../../../assets/img/Group 109.png'
import bar from '../../../assets/img/Rectangle 6.png'
import bar2 from '../../../assets/img/Rectangle 6 (1).png'

function Enterprise() {
  return (
    <section className='bg-[#D7D9C6E0] mt-52'>
        <div>
            <img className='relative -top-[70px] left-0' src={img1} alt='' />
        </div>
        <div className='block lg:flex items-center justify-between'>
            <div>
            <img className=' relative top-28 hidden lg:flex' src={img2} alt='' />
            </div>
            <div className=''>
            <div className='my-10 dev_content container'>
      <p className= 'text-center bg-[#EBB40A] py-[11.5px] px-[35px] rounded-[31px] w-[260px] h-[46px] text-[20px] font-bold'>For Enterprises </p>
      <div className='flex mt-[52px] gap-[14px]'>
        <div><img src={bar}  alt=''/></div>
        <div className='dev_content'>
          <p className='text-[18px] md:text-[24px] leading-[30.72px] tracking-[2px] w-[350px] h-[30px] md:w-[569px]  md:h-[62px]'>Crowdsource or seek business ideas or solutions</p>
        </div>
      </div>
      <div className='flex mt-[52px] gap-[14px]'>
        <div><img src={bar2}  alt=''/></div>
        <div>
          <p className='text-[18px] md:text-[24px] leading-[30.72px] tracking-[2px] w-[350px] h-[30px] md:w-[569px]  md:h-[62px]'>Collaborate with startups to launch new product or service</p>
        </div>
      </div>
      <div className='flex mt-[52px] gap-[14px]'>
        <div><img src={bar}  alt=''/></div>
        <div className='dev_content'>
          <p className='text-[18px] md:text-[24px] leading-[30.72px] tracking-[2px] w-[350px] h-[30px] md:w-[569px]  md:h-[62px]'>Identify great and the right talents for recruiting purpose</p>
        </div>
      </div>
      <div className='flex mt-[52px] gap-[14px] pb-14'>
        <div><img src={bar2}  alt=''/></div>
        <div className='dev_content'>
          <p className='text-[18px] md:text-[24px] leading-[30.72px] tracking-[2px] w-[350px] h-[30px] md:w-[569px]  md:h-[62px]'>Reach out and engage with developer community to enhance branding</p>
        </div>
      </div>
    </div>
            </div>
        </div>
    </section>
  )
}

export default Enterprise