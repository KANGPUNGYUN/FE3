import { useState } from 'react'

function Resume({이름, 취미, 자기소개}){
  const [like, setLike] = useState(0) 
  // const [like, setLike] = useState(100) 
  // const [like, setLike] = useState('hello world') 

  function handleclickLike(){
    // like += 1
    setLike(like + 1); // like = like + 1
    // setLike(like + 2); // like = like + 1
    // setLike(like + 'hello' + 'wolrd'); // like = like + 'hello' + 'wolrd'

    console.log(like)
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      <button onClick={handleclickLike}>{like}</button>
    </section>
  )
}

function App() {
  return (
    <main>
      <Resume 
        이름="강풍윤" 
        취미="코딩" 
        자기소개="안녕하세요. 멋쟁이사자처럼 3기 강풍윤입니다."
      />
    </main>
  );
}

export default App;