import { useId } from "react";

function NameForm() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>이름</label>
      <input id={id} type="text" />
    </>
  );
}

function App() {
  return (
    <>
      <NameForm />
      <NameForm />
      <NameForm />
    </>
  );
}

export default App;
