import React from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Login = ({ setIsAuth }) => {
    const navigate = useNavigate()
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider)
            setIsAuth(true)
            localStorage.setItem('isAuth', true)
            navigate('/')
        } catch (error) {
            setIsAuth(false)
        }
    }
    return (
        <div className='loginPage'>
            <p>Sign In With Google to Continue </p>
            <button onClick={() => { signInWithGoogle() }} className='login-with-google-btn'>Sign In With Google</button>
        </div>
    )
}

export default Login