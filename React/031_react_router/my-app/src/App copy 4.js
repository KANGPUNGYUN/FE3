import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Link to="/">메인페이지</Link>
      <Link to="/product">상품</Link>
      <Link to="/cart">장바구니</Link>
      <Link to="/buy">구매하기</Link>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/buy" element={<Buy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function Main(){
  return <h1>메인페이지 입니다</h1>
}

function ProductDetails(){
  const location = useLocation();
  const id = location.pathname.split('/')[2]
  return (
    <>
      <h1>상품 {id}</h1>
    </>
  )

}

function Cart(){
  return <h1>장바구니 페이지 입니다</h1>
}

function Buy(){
  return <h1>구매하기 페이지 입니다</h1>
}

export default App;