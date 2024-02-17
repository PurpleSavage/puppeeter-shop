
import { IMG_LOGO } from '../data/data';
import styles from '../cssmodules/styles.module.css'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import Badge from '@mui/material/Badge';
import { useCartStore } from '../stores/cart/cart.store';
const Navbar = () => {
  const listCart=useCartStore(state=>state.listCart)
  return (
    <div className='py-4 shadow-xl flex fixed z-40 bottom-o left-0 right-0' style={{ backdropFilter: 'blur(8px)' }}>
        <div className='flex items-center grow md:px-16 px-4 gap-2'>
            <img src={IMG_LOGO} alt="triangle neon, logo puppeeter"  className='h-[30px]'/>
            <p className={`${styles.title} text-lg font-bold`}>PUPPETER</p>
        </div>
        <nav className='md:px-16 px-4'>
            <ul className="flex gap-4 items-center">
                <li><Link to='/' className='text-white hover:text-[#8a0645] font-medium '>Inicio</Link></li>
                <li>
                  <Link to='cart' className='text-white hover:text-[#8a0645] font-medium '>
                    <Badge badgeContent={listCart.length} color="success" >
                      <TiShoppingCart size={20}/>
                    </Badge>
                  </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar