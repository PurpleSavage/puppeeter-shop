import { type StateCreator, create } from 'zustand'
import {  persist } from 'zustand/middleware'
import { customSessionStorage } from '../storages/session-storage.storage'

interface modalState{
    modalGoToCart:boolean
}
interface Actions{
    changeState:()=>void
}
const storeApi: StateCreator<modalState & Actions>=(set) =>({
    modalGoToCart:false,
    changeState:()=>set(state=>({
        modalGoToCart:!state.modalGoToCart
    }))
})

export const useModalStore = create<modalState & Actions>()(
    persist(storeApi,
      {
        name: 'modal-state',
        storage:customSessionStorage
      }
    )
  
  );