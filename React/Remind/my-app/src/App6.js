import { useEffect, useState } from "react";

export default function App6() {
  const [state, setState] = useState(0);
  console.log(state);
  useEffect(() => {
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
  }, [state]);

  // 여기서 실행 순서는?

  // 0
  // 3

  return <div className="App"></div>;
}
