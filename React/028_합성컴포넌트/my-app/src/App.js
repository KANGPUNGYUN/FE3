import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom"

// Main - www.hojun.com
// ProductDetails - www.hojun.com/product/1
// Cart - www.hojun.com/cart
// Buy - www.hojun.com/buy

function Index(){
  return <h2>Index 페이지</h2>
}

function ProductDetails(){
  const location = useLocation();
  // const path = location.pathname.split('/')[2]
  const { likelion } = useParams()
  
  const value = useParams()
  console.log(value)

  console.log(location)
  console.log(location.pathname.split('/'))
  
  return <h2>ProductDetails {likelion} 페이지</h2>
}

function Cart(){
  return <h2>Cart 페이지</h2>
}

function Buy(){
  return <h2>Buy 페이지</h2>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        {/* path에서 /:OO으로 받는 경우 같은 이름으로 useParams()을 사용해주어야 useParams()을 객체 구조분해할당할 수 있습니다 */}
        <Route path="/product/:likelion" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}