import React from 'react'

function FirstSection() {
  return (
   <section className='container mt-[132px] mb-[150px]'>
    <div className='text-center mx-auto  lg:w-[913.45px]'>
        <p className=' font-bold text-[40px]  md:text-[61.91px] leading-[71.19px] tracking-[1.22px]'>Powering the future of hacking and enterprise solutions in Africa (Web3)</p>
    </div>
    <p className='font-normal text-center text-[20px] leading-[28.5px] mt-[100px] mb-[16px]'>Sign up for early access</p>

    <form className='text-center'>
    <input className='bg-[#9CB9CE] px-[25px] placeholder:text-black text-[20px] text-black font-normal rounded-[44px] w-[300px]  md:w-[500px]  lg:w-[684px] h-[64px] outline-none border-none' type='email' placeholder='Email Address' />
    <i class="ri-arrow-right-line"></i>
    </form>
    <p className='text-center text-sm font-medium mt-[16px]'>We respect your data and will not share it.</p>
    <div className='mt-[100px]'>
        <div className='block md:flex gap-20 items-center justify-center mb-10'>
            <div className='bg-white h-full w-full md:h-[383.51px] md:w-[353px] text-center pb-10 rounded-[11px]'>
                <p className='md:mt-[52px] md:mx-[33px] mb-[50px] md:mb-[15px] text-[20px] mx-auto md:py-2 w-[300px] h-[100px] md:w-[286px] md:h-[145px] py-4'>Hackathons are the best places to learn, team up, 
                    and build. Participate in a hackathon,
                     or create your own hackathon </p>
                     <button className='btn py-[15px] px-[31px] text-[#065289] rounded-[10px] mt-[59px]'>Join the wait list</button>
            </div>
            <div className='bg-[#EBB40A26] rounded-[11px] h-full w-full md:h-[383.51px] md:w-[353px] text-center pb-10 md:mt-0 mt-10'>
                <p className='md:mt-[52px] md:mx-[33px] mb-[50px] md:mb-[15px] text-[20px] mx-auto w-[300px] h-[100px] md:w-[286px] md:h-[145px] py-4'>Looking to 
                create groundbreaking solutions for your newest challenge then Collaborate
                 with the next generation of thinkers on Kwabees</p>
                     <button className='btn py-[15px] px-[31px]  text-[#065289] rounded-[10px] mt-[65px]'>Join the wait list</button>

            </div>

        </div>
   

    </div>
   </section>
  )
}

export default FirstSection


// EBB40A26