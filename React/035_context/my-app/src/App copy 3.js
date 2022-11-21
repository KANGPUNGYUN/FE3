function Three({price}){
  return <div>{price}</div>
}

function Two({price}){
  return (
    <div>
      <Three price={price}/>
    </div>
  )
}

function One({price}){
  return (
    <div>
      <Two price={price}/>
    </div>
  )
}

export default function App() {
  const value = 1000 // 이 값을 three에서 출력하고 싶습니다.
  return (
    <div>
      <One price={value}/>
    </div>
  )
}

// 구조분해할당
// let hello = {value: {four: 40, five: 50}, one: 10, two: 20, three: 30};
// let {value} = hello
// value // {four: 40, five: 50}