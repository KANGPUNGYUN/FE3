import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* link는 주소만 바꿀 뿐, 페이지를 새로 불러오진 않습니다. */}
      {/* a 태그는 클릭했을 경우, href에 설정해준 경로 이동과 동시에 페이지를 새로 불러오기 때문에 페이지가 새로고침이 됩니다.  */}
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
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

export default App;