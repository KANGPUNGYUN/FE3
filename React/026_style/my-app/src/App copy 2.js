import styled from 'styled-components'

const ContnetsDivOne = styled.div`
  color: red;
`

const ContnetsDivTwo = styled.div`
  color: green;
`

const ContnetsDivThree = styled.div`
  color: blue;
`

function App() {
  return (
    <>
      <ContnetsDivOne>hello world</ContnetsDivOne>
      <ContnetsDivTwo>hello world</ContnetsDivTwo>
      <ContnetsDivThree>hello world</ContnetsDivThree>
    </>
  );
}

export default App;