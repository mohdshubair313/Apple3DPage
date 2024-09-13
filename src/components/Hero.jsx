import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {heroVideo, smallHeroVideo} from '../utils'


const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handlevideosrcset = () => {
    if(window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo)
    }
    else {
      setvideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize' ,handlevideosrcset)
    return () => {
      window.removeEventListener('resize', handlevideosrcset)
    }
  })

  useGSAP(() => {
     gsap.to('#hero' , {opacity:1, delay:1.9})
     gsap.to('#cta', {opacity:1, y:-50, delay: 1.9})
  },[])
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
      <p id='hero' className='hero-title'>Iphone 15 pro</p>
      <div className='md:w-10/12 w-9/12'>
      <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
        <source src={videoSrc} type='video/mp4'/>
      </video>
      </div>
      </div>

      <div id='cta'className='flex flex-cols justify-center items-center opacity-0 translate-y-20' >
      <a href="#higlights" className='btn'>Buy</a>
      <p className='font-normal text-xl flex'>From 70,000</p>
      <p className='text-xl flex ml-4'>- 130,000 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clipRule="evenodd" /></svg> </p>
      </div>
    </section>
  )
}

export default Hero