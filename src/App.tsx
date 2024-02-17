import { BrowserRouter,Routes,Route} from "react-router-dom"
import IndexLayout from "./layouts/IndexLayout" 
import Index from "./pages/Index"
import Cart from "./pages/Cart"
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexLayout/>}>
          <Route index element ={<Index/>}/>
          <Route path="cart" element ={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
