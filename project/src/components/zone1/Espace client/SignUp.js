
import { Link } from 'react-router-dom'
import './signup.css'
import { useState } from 'react'
import axios from 'axios'


 function SignUp(){

    const [Erreur, setErreur]=("")

    const [UserSignUp, setUserSignUp] = useState({
        UserName:"",
        Email:"",
        PassWord:""
    })
    const addUserSignUp = ()=>{
        console.log("i am here");
        axios.post("http://localhost:9000/SignUp", UserSignUp)
        .then(res => 
            {   console.log(UserSignUp)
                return res.data})
        .catch(err => console.log(err))
    }

    return(
        <div className='signup'>
            <form class="form">
    <span class="title">Register</span>
    <label for="username" class="label">Username</label>
    <input type="text" id="username" name="username" required="" onChange={(e)=>setUserSignUp({...UserSignUp, UserName:e.target.value})} class="input"/>
    <label for="email" class="label">Email</label>
    <input type="email" id="email" name="email" required="" onChange={(e)=>setUserSignUp({...UserSignUp, Email:e.target.value})} class="input"/>
    <label for="password" class="label">Password</label>
    <input type="password" id="password" name="password" required="" onChange={(e)=>setUserSignUp({...UserSignUp, PassWord:e.target.value})} class="input"/>
    <button type="submit" class="submit" onClick={()=>addUserSignUp()}>Register</button>
    <p class="signin">
        Already have an acount ?
        <Link to="/EspaceClient"><a href="#">Signin</a> </Link>
    </p>
            </form>
        </div>
    )
}

export default SignUp