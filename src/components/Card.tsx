
import { product } from "../interfaces/interfaces"
import { TiShoppingCart } from "react-icons/ti";
import { MdRemoveShoppingCart } from "react-icons/md";
import style from '../cssmodules/styles.module.css'
import { useCartStore } from "../stores/cart/cart.store";
import { useModalStore } from "../stores/cart/modal.store";

const Card: React.FC<{ element: product }> = ({ element }) => {

  // Destructura las propiedades necesarias de element
  const { id, tagProduct, nameProduct, description, urlImg, gridClasses, titleColor,price} = element;

 
  // Hooks para interactuar con el estado global
  const addToCart = useCartStore(state => state.addToCart);
  const listCart = useCartStore(state => state.listCart);
  const statusProduct=useCartStore(state=>state.statusProduct)
  const changeState=useModalStore(state=>state.changeState)
 



  const handleClick = () => {
    const isProductInCart = listCart.some(product => product.id === id);
    if (!isProductInCart) {
      addToCart(element);
      changeState() 
      document.body.style.overflow = 'hidden'
    }
  };

  return (
    <div className={`${gridClasses} ${urlImg} bg-cover bg-center relative rounded-lg shadow-2xl h-[300px] md:h-auto  `}>
      <div className={`absolute bottom-0 right-0 left-0 top-0 flex items-center justify-end py-4 ${style.overload} rounded-lg flex-col gap-2`}>
        <h3 className="text-xl font-bold text-white ">
          {tagProduct}{" "}<span className={`${titleColor}`}>{nameProduct}</span>
        </h3>
        <p className='text-md text-center text-white px-3'>
          ¡Sabor explosivo! <br />{description}
        </p>
        <p className="text-md text-center text-white px-3">Precio: s/{price}</p>
        <div className='flex justify-end'>
          <button 
            className={`${statusProduct(id) ? "bg-gray-400" : "bg-[#8a0645] hover:bg-[#8a0653]"} px-4 text-white py-1 rounded-sm `}
            onClick={handleClick}
          >
            {statusProduct(id)? <MdRemoveShoppingCart size={20} /> : <TiShoppingCart size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
