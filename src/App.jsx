
import './App.css'
import Dishes from './Componets/Dishes'
import Filter from './Componets/Filter'
import Home from './Componets/Home'
import ItemById from './Componets/ItemById'
import Navbar from './Componets/Layout/Navbar'
import { Routes,Route } from 'react-router-dom'
import Reviews from './Componets/Reviews'
function App() {

  return (
    <>
     <Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/dishes' element={<Dishes/>} />
  <Route path='/:id' element={<ItemById/>} />
<Route path='/filt/:type' element={<Filter/>}/>
<Route path='/reviews' element={<Reviews/>} />
</Routes>
<Dishes/>
    </>
  )
}

export default App
