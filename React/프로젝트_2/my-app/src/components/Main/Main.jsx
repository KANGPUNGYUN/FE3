import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import UserContext from '../../context/UserContext'
import About from './about/About'
import Posts from './posts/Posts'
import './main.css'

export default function Main() {
    //props Drilling을 피하기 위한 방법
    const { isLogin } = useContext(UserContext);
    const [posts, setPosts] = useState();
    
    useEffect(()=>{
        axios
        .get('https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json')
        .then(json => {
            // console.log(json)
            // console.log(json.data)

            // setPosts으로 재설정이 되기 때문에 변경이 일어나고 posts의 값의 변경이 일어나서 다시 재랜더링하는 무한반복이 발생
            // 따라서 useEffect를 통해 처음 실핼되었을때 한번만 실행되게 설정
            setPosts(json.data)
        })
    }, [])

    return (
        <main>
            {posts === undefined? <></>: (
                <div className="max-width">
                <h2 className="a11y-hidden">Post</h2>
                <ul className="posts">
                    {/* components array로 생성 */}
                    <Posts posts={posts}/>
                </ul>
                {isLogin ? <About /> : <></>}
                </div>
            )}
        </main>
    )
}
