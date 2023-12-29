import { useEffect, useState } from "react";

export default function App5() {
  const [state, setState] = useState(0);
  console.log(state);
  useEffect(() => {
    setState(state + 1);
    setState(state + 1);
    setState(state + 1);
  }, [state]);

  // 여기서 실행 순서는?

  // 0
  // 1

  return <div className="App"></div>;
}
