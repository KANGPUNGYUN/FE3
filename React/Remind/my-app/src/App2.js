import { useEffect, useState } from "react";

export default function App2() {
  const [state, setState] = useState(0);
  console.log("useState", state);
  useEffect(() => {
    setState(1);
  }, [state]);

  // 여기서 실행 순서는?

  // useState 0
  // useState 1
  // useState 1

  return <div className="App"></div>;
}
