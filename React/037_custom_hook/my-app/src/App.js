import React, { useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');
  function onChange(e) {
      setValue(e.target.value);
  }
  return [value, onChange];
}

function InputComponent() {
  const [value, onChange] = useInput('');
  return (
      <>
        <input type="text" onChange={onChange}/>
        <div>
          {value}
        </div>
      </>
  )
}

function SomethingComponent() {
  const [value, onChange] = useInput('');
  return (
      <>
        <input type="text" onChange={onChange}/>
        <div>
          {value}가 강해졌다 돌격해!
        </div>
      </>
  )
}
function App(){
  return(
    <>
      <InputComponent/>
      <SomethingComponent/>
    </>
  )
}
export default App;

// https://paullabworkspace.notion.site/22-Hook-Custom-Hook-4b8288ad01234c02be87a98c49efbf91