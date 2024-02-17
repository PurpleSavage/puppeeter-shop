import { type StateCreator, create } from 'zustand'
import { product } from '../../interfaces/interfaces'
import {  persist } from 'zustand/middleware'
import { gotToWsp } from '../../helpers/sendWsp'
import { customSessionStorage } from '../storages/session-storage.storage'
interface CartState {
  listCart: product[]

}
interface Actions {
  addToCart: (element: product) => void
  removeToCart: (id: string) => void
  increaseElementCart: (by: number, food: product) => void
  statusProduct: (id: string) => boolean | undefined
  calculateTotalCartAmount: () => number
  calculateTotalProducts:()=>number
  buyProducts:(products:number,totalAmount:number)=>void
}

const storeApi: StateCreator<CartState & Actions> = (set, get) => ({
  listCart: [],

  addToCart: (element: product) => set((state) => ({
    listCart: [...state.listCart, { ...element, statusCart: true }]
  })),
  removeToCart: (id: string) => set((state) => ({
    listCart: state.listCart.filter(pro => pro.id !== id)
  })),
  increaseElementCart: (by: number, food: product) => set((state) => ({
    
    listCart: state.listCart.map(element => element.id === food.id ?
      { ...element, quantity: (element.quantity || 1) + by } : { ...element })
  })),
  statusProduct: (id: string) => {
    const status = get().listCart.find(element => element.id === id)?.statusCart
    return status
  },
  calculateTotalCartAmount: () => {
    const newListProducts = get().listCart;
    if (newListProducts.length === 0) return 0
    const sumaTotal = newListProducts.reduce((acumulador, producto) => {
      return acumulador + producto.quantity * producto.price;
    }, 0);
    return sumaTotal;
  },
  calculateTotalProducts:()=>{
    const newListProducts=get().listCart
    if(newListProducts.length===0)return 0
    const totalProducts=newListProducts.reduce((acumulador,producto)=>{
      return acumulador + producto.quantity
    },0)
    return totalProducts
  },
  buyProducts:(products:number,totalAmount:number)=>{
    gotToWsp(products,totalAmount,get().listCart)
  }
})







export const useCartStore = create<CartState & Actions>()(
  persist(storeApi,
    {
      name: 'list-cart-store',
      storage:customSessionStorage
    }
  )

);