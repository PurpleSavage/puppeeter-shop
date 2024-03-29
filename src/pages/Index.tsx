import Card from '../components/Card';
import { listProducts } from '../data/data';
import { useModalStore } from '../stores/cart/modal.store';
import Modal from '../components/Modal';
const Index = () => {
  const  modalGoToCart=useModalStore(state=>state.modalGoToCart)
  return (
    <>
    {modalGoToCart && <Modal/>}
      <div className=" flex items-center justify-center py-4">
        <section className="w-5/6 flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 md:h-[600px] gap-2 ">
          {
            listProducts.map(element=>(
              <Card
                key={element.id}
                element={element}
              />
            ))
          }
          
        </section>
      </div>
    </>
  )
}

export default Index