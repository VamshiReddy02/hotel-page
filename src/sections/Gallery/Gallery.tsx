import { useState } from 'react'
import classic1 from '../../assets/image/classic_1.jpg'
import classic2 from '../../assets/image/classic_2.jpg'
import classic3 from '../../assets/image/classic_3.jpg'
import classic4 from '../../assets/image/classic_4.jpg'
import classic5 from '../../assets/image/classic_5.jpg'
import classic6 from '../../assets/image/classic_6.png'
import mini1 from '../../assets/image/mini_1.png'
import mini2 from '../../assets/image/mini_2.png'
import mini3 from '../../assets/image/mini_3.png'
import mini4 from '../../assets/image/mini_4.png'
import mini5 from '../../assets/image/mini_5.png'
import mini6 from '../../assets/image/mini_6.png'



export const classicImages = [
  { id: 1, src: classic1},
  { id: 2, src: classic2},
  { id: 3, src: classic3},
  { id: 4, src: classic4},
  { id: 5, src: classic5},
  { id: 6, src: classic6},
]

export const miniImages = [
  { id: 1, src: mini1},
  { id: 2, src: mini2},
  { id: 3, src: mini3},
  { id: 4, src: mini4},
  { id: 5, src: mini5},
  { id: 6, src: mini6},
]


const Gallery = () => {
    const [selected, setSelected] = useState("classic")
    const images = selected === "classic" ? classicImages : miniImages

  return (
    <section className="px-3 md:px-4 lg:px-10">
        <div className="py-20">
            <div className="flex justify-end mt-14 ml-2">
                <h1 className="font-Melodrama-Bold text-2xl md:text-4xl lg:text-[15rem]">gallery.</h1>
            </div>
            <div>
                <div className="flex items-center gap-8 font-Melodrama-Bold text-2xl md:text-4xl lg:text-5xl">
                    <button onClick={() => setSelected("classic")} className={`underline-offset-4 ${selected === "classic" ? "underline" : ""}`}>classic</button>
                    <button onClick={() => setSelected("mini")} className={`underline-offset-4 ${selected === "mini" ? "underline" : ""}`}>mini</button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14'>
                    {images.map((img) => (
                        <div key={img.id} className='rounded-xl overflow-hidden bg-white'>
                            <img src={img.src} alt='' className='w-full h-full object-cover' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery