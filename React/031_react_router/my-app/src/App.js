import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index(){
  return <div>index</div>
}

function Product(){
  const { id } = useParams();
  return <div>{ id }번 product</div>
}

function ProductNotice(){
  const { id } = useParams();
  return <div>{ id }번 product notice</div>
}

function Cart(){
  return <div>cart</div>
}

function Coupon(){
  return <div>coupon</div>
}

function Question(){
  return <div>question</div>
}

function Notice(){
  return <div>notice</div>
}

function User(){
  return <div>user</div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/products/:id" element={<Product />}/>
        <Route path="/products/:id/*" element={<Outlet />}>
          <Route path="notice" element={<ProductNotice />}/>
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/users/coupon" element={<Coupon />}/>
        <Route path="/users/question" element={<Question />}/>
        <Route path="/users/notice" element={<Notice />}/>
        <Route path="/users" element={<User />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;