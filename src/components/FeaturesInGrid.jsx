import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import {animateWithGsap} from '../utils/animations'
import {explore1Img, explore2Img, exploreVideo} from '../utils'
import ScrollTrigger from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const FeaturesInGrid = () => {
        const Videoref = useRef(); 

    useGSAP(() => {
        animateWithGsap('#exploreVideo', {
            ScrollTrigger: {
                trigger: '#explorerVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                Videoref.current.play();
            }
        })
        animateWithGsap('#features_title', { y:0, opacity:1})
        animateWithGsap(
            '.g_grow', 
            {scale:1, opacity:1, ease: "power1"},
            {scrub:5.5,}
        );
        animateWithGsap(
          '.g_text',
          {y: 0, opacity:1, ease:'power2.inOut', duration:1 }    
        );

    }, [])
  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
    <div className='screen-max-width'>
        <div className='mb-12 w-full'>
            <h1 id='features_title' className='section-heading'>
                Exploring the full story.
            </h1>
        </div>
        
        <div className='flex flex-col justify-center items-center overflow-hidden'>
            <div className='mt-32 mb-24 pl-24'>
                <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium.</h2>
            </div>
        </div>

        <div className='flex-center flex-col sm:px-10'>
            <div className='relative h-[50vh] w-full flex items-center'>
                <video playsInline id='exploreVideo' className='w-full h-full object-center object-cover' preload="none" muted autoPlay ref={Videoref}>
                    <source src={exploreVideo} type='video/mp4' />
                </video>
            </div>

            <div className='flex flex-col w-full relative'>
             <div className='feature-video-container'>
                <div className='overflow-hidden flex-1 h-[50%]'>
                    <img src={explore1Img} alt="titanium1" className='feature-video g_grow' />
                    <img src={explore2Img} alt="titanium2" className='feature-video g_grow' />
                </div>
             </div>

             <div className='feature-text-container'>
                <div className='flex-1 flex-center'>
                    <p className='feature-text g_text'> Look 15 Pro is {' '}
                    <span className='text-white '>the first iPhone to feature an aerospace-grade titanium design </span>
                    using the same alloy that superCraft use for mission to Mars. 
                    </p>                
                </div>

                <div className='flex-1 flex-center'>
                    <p className='feature-text g_text'> Titanium hads one of the best strength to weight ratios of any metals, making these our {' '}
                    <span className='text-white '>Lightest Pro model ever. </span>
                    You will notice the difference the moment you pick one Up.
                    </p>                
                </div>
             </div>
            </div>
        </div>

    </div>
    
    </section>
  )
}

export default FeaturesInGrid