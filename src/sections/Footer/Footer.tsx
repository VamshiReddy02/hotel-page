
const Footer = () => {
  return (
    <section className='h-screen px-3 md:px-4 lg:px-10 bg-black text-white'>
      <div className='py-20'>
          <div className='flex justify-around max-w-xl mt-5'>
            <div className='flex flex-col gap-8 text-[1.3rem] font-Manrope-Light'>
                <div>
                  <p className='text-neutral-700'>mail</p>
                  <h3>info@example.com</h3>
                </div>
                <div>
                  <p className='text-neutral-700'>phone</p>
                  <h3>+91 99999999</h3>
                </div>
                <div>
                  <p className='text-neutral-700'>social</p>
                  <div>Instagram</div>
                  <div>Facebook</div>
                </div>
            </div>
            <div className='flex flex-col gap-2 font-Manrope-Light'>
              <p className='text-neutral-700'>category</p>
              <div className='flex flex-col gap-4'>
                <button className='border border-white rounded-full px-5 py-2 uppercase'>classic</button>
                <button className='border border-white rounded-full px-5 py-2'>mini</button>
              </div>
            </div>
            <div className='font-Manrope-Extra-light text-lg'>
              <h1>experiences</h1>
              <h1>book now</h1>
              <h1>contact</h1>
              <h1>privacy</h1>
              <h1>cookies</h1>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Footer