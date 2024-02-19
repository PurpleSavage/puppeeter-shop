import { MdOutlineFileDownloadDone } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { Link } from "react-router-dom"
import { useModalStore } from "../stores/cart/modal.store";
const Modal = () => {
    const changeState=useModalStore(state=>state.changeState)
    //const modalGoToCart=useModalStore(state=>state.modalGoToCart)
    const handleClick =()=>{
        document.body.style.overflow = 'auto'
        changeState()
    }
  return (
    <div className="fixed bottom-0 right-0 left-0 top-0 flex items-center justify-center bg-slate-200/70 z-50">
        <section className="w-full md:w-1/3 shadow-2xl bg-slate-200 rounded-lg p-4 space-y-2">
            <div className="flex justify-between ">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                    <span className="text-green-600 "><MdOutlineFileDownloadDone size={20} /></span>
                    Producto agregado
                </h3>
                <button onClick={handleClick}>
                    <IoIosCloseCircleOutline size={25}/>
                </button>
            </div>
            <p className="mt-4">Se agregó un producto al carrito!</p>
            <div className="0 flex justify-between py-2" >
                <Link 
                    to='cart' 
                    onClick={handleClick}
                    className="bg-[#8a0645] hover:bg-[#8a0653] rounded-md 
                    text-white items-center px-2 h-[30px] text-md flex ">
                    Ir al carrito
                </Link>
                
            </div>
        </section>
    </div>
  )
}

export default Modal