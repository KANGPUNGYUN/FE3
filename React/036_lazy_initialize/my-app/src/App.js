import { useState, useEffect, useLayoutEffect } from 'react'

function App() {
  const [value, setValue] = useState(100);
  
  // 깜빡임 현상 발생(useEffect는 페인트 이후에 실행되기 때문)
  // useEffect(() => {
  //   if (value >= 1000) {
  //     setValue(300);
  //   }
  // }, [value]);

  // 깜빡임 현상 발생하지 않음(useLayoutEffect는 페인트 이전에 실행되기 때문)
  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);
  
  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
      <button onClick={() => {setValue(1000)}}>커져랏!</button>
      <button onClick={() => {setValue(200)}}>작아져랏!</button>
    </div>
  )
}

export default App;

// useLayoutEffect에서 중요한 포인트!

// 1. useLayoutEffect는 useEffect보다 먼저 실행됩니다. 따라서 useEffect보다 먼저 실행하고 싶은 무언가가 있다면 useLayoutEffect를 사용해야 한다라는 것을 알 수 있습니다.

// 2. 
// 2.1 렌더링 되었을 때 useLayoutEffect return의 콜백함수가 실행됩니다. 그리고 useLayoutEffect 가 실행됩니다.
// 2.2 useEffect return의 콜백함수가 실행됩니다. useEffect 가 실행됩니다.

// 3. 깜빡임을 해결하고 싶다? useEffect -> useLayoutEffect
// 페인트 되기전에 useLayoutEffect가 실행되기 때문에 깜빡이는 것 처럼 보입니다.