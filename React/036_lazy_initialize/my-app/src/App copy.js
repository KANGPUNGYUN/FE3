import {useEffect, useState} from 'react'

function getName(){
  console.log('오래 기다리는 작업');
  return '개리'
}

function App() {
  // const [name, setName] = useState(getName()) // onClick 실행시 실행
  // 현재 우리가 작성한 `useState(getName())` 의 흐름을 보면, 아래와 같은 과정이 실행됩니다.

  // 1. `getName()`의 결과값을 얻는다.
  // 2. 얻은 결과값을 `useState()`안에 인수로 넣어준다.
  // 3. state가 초기화된다.(리렌더링 과정에서는 state가 바뀌진않는다)


  const [name, setName] = useState(getName) // 저장하고 단 한번만 실행

  // 1. `setState()`에 인수로 `getName` 함수를 값으로 넘겨준다.
  // 2. `setState(getName)`이 진행되면 최초 초기화 진행 과정에서 `getName`을 실행하게 된다.
  // 3. 이후 업데이트(리렌더링 과정)에서 초기화가 진행되지 않기 때문에 `getName`을 실행하는 부분이 생략된다.

  // 이와 같이 `lazy initialize`는 초기값 계산에 많은 비용(연산 시간, 메모리 등)이 소요될 때 비효율적인 부분을 최적화하는데 사용할 수 있습니다.
  
  const [num, setNum] = useState(0)

  return (
    <>
      <div>안녕하세요 {name}! 현재 숫자는 {num}입니다!</div>
      <button onClick={()=>setNum((p)=>p+1)}>{num}</button>
    </>
  );
}
export default App;
