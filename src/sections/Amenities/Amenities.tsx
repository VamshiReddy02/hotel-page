import { Wifi, Snowflake, Thermometer, Utensils, Tv, Building2, Waves, WashingMachine } from "lucide-react"

export const amenities = [
  { id: 1, name: "Internet access", icon: <Wifi size={36} /> },
  { id: 2, name: "Air conditioning", icon: <Snowflake size={36} /> },
  { id: 3, name: "Heating", icon: <Thermometer size={36} /> },
  { id: 4, name: "Kitchen", icon: <Utensils size={36} /> },
  { id: 5, name: "Flat TV", icon: <Tv size={36} /> },
  { id: 6, name: "Balcony", icon: <Building2 size={36} /> },
  { id: 7, name: "Beach access", icon: <Waves size={36} /> },
  { id: 8, name: "Washing machine", icon: <WashingMachine size={36} /> },
]

const cols = 4

const Amenities = () => {
    
  return (
    <section className='px-3 md:px-4 lg:px-10'>
        <div className='py-20'>
            <div className='flex flex-col items-center'>
                <h1 className='font-Melodrama-Bold text-2xl md:text-4xl lg:text-[15rem]'>amenities.</h1>
                <p className='font-Manrope-Extra-light text-2xl text-center max-w-xl'>Each apartment offers a unique accommodation experience</p>
            </div>
            <div className="mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {amenities.map((item, index) => {
                        const isLastCol = (index + 1) % cols === 0
                        const isLastRow = index >= amenities.length - cols

                        return (
                            <div
                            key={item.id}
                            className={`flex flex-col items-center justify-center gap-3 py-30 px-20 text-black
                                ${!isLastCol ? "border-r border-black border-opacity-30" : ""}
                                ${!isLastRow ? "border-b border-black border-opacity-30" : ""}
                            `}
                            >
                            <div>{item.icon}</div>
                            <p className="text-sm font-medium text-center">{item.name}</p>
                            </div>
                        )
                        })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Amenities