import { useState } from "react";

export default function App8() {
  const [state, setState] = useState(0);

  console.log(state);

  function addUntil2() {
    if (state !== 2) {
      setState(state + 1);
    }
  }

  // 여기서 실행 순서는?

  // 0
  // 1
  // 2

  return (
    <div className="App">
      <button onClick={() => addUntil2()}>버튼</button>
    </div>
  );
}
