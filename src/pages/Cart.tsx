import { useCartStore } from "../stores/cart/cart.store"
import CardsCart from "../components/CardsCart"
import { useEffect, useState } from "react"
const Cart = () => {
  const [totalAmount,setTotalAmount]=useState(0)
  const [products,setProducts]=useState(0)


  const listCart=useCartStore(state=>state.listCart)
  const calculateTotalCartAmount=useCartStore(state=>state.calculateTotalCartAmount)
  const calculateTotalProducts=useCartStore(state=>state.calculateTotalProducts)
  const buyProducts=useCartStore(state=>state.buyProducts)
  
  useEffect(()=>{
    const updateAmount =()=>{
      const total = calculateTotalCartAmount()
      const totalProducts =calculateTotalProducts()
  
      setTotalAmount(total)
      setProducts(totalProducts)
        
    }
    updateAmount()
  },[listCart])
  return (
    <section className=" flex flex-col items-center py-6 gap-y-4">
      <h2 className="text-white text-2xl ">Carrito</h2>
      <div className="w-5/6 flex flex-wrap gap-4 justify-center">
        {listCart.length ? 
          listCart.map(element=>(
            <CardsCart
              key={element.id}
              element={element}
            />
          ))
          : <p className="text-center text-white  text-lg mt-4"
          >Aún no hay productos en el carrito</p>
        }
      </div>
      {listCart.length?
        <section className="w-5/6  flex flex-col md:flex-row gap-4 md:justify-evenly items-center mt-5  py-2">
          <p className="text-white ">Cantidad de productos:{products}</p>
          <p className="text-white ">Costo Total:{totalAmount}</p>
          <button
            type="submit" 
            className=" text-white px-4 py-1 bg-[#8a0645] rounded-md
                        cursor-pointer hover:bg-[#8a0653]"
            onClick={()=>buyProducts(products,totalAmount)}
          >Comprar</button>
        </section>:null
      }
    </section>
  )
}

export default Cart