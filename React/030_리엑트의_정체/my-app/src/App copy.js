function One(props){
  console.log('// one 시작');
  console.log(props);
  console.log('// one 끝');

  // props.children에서 children은 array이기 때문에 체이닝으로 사용가능하다.
  return (
    <>
      {props.children}
    </>
  )
}

function Two(props){
  console.log('// two 시작');
  console.log(props);
  console.log('// two 끝');

  // props.children에서 children이 1개인 경우 객체이며 체이닝하여 사용가능하다.
  return (
    <>
      {props.children}
    </>
  )
}

function Three(props){
  console.log('// three 시작');
  console.log(props);
  console.log('// three 끝');

  // props.children가 없기 때문에 빈 객체를 전달한다.
  return (
    <div>hello</div>
  )
}

function Four(props){
  console.log('// four 시작');
  console.log(props);
  console.log('// four 끝');

  // props.children가 없기 때문에 빈 객체를 전달한다.
  return (
    <div>hello</div>
  )
}

function Five(){
  // One의 children의 개수가 7개가 아닌 6개인 이유는 Six는 Five안에서 불러오기 때문이다.
  return(
    <div>
      <p>hello</p>
      <Six/>
    </div>
  )
}

function Six(){
  return <div>hello</div>
}

function App() {
  return (
    <div>
      <h1>app - h1</h1>
      <p>app - p</p>
      <One>
        <h2>app &gt; One - h2</h2>
        <p>app &gt; One - p</p>
        <Two>
        <p>app &gt; One &gt; Two - p</p>
        </Two>
        <Three/>
        {/* <Four></Four>처럼 열기 닫기 태그로 해주면 안에서 children을 컨트롤할 수 있습니다 */}
        <Four></Four>
        {/* <Five/>처럼 열기 닫기 태그가 아닌 한 테그에서 열고 닫는 경우 children으로 들어오지 않습니다 */}
        <Five/>
      </One>
    </div>
  );
}
export default App;

// 리액트는 요소들을 경량화된 오브젝트(=버츄얼 돔)로 렌더링한다
// -> 요소의 상태가 바뀌었을 때 전체를 렌더링 하지 않고 // 변경이 일어난 요소들만 렌더링 할 수 있다는 특징이 있다
// -> 이런 특징을 이용해서 프로젝트 규모, 특징을 고려해서 리액트를 적용하는게 장점이 된다면 적용하는 게 좋다
