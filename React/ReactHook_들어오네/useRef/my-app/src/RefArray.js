import React, { useRef } from "react";

export default function RefArray() {
  const inputRef = useRef([]);
  console.log(inputRef);

  const inputCheck = (e) => {
    e.preventDefault();

    // if (inputRef.current["email"].value === "") {
    //   console.log("이메일을 입력해주세요");
    //   inputRef.current["email"].focus();
    //   return;
    // } else if (inputRef.current["pw"].value === "") {
    //   console.log("비밀번호를 입력해주세요");
    //   inputRef.current["pw"].focus();
    //   return;
    // } else if (inputRef.current["pwcheck"].value === "") {
    //   console.log("비밀번호 확인을 입력해주세요");
    //   inputRef.current["pwcheck"].focus();
    //   return;
    // } else if (inputRef.current["name"].value === "") {
    //   console.log("이름을 입력해주세요");
    //   inputRef.current["name"].focus();
    //   return;
    // } else if (inputRef.current["nickname"].value === "") {
    //   console.log("닉네임을 입력해주세요");
    //   inputRef.current["nickname"].focus();
    //   return;
    // }
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
      <h2>프로필 설정</h2>
      <label>
        이메일:
        <input
          type="email"
          ref={(el) => (inputRef.current["email"] = el)}
        ></input>
      </label>

      <label>
        비밀번호:
        <input
          type="password"
          ref={(el) => (inputRef.current["pw"] = el)}
        ></input>
      </label>

      <label>
        비밀번호 확인:
        <input
          type="password"
          ref={(el) => (inputRef.current["pwcheck"] = el)}
        ></input>
      </label>

      <label>
        이름:
        <input
          type="text"
          ref={(el) => (inputRef.current["name"] = el)}
        ></input>
      </label>

      <label>
        닉네임:
        <input
          type="text"
          ref={(el) => (inputRef.current["nickname"] = el)}
        ></input>
      </label>

      <button type="submit" style={{ width: "180px" }}>
        회원가입하기
      </button>
    </form>
  );
}
