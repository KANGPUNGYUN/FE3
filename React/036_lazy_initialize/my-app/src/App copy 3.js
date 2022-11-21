import React, { useEffect, useLayoutEffect, useState } from "react";

// 질문: 리턴이 실행되면 함수가 종료된다고 기억하고 있는데 어떻게 콘솔창에 또 유즈이펙트가 찍히나요?

// 답: 리턴으로 콜백함수를 주면 가능합니다!

// function one(){
//   console.log('one')
//   return (()=>{
//       console.log('two')
//       return (()=>{
//           console.log('three')
//           return 0
//       })()
//   })()
// }

function App() {

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 1')
    return () => {
      console.log('useLayoutEffect return_1')
    }
  }, [])

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 2')
    return () => {
      console.log('useLayoutEffect return_2')
    }
  })

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 3')
    return () => {
      console.log('useLayoutEffect return_3')
    }
  }, [num])

  useEffect(()=>{
    console.log('useEffect 1')
    // return 뒤에 콜백함수를 주로 메모리를 지워준다던지 정리를 위해 사용합니다.
    return () => {
      console.log('useEffect return_1')
    }
  }, [])

  useEffect(()=>{
    console.log('useEffect 2')
    // return 뒤에 콜백함수를 주로 메모리를 지워준다던지 정리를 위해 사용합니다.
    return () => {
      console.log('useEffect return_2')
    }
  })

  useEffect(()=>{
    console.log('useEffect 3')
    // return 뒤에 콜백함수를 주로 메모리를 지워준다던지 정리를 위해 사용합니다.
    return () => {
      console.log('useEffect return_3')
    }
  }, [num])

  return (
    <button onClick={handleonClick}>{num}</button>
  );
}

const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default Wrap;

// 깜빡임의 원인: useEffect는 비동기적으로 동작하지만, useLayoutEffect는 동기적으로 동작하기 때문입니다. 따라서 useLayoutEffect가 오래걸리는 작업이라면 화면도 늦게 렌더링됩니다.