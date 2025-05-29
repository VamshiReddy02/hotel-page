
const Intro = () => {
  return (
    <section className="px-3 md:px-4 lg:px-10">
        <div className="py-20">
            <div className="flex justify-center md:justify-start items-center">
                <h1 className="font-Melodrama-Semibold text-8xl md:text-9xl lg:text-[15rem]">deco.</h1>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-4 font-Manrope-Extra-light gap-30">
            <div className="flex flex-col text-[1.5rem] gap-6">
                <p>Two separate apartments, designed with an emphasis on comfort, style and functionality, offer you a unique accommodation experience.</p>
                <p>Whether you prefer the spaciousness of Classic, with its two bedrooms and comfortable balcony overlooking a main street, or the more compact luxury of Mini, featuring a large private terrace with stunning sea views, both options guarantee an unforgettable stay.</p>
            </div>
            <div className="flex flex-col text-[1.5rem]">
                <p>With modern decor, earthy tones and all the amenities you need, our apartments are ideal for families, couples or business travelers. Relax, enjoy your space and discover the city at your own pace.</p>
                <div className="flex gap-6 mt-25">
                    <a href="#" className="uppercase font-Melodrama-Semibold">classic</a>
                    <a href="#" className="font-Melodrama-Semibold">mini</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Intro