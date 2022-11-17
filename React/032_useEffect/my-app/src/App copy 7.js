import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count+1)
  }

  // 인자로 빈 배열([])을 받는다면 처음 한번만 실행됩니다.
  useEffect(() => {
    console.log('실행되었습니다!!')
  }, [])

  return(
    <>
    <div>{count}</div>
    <button onClick={countUp}>up!</button>
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