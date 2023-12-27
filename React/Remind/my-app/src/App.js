import { useEffect, useState } from "react";

export default function App() {
  console.log("init");
  const [state, setState] = useState(0);
  console.log("useState", state);
  useEffect(() => {
    console.log("useEffect");
    setState(1);
  }, []);

  // 여기서 실행 순서는?

  return <div className="App"></div>;
}
