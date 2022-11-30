import React from 'react'

function FirstSection() {
  return (
   <section className='container mt-[132px]'>
    <div className='text-center mx-auto  lg:w-[913.45px]'>
        <p className=' font-bold text-[61.91px] leading-[71.19px] tracking-[1.22px]'>Powering the future of hacking and enterprise solutions in Africa (Web3)</p>
    </div>
    <p className='font-normal text-center text-[20px] leading-[28.5px] mt-[100px] mb-[16px]'>Sign up for early access</p>
    <div>
    <div className='text-center'>
        <input className='bg-[#9CB9CE] px-[25px] placeholder:text-black text-[20px] text-black font-normal rounded-[44px] w-full  lg:w-[684px] h-[64px] outline-none border-none' type='text' placeholder='Email Address' />
    </div>
    <div className='text-center absolute  lg:left-[600px] lg:bottom-0  lg:right-0 cursor-pointer'>
    <i class="ri-arrow-right-line"></i>
    </div>
    </div>
    <p className='text-center text-sm font-medium mt-[16px]'>We respect your data and will not share it.</p>
   

   </section>
  )
}

export default FirstSection