// 아래 코드를 살펴봅시다. 현재 값이 변하는 곳은 총 3군데입니다.

// 1. 이름을 입력할 때 → `setName`
// 2. 아이디를 입력할 때 → `setId`
// 3. 버튼을 눌렀을 때 → `setUserInfo` + `getNum`

// 리액트는 상태값이 바뀔 때마다 컴포넌트를 새로 렌더링하기 때문에 3가지 경우 모두 렌더링됩니다.

// 비교에 필요없는 부분들은 빼버린 가상 돔을 이용해 실제 비교에 필요한 부분들만 비교합니다.
// 최초 렌더링 → 이전 렌더링부분에 가상 돔 저장 → 상태 업데이트 → 상태 업데이트로 인한 가상 돔 렌더링 → 업데이트로 인해 렌더링된 가상 돔과 이전에 만들어진 가상 돔을 비교 → 바뀐 부분 브라우저에 렌더링

// 아래에서 getNum이 실행되는 이유 아래와 같은 과정으로 실행되기 때문입니다.

// 1. return에서 결과를 내보낸다. 브라우저에 렌더링 전에 가상 돔으로 렌더링(생성) << 이때 getNum이 실행됨.
// 2. 이전에 렌더링했던 가상 돔과 업데이트 될 예정인 가상 돔을 비교(상태 변화가 일어났으니 어떤 부분이 바뀐건지 확인해야 함.)
// 3. (2)를 통해 브라우저에 렌더링 할 부분 검색.
// 4. 브라우저에 렌더링

// 최적화할 함수와 함수가 의존하게 될 값을 useMemo에게 전달하면 됩니다. useMemo는 렌더링 중에 실행되어서 의존하는 값이 변경되었는지를 체크하고, 의존성 값이 변경되었을 때에만 값을 다시 계산합니다.

import {useState, useRef, useMemo} from 'react'

export default function App() {
  const inputName = useRef(null)
  const inputId = useRef(null)
  const [userInfo, setUserInfo] = useState([])
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const n = useMemo(()=>{
    getNum(userInfo)
  }, [userInfo])

  function handleInputName(e) {
    console.log(e)
    setName(e.target.value) // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log('렌더링 - 1')
  }

  function handleInputId(e) {
    console.log(e)
    setId(e.target.value) // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log('렌더링 - 2')
  }

  function handleSubmit(e) {
    e.preventDefault();
    // userInfo.push({});
    const newInfo = [...userInfo, {name, id}]
    inputName.current.value = ''
    inputId.current.value = ''
    inputName.current.focus()
    setUserInfo(newInfo) // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log('렌더링 - 3')
  }

  function getNum(li){
    console.log('렌더링!')
    return li.length
  }

  return (
    <>
      <form>
        <input 
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          ref={inputName}
        />
        <input 
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleInputId}
          ref={inputId}
        />
        <button type="submit" onClick={handleSubmit}>회원 명부 작성</button>
        <ul>
          {
            userInfo.map((value, index) => (
              <li key={index}>
                <h3>이름 : {value.name}</h3>
                <strong>아이디 : {value.id}</strong>
              </li>
            ))
          }
        </ul>
        <span>{n}</span>
      </form>
    </>
  );
}
