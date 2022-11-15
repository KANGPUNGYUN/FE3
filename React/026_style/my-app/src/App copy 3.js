import styled from 'styled-components'

const One = styled.div`
  color: red;
`

// props를 컴포넌트로서 사용하는 이유는 Two가 함수(컴포넌트)처럼 사용가능하기 때문이다.(const Two = styled.div는 컴포넌트이다)
const Two = styled.div`
  color: green;
  // font-size: ${(props) => props.size + 'px'};
  // 구조분해할당도 가능하다
  font-size: ${({size}) => size + 'px'};
  border: ${({ border }) => border.join(" ")};
`

const Three = styled.div`
    color: ${(옵션) => 옵션.option === '하나' ? 'red' : 'pink'};
`

const Four = styled.div`
  ${({border}) => border}
`

function App(){
  return (
    <>
      <One>hello</One>
      <Two border={["1px", "solid", "blue"]} size={32}>world</Two>
      <Three option={'하'}>world</Three>
      <Four border="border: 1px solid orange">four</Four>
    </>
  )
}

export default App;