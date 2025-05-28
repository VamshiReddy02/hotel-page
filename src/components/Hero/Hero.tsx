import HeroImg from '../../assets/image/HeroImg.png'

const Hero = () => {
  return (
    <section className='relative 0verflow-x-hidden'>
        <div className='py-20'>
            <div className='flex flex-col justify-center items-center gap-2 text-center text-2xl md:text-4xl lg:text-8xl'>
                <h1 className='font-Manrope-Extra-bold max-w-5xl leading-snug tracking-tighter'>there is no place like</h1>
                <span className="font-Melodrama-Light italic text-[10rem]">home</span>
            </div>
        </div>
        <div className='h-[100vh] w-full'>
            <div>
                <img src={HeroImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero