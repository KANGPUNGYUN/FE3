import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContext from './context/UserContext'
import BlogDetail from './pages/BlogDetail/BlogDetail';
import Home from './pages/Home/Home';
import './reset.css'
import './global.css'

function App() {
  // 실제로는 로그인 정보가 들어갑니다.
  const [userId, setUserId] = useState(1)
  const [isLogin, setIsLogin] = useState(true)

  return (
    <UserContext.Provider value={{userId, isLogin}}>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={<Home/>}
          />
          <Route 
            path='/blog/:id'
            element={<BlogDetail/>}
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
