import { product } from "../interfaces/interfaces"
import style from '../cssmodules/styles.module.css'
import { IoIosAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { useCartStore } from "../stores/cart/cart.store";
import { FaDeleteLeft } from "react-icons/fa6";


const CardsCart:React.FC<{element:product}> = ({element}) => {
    const {tagProduct,nameProduct,description,urlImg,titleColor,quantity}=element
    const listCart=useCartStore(state=>state.listCart)
    const  increaseElementCart=useCartStore(state=>state. increaseElementCart)
    const removeToCart=useCartStore(state=>state.removeToCart)
    const handleClickRemove=()=>{
        removeToCart(element.id)
    }
    const handleClick =(quantity:number, element:product)=>{
        const productSearch=listCart.find(producto=>producto.id===element.id)
        if(!productSearch) return
        if(productSearch.quantity===1 && quantity===-1) return
        increaseElementCart(quantity,element)
    }   
  return (
    <div className={`w-[340px] h-[340px] ${urlImg} rounded-lg relative 
    bg-cover bg-center`}>
        <div className={`absolute bottom-0 right-0 left-0 top-0 
            flex flex-col items-center justify-end gap-2 ${style.overload} py-3`}>
            <h3 className="text-xl font-bold text-white ">
            {tagProduct}{" "}<span className={`${titleColor}`}>{nameProduct}</span>
            </h3>
            <p className='text-md text-center text-white px-3 '>
                ¡Sabor explosivo! <br/>{description}
            </p>
            <div className="flex items-center gap-4 pb-4">
                <button 
                    className="bg-[#8a0645] px-4 py-1 rounded-md text-white"
                    onClick={()=>handleClick(-1,element)}
                ><AiOutlineMinus /></button>
                <div className="text-white ">{quantity}</div>
                <button 
                    className="bg-[#8a0645] px-4 py-1 rounded-md text-white"
                    onClick={()=>handleClick(+1,element)}
                ><IoIosAdd /></button>
            </div>
            <div className="flex justify-end w-full pr-4">
                <button 
                    className="flex items-center text-white text-[12px] gap-1 py-1 px-2 
                rounded-md bg-[#8a0645] hover:bg-[#8a0653]"
                    onClick={handleClickRemove}
                ><FaDeleteLeft />Quitar</button>
            </div>
        </div>
    </div>
  )
}

export default CardsCart