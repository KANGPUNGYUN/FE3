import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index(){
  return <div>index</div>
}

function Login(){
  return <div>login</div>
}

function Study(){
  return <div>study</div>
}

function StudyDetail(){

  const location = useLocation();
  console.log(location);

  // 이전 버전에서는 props로 처리했습니다.
  // console.log(props)

  // 방법 1 (객체 구조분해할당)
  const { num } = useParams();

  // 방법 2 (props처럼 불러오기)
  // const params = useParams();
  // return <div>{ params.num }번 게시물에 오신것을 환영합니다.</div>

  return <div>{ num }번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 { num }번 게시물을 요청하셔야 합니다.</div>
}

// function Test(){
//   const location = useLocation();
//   const { num } = useParams();

//   console.log(location);
//   console.log(num);
//   return <div>hello</div>
// }

function Chat(){
  // 방법 1 useLocation 사용
  const location = useLocation();
  console.log(location);
  const 채팅장번호 = location.pathname.split('/')[2]

  // 방법 2 객체 구조분해할당을 사용하지 않은 useParams 사용
  // const params = useParams();
  // console.log(params);
  // const 채팅장번호2 = params.num;

  // 방법 3 객체 구조분해할당을 사용한 useParams 사용
  const { num } = useParams();

  return <p>{채팅장번호}번 게시물에 오신것을 환영합니다. 여기는 { num }번 게시물의 채팅방입니다.</p>
}

function Memo(){
  // 방법 1 useLocation 사용
  const location = useLocation();
  console.log(location);
  const 메모장번호 = location.pathname.split('/')[2]

  // 방법 2 객체 구조분해할당을 사용하지 않은 useParams 사용
  // const params = useParams();
  // console.log(params);
  // const 메모장번호2 = params.num;

  // 방법 3 객체 구조분해할당을 사용한 useParams 사용
  const { num } = useParams();

  return <p>{메모장번호}번 게시물에 오신것을 환영합니다. 여기는 { num }번 게시물의 메모방입니다.</p>
}

function Notice(){
  return <div>notice</div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/study" element={<Study />}/>
        <Route path="/study/:num" element={<StudyDetail />}/>

        {/* 아울렛을 사용하지 않고 만들 경우 */}
        {/* <Route path="/study/:num/:test" element={<Test />}/> */}
        {/* <Route path="/study/:num/chat" element={<Chat />}/> */}
        {/* <Route path="/study/:num/memo" element={<Memo />}/> */}

        {/* 아울렛을 사용하여 만들 경우 */}
        <Route path="/study/:num/*" element={<Outlet />}>
          <Route path="chat" element={<Chat />}/>
          <Route path="memo" element={<Memo />}/>
        </Route>
        
        <Route path="/notice" element={<Notice />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;