function App(){
  return <h1>오늘 복습 내용</h1>
}

// step 1 

// const arr = [10, 20, 30, 40, 50]
// function App() {
//   return (
//     <div>
//       {/* key를 입력하지 않는 경우, 에러를 반환하지만 사용가능. */}
//       {arr.map(v => <p>{v}</p>)}
//       {/* key를 인덱스로 하지않는 것을 권장합니다. */}
//       {arr.map(v => <p key={v}>{v}</p>)}
//     </div>
//   );
// }

// step 2

// const value = 3;
// function App(){
//   if (value === 1){
//     return <h1>hello 1</h1>
//   } else if (value === 2){
//     return <h1>hello 2</h1>
//   } else if (value === 3){
//     return <h1>hello 3</h1>
//   }
// }

// step 3

// npm install styled-components
// npm i styled-reset

// import styled from "styled-components";

// const DivBlue = styled.div`
//   color: blue;
// `

// const DivRed = styled.div`
//   color: red;
// `

// function App(){
//   return (
//     <>
//       <DivBlue><h2>hello blue</h2></DivBlue>
//       <DivRed><h2>hello red</h2></DivRed>
//     </>
//   )
// }

export default App;