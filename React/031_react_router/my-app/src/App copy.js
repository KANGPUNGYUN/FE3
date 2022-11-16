// npx create-react-app my-app --template basic-react
// cd my-app
// npm install react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Index(){
  return <h1>hello world0</h1>
}

function One(props){
  console.log(props);
  return <h1>{props.name} hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. 아래의 url은 하나의 index에서 사용하는 SPA입니다.*/}

      {/* Index이라는 컴포너트를 뿌려주는 www.naver.com/ */}
      {/* One이라는 컴포너트를 뿌려주는 www.naver.com/one */}
      {/* Two이라는 컴포너트를 뿌려주는 www.naver.com/two */}
      {/* Three이라는 컴포너트를 뿌려주는 www.naver.com/three */}

      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name="licat"/>}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
