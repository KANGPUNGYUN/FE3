import { useState, useDebugValue } from "react";

export default function useChangeAppState() {
  const [state, setState] = useState(STATE_START);
  const next = () => setState(state === STATE_STOP ? STATE_START : state + 1);

  useDebugValue(
    state === STATE_START
      ? "앱 시작"
      : state === STATE_RUNNING
      ? "앱 실행 중"
      : "앱 종료"
  );

  return [state, next];
}

export const STATE_START = 0;
export const STATE_RUNNING = 1;
export const STATE_STOP = 2;
