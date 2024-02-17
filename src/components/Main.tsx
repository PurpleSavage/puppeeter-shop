import { IMG_BG_MAIN,IMG_CART } from '../data/data'
import styles from '../cssmodules/styles.module.css'
import { useLocation } from 'react-router-dom'
const Main = () => {
  const {pathname}=useLocation()
  return (
    <main className='flex md:flex-row flex-col  items-center pt-16 py-4'>
        <div className='md:w-1/2 flex  justify-center items-center flex-col gap-2  px-4'>
            <h1 className={` text-4xl md:text-7xl font-medium
              ${styles.title}`}
            >Puppeeter</h1>
            <p className='text-white text-lg md:text-xl '>El Arte de las Papas <span>Esféricas</span></p>
            <p className='text-white text-lg md:text-xl text-center '>¡Descubre el sabor que te hará volver por más, solo en Puppeeter!</p>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
            {pathname==="/"?<img src={IMG_BG_MAIN } alt="image potato crispy" className='w-[500px]'/>:""}
            {pathname==="/cart"?<img src={IMG_CART } alt="image potato crispy" className='w-[500px]'/>:"" }
        </div>
    </main>
  )
}

export default Main