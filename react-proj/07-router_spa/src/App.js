import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
// import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import Signup from "./components/Signup"

import Photos from "./pages/Photos"
import PhotoDetailPage from "./pages/PhotoDetailPage"

import NotFoundPage from "./pages/NotFoundPage"


function App() {
  return (
    <BrowserRouter >
    {/* Routes, Route 감싸야 함 */}
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Signup />}></Route>

          {/* <Route path='/' element={<HomePage />}></Route> */}
          <Route path='/products' element={<ProductsPage />}></Route>
          <Route path='/product/:id' element={<ProductDetailPage />}></Route>
          <Route path='' element={<Signup />}></Route>



          <Route path='/photos' element={<Photos />}></Route>
          <Route path='/photos/:id' element={<PhotoDetailPage />}></Route>


          <Route path='*' element={<NotFoundPage />}></Route>

        </Routes>
      </main>
    </ BrowserRouter >
    );
}

export default App;
  