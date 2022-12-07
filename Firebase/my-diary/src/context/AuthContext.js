import { createContext, useReducer, useEffect } from 'react';
import { appAuth } from '../firebase/config';

// AuthContext.js는 유저의 로그인 정보를 다른 컴포넌트들에게 전달해서 지금 로그인되어 있는지 아닌지 상태를 전달해주는 역할
// context 객체를 생성합니다.
const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login' :
            return { ...state, user: action.payload }

        case 'logout' :
            return { ...state, user: null }

        case 'authIsReady' : 
            return {...state, user: action.payload, isAuthReady: true }

        default:
            return state
    }
}

// children들이 AuthContext를 구독하면서 상태가 변경되는지 아닌지 보고 그 상태를 따라갑니다
const AuthContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthReady: false
    });
    // console.log("state : ", state);

    useEffect(() => {
        // onAuthStateChanged : 유저의 인증정보 변화를 관찰하는 함수입니다.
        // onAuthStateChanged 함수는 Unsubscribe 함수를 반환합니다. 더 이상 유저의 변화를 관찰하지 않도록 하는 함수입니다. 
            // 우리는 새로고침 후 초기에 딱 한번 실행하면 되기 때문에 이후에는 구독을 중지합니다.
        const unsubscribe = appAuth.onAuthStateChanged(function (user) {
            dispatch({ type: 'authIsReady', payload: user })
            unsubscribe();
        });
    }, [])
    
    return (
        <AuthContext.Provider value={{...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextProvider}