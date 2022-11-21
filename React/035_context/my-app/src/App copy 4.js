import {createContext} from "react"

const Value = createContext({price:1000})

function Three(){
  return (
    <Value.Consumer>
       {(value) => (<p>{value.price}</p>)}
    </Value.Consumer>
  )
}

function Two(){
  return (
    <div>
      <Three/>
    </div>
  )
}

function One(){
  return (
    <div>
      <Two />
    </div>
  )
}

export default function App() {
  return (
      <div>
        <One />
      </div>
  )
}
