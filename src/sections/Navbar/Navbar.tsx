
const Navbar = () => {
  return (
    <section className='py-6.5'>
        <div className='px-3 md:px-4 lg:px-10'>
            <div className='flex justify-between items-center'>
                <div className='font-Manrope-Bold text-2xl md:text-4xl lg:text-[2.5rem]'>coastX</div>
                <div className="mt-1">
                    <svg width="80" height="35" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                        <rect y="8" width="60" height="1" fill="#1a1a1a"/>
                        <rect y="18" width="60" height="1" fill="#1a1a1a"/>
                        <rect y="28" width="60" height="1" fill="#1a1a1a"/>
                    </svg>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Navbar