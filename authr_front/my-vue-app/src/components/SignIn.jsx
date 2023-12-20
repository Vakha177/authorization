import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { authSignIn } from "../features/applocationSlice";
const SignIn = () => {
    const [login , setLogin] = useState('')
    const [password , setPassword] = useState('') ; 
    
    const dispatch = useDispatch()

    const handleSetName= (e) => {
        setLogin(e.target.value) ;
    } 
    
    const handleSetPass = (e) => {
        setPassword(e.target.value) ;
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        dispatch(authSignIn({login , password}))
    } 
 
    return (
        <form onSubmit={handleSignIn}>
            <input
            type="text"
            value={login}
            placeholder="email"
            onChange={handleSetName}
            />
            <br />
        <input 
        type="password"
        value={password}
        placeholder="Введите пароль"
        onChange={handleSetPass}
        />
        <br />
        <button type="submit">auth</button>


        </form>
    )
}
export default SignIn