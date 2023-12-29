import { useEffect, useState } from "react";

export default function App4() {
  const [state, setState] = useState(0);
  console.log(state);
  useEffect(() => {
    setState(1);
    console.log(state);
    setState(2);
    console.log(state);
    setState(3);
    console.log(state);
  }, [state]);

  // 여기서 실행 순서는?

  // 0
  // 0
  // 0
  // 0
  // 3
  // 3
  // 3
  // 3
  // 3
  return <div className="App"></div>;
}
