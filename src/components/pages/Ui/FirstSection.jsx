import React,{useRef} from 'react'
import emailjs from "@emailjs/browser";
import {useSnackbar } from 'notistack';


   
  

function FirstSection() {
    const { enqueueSnackbar } = useSnackbar();
    
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_zjx98s9",
          "template_ttpi23x",
          form.current,
          "Oe4tKXp0X6aWxIZDS"
        )
        .then(
          (result) => {
            enqueueSnackbar("Email sent successfully", {variant : "success"})
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            enqueueSnackbar("Error sending email please try again", {variant : "error"})
          }

          
        );

        e.target.reset()

        if(e.target.input === ''){
            enqueueSnackbar("Error sending email please try again", {variant : "error"})
        }
    }
  return (
   <section className='container mt-[132px] mb-[150px]'>
    <div className='text-center mx-auto  lg:w-[913.45px]'>
        <p className='first_text font-extrabold text-[40px]  md:text-[61.91px] leading-[71.19px] tracking-[1.22px]'>Powering the future of hacking and enterprise solutions in Africa (Web3)</p>
    </div>
    <p className='font-normal text-center text-[20px] leading-[28.5px] mt-[100px] mb-[16px]'>Sign up for early access</p>

    <form ref={form} onSubmit={sendEmail} className='text-center'>
    <input className='bg-[#9CB9CE] shadow-shadows px-[25px] placeholder:text-black text-[20px] text-black font-normal rounded-[44px] w-[300px]  md:w-[500px]  lg:w-[684px] h-[64px] outline-none border-none' name="user_email" placeholder='Email Address' />
     <button value='send' type='Submit'><i class="ri-arrow-right-line"></i></button>
    </form>
    <p className='text-center text-sm font-medium mt-[16px]'>We respect your data and will not share it.</p>
    <div className='mt-[100px] container'>
        <div className='block md:flex  gap-10 lg:gap-20 items-center justify-center mb-10'>
            <div className='bg-[#D4DFE7] shadow-shadows h-full w-full md:w-[340px] md:h-[375.5px] lg:h-[383.51px] lg:w-[353px] text-center pb-10 rounded-[11px]'>
                <p className='md:mt-[52px] md:mx-[33px] mb-[50px] md:mb-[15px] text-[17px]  lg:text-[20px] mx-auto md:py-2 w-[300px] h-[100px] md:w-[286px] md:h-[145px] py-4'>Hackathons are the best places to learn, team up, 
                    and build. Participate in a hackathon,
                     or create your own hackathon </p>
                     <a rel="noreferrer" href='https://iuscdh2aeyh.typeform.com/to/C4kEXtfx' target='_blank' >
                     <button className='btn py-[15px] shadow-btnShadows px-[31px] text-[#065289] rounded-[10px] mt-[59px]'>Join the wait list</button></a>
            </div>
            <div className='bg-[#EBB40A26] shadow-shadows rounded-[11px]  h-full w-full md:w-[340px] md:h-[375.5px] lg:h-[383.51px] lg:w-[353px] text-center pb-10 md:mt-0 mt-10'>
                <p className='md:mt-[52px] md:mx-[33px] mb-[50px] md:mb-[15px] text-[20px] mx-auto w-[300px] h-[100px] md:w-[286px] md:h-[145px] py-4'>Looking to 
                create groundbreaking solutions for your newest challenge then Collaborate
                 with the next generation of thinkers on Kwabees</p>
                 <a rel="noreferrer" href='https://iuscdh2aeyh.typeform.com/to/C4kEXtfx' target='_blank' >
                     <button className='btn py-[15px] shadow-btnShadows px-[31px]  text-[#065289] rounded-[10px] mt-[65px]'>Join the wait list</button></a> 

            </div>

        </div>
   

    </div>
   </section>
  )
}

export default FirstSection


