import { useRef } from 'react'
import HeroImg from '../../assets/image/HeroImg.png'
import { useScroll, useTransform, motion } from 'framer-motion'

const Hero = () => {
     const clipRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: clipRef,
    offset: ['start end', 'center center'],
  })

  const width = useTransform(scrollYProgress, [0, 1], ['5vw', '100vw'])
  const height = useTransform(scrollYProgress, [0, 1], ['85vh', '100vh'])
  const borderTopRadius = useTransform(scrollYProgress, [0, 1], ['65% 50% 0 0', '0%'])

  return (
    <section className='relative overflow-x-hidden'>
        <div className='mt-20'>
            <div className='flex flex-col justify-center items-center gap-2 text-center text-2xl md:text-4xl lg:text-8xl'>
                <h1 className='font-Manrope-Extra-bold max-w-5xl leading-snug tracking-tighter'>there is no place like</h1>
                <span className="font-Melodrama-Light italic text-[10rem]">home</span>
            </div>
        </div>
        <div className="h-[100vh] w-full" ref={clipRef}>
        <motion.div
          style={{
            width,
            height,
            position: 'sticky',
            top: 0,
            left: 0,
            right: 0,
            margin: '0 auto',
            overflow: 'hidden',
            borderTopLeftRadius: borderTopRadius,
            borderTopRightRadius: borderTopRadius,
          }}
        >
          <img
            src={HeroImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero