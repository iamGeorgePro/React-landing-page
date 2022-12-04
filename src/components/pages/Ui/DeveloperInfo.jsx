import React from 'react'
import img1 from '../../../assets/img/Yellow.png'
import bar from '../../../assets/img/Rectangle 6.png'
import bar2 from '../../../assets/img/Rectangle 6 (1).png'
import img2 from '../../../assets/img/d-img.png'
 
function DeveloperInfo() {
  return (
   <section className='mt-[150px] overflow-x-hidden'>
    <div className='img1'>
        <img src={img1}  alt='bar'/>
    </div>
    <div className='container block  md:flex items-center justify-between'>
    <div className='my-10 '>
      <p className= 'text-center bg-[#EBB40A] py-[11.5px] px-[35px] rounded-[31px] w-[260px] h-[46px] text-[20px] font-bold'>For developers</p>
      <div className='flex mt-[52px] gap-[14px]'>
        <div><img src={bar}  alt=''/></div>
        <div>
          <p className='text-[24px] leading-[30.72px] tracking-[2px] w-[350px] h-[30px] md:w-[569px]  md:h-[62px]'>Obtain and practice tech skills by solving real-world problems.</p>
        </div>
      </div>
      <div className='flex mt-[52px] gap-[14px]'>
        <div><img src={bar2}  alt=''/></div>
        <div>
          <p className='text-[24px] leading-[30.72px] tracking-[2px] w-[350px] h-[30px] md:w-[569px]  md:h-[62px]'>Share expertise, experience and ideas with others..</p>
        </div>
      </div>
      <div className='flex mt-[52px] gap-[14px]'>
        <div><img src={bar}  alt=''/></div>
        <div>
          <p className='text-[24px] leading-[30.72px] tracking-[2px] w-[350px] h-[30px] md:w-[569px]  md:h-[62px]'>Learn how to collaborate with teammates under pressure.</p>
        </div>
      </div>
      <div className='flex mt-[52px] gap-[14px]'>
        <div><img src={bar2}  alt=''/></div>
        <div>
          <p className='text-[24px] leading-[30.72px] tracking-[2px] w-[350px] h-[30px] md:w-[569px]  md:h-[62px]'>Potentially get job offers from top-tier enterprises.</p>
        </div>
      </div>
      <div className='flex mt-[52px] gap-[14px]'>
        <div><img src={bar}  alt=''/></div>
        <div>
        <p className='text-[24px] leading-[30.72px] tracking-[2px] w-[350px] h-[30px] md:w-[569px]  md:h-[62px]'>Get continous funding or grant for your project/idea.</p>
        </div>
      </div>
    </div>
    <div className=''>
      <img className='mt-32' src={img2}  alt=''/>
    </div>
    </div>
   </section>
  )
}

export default DeveloperInfo
