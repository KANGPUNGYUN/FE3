import React, { useRef, useState } from "react";

export default function App() {
  const lastNameRef = useRef(null); // --- ① lastname input에 대한 useRef
  const firstNameRef = useRef(null); // --- ② firstname input에 대한 useRef

  const [lastname, setLastname] = useState(""); // --- ③ lastname state 값
  const [firstname, setFirstname] = useState(""); // --- ④ firstname state 값

  const inputCheck = (e) => {
    e.preventDefault();
    if (lastNameRef.current.value !== "") {
      console.log(`성 :${lastNameRef.current.value}`);
    }
    if (firstNameRef.current.value !== "") {
      console.log(`이름 :${firstNameRef.current.value}`);
    }
    if (lastNameRef.current.value === "") {
      console.log("성을 입력해주세요");
      lastNameRef.current.focus();
      return;
    } else if (firstNameRef.current.value === "") {
      console.log("이름을 입력해주세요");
      firstNameRef.current.focus();
      return;
    }
    setLastname(lastNameRef.current.value);
    setFirstname(firstNameRef.current.value);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
      onSubmit={inputCheck}
    >
      <h2>🙌 당신의 이름은?</h2>
      <label>
        성: <input type="text" ref={lastNameRef}></input>
      </label>
      <label>
        이름: <input type="text" ref={firstNameRef}></input>
      </label>
      <button type="submit" style={{ width: "180px" }}>
        저장
      </button>
      <p style={{ marginTop: "10px" }}>
        {lastname && firstname && `저의 이름은 ${lastname + firstname}입니다.`}
      </p>
    </form>
  );
}
