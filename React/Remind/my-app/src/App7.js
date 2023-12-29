import { useEffect, useState } from "react";

export default function App7() {
  const [state, setState] = useState(0);
  const [value, setValue] = useState(0);
  console.log(value);
  useEffect(() => {
    setState(3);
    setValue(state);
  }, [state]);

  // 여기서 실행 순서는?

  // 0
  // 0

  return <div className="App"></div>;
}
