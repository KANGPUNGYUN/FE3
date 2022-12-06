import { createContext, useReducer } from 'react';

// AuthContext.js는 유저의 로그인 정보를 다른 컴포넌트들에게 전달해서 지금 로그인되어 있는지 아닌지 상태를 전달해주는 역할
// context 객체를 생성합니다.
const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login' :
            return { ...state, user: action.payload }

        case 'logout' :
            return { ...state, user: null }

        default:
            return state
    }
}

// children들이 AuthContext를 구독하면서 상태가 변경되는지 아닌지 보고 그 상태를 따라갑니다
const AuthContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(authReducer, {user: null});
    console.log("state : ", state);
    
    return (
        <AuthContext.Provider value={{...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextProvider}