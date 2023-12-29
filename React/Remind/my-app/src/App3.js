import { useEffect, useState } from "react";

export default function App3() {
  const [state, setState] = useState(0);
  console.log(state);
  useEffect(() => {
    setState(1);
    return () => {
      console.log(state);
    }; // cleanup 함수
  }, [state]);

  // 여기서 실행 순서는?

  // 0
  // 1
  // 0
  // 1
  return <div className="App"></div>;
}
