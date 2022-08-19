import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dasboard from './pages/Dasboard'
import Supplier from './pages/Supplier'
import Customer from './pages/Customer'
import Employe from './pages/Employe'
import Quotation from './pages/Quotation'
import WorkOrderRelease from './pages/WorkOrderRelease'
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Dasboard />} />
          <Route path='supplier' element={<Supplier />} />
          <Route path='customer' element={<Customer />} />
          <Route path='employe' element={<Employe />} />
          <Route path='quotation' element={<Quotation />} />
          <Route path='work-order-release' element={<WorkOrderRelease />} />
          {/* <Route path='produk/edit-produk' element={<EditProduk />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
