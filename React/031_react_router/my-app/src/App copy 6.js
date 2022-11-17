import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

// 중첩된 URL 구조를 아래와 같이 구현할 수 있습니다. 아래 URL 주소로 접속할 수 있습니다.
// localhost:3000/three/
// localhost:3000/three/pungone
// localhost:3000/three/pungtwo

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/*" element={<Outlet />}>
          <Route path="" element={<PungIndex/>}/>
          <Route path="pungone/" element={<PungOne/>}/>
          <Route path="pungtwo/" element={<PungTwo/>}/>
        </Route>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function Blog(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Blog</h1>
}

function PungIndex(){
    const location = useLocation();
  console.log(location)
  return <h1>hello pung index</h1>
}

function PungOne(){
    const location = useLocation();
  console.log(location)
  return <h1>hello pung 1</h1>
}

function PungTwo(){
    const location = useLocation();
  console.log(location)
  return <h1>hello pung 2</h1>
}

export default App;