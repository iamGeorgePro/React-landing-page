import React from 'react'
import Roadmap1 from '../../../assets/Roadmap/Group 110.png'
import Roadmap2 from '../../../assets/Roadmap/Group 25.png'
import Roadmap3 from '../../../assets/Roadmap/Group 31 (1).png'

function Roadmap() {
  return (
    <section>
        <div className='container mb-20'>
            <p className='text-center relative left-0  lg:left-[160px] bg-[#EBB40A] py-[11.5px] px-[35px] font-bold rounded-[31px] w-[260px] h-[46px] text-[20px] mb-12'>Roadmap</p>

            <div className='block w-full gap-[40px] md:flex  md:gap-[15px] md:w-full  justify-center items-center'>
                <div>
                    <img className='w-full' src={Roadmap1}  alt=''/>
                </div>
                <div>
                    <img className='w-full' src={Roadmap3}  alt=''/>
                </div>
                <div>
                    <img className='w-full'  src={Roadmap2}  alt=''/>
                </div>
                </div>
        </div>
    </section>
  )
}

export default Roadmap