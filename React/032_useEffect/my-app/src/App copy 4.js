import { useState, useEffect } from 'react'

// 화면에 그려주는게 렌더링이다. useState는 관리하는 변수를 설정하여 렌더링해주게 한다.
function Counter (){
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)
  let test = 0
  
  const handleOneUp = (e) => {
    setOne(one + 1)
  }

  const handleTwoUp = (e) => {
    setTwo(two + 1)
  }

  // 렌더링은 되지만 이벤트는 발생하지 않습니다. useEffect에서 감시하지 않기 때문에
  const handleThreeUp = (e) => {
    setThree(three + 1)
  }

   // 렌더링은 되지 않지만 이벤트는 발생합니다.
  const handleTestUp = (e) => {
    test += 1
    console.log(test)
  }

  // useEffect는 감시하는 겁니다. 여기서 one, two만 감시합니다.
  useEffect(()=>{
    if (one % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  }, [one, two])
  
  return (
    <>
      <div>{one}</div>
      <button onClick={handleOneUp}>Up!</button>
      <div>{two}</div>
      <button onClick={handleTwoUp}>Up!</button>
      <div>{three}</div>
      <button onClick={handleThreeUp}>Up!</button>
      {/* 이벤트가 발생해도 재렌더링 되지 않습니다! */}
      <div>{test}</div>
      <button onClick={handleTestUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;