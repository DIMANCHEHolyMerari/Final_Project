import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { connexion } from "../../../Redux/Reducers/UserReducer"
import './signin.css'


function SignIn(){

  
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [singInUser, setsingInUser] = useState ({
    email:"",
    password:""
})

    const singInUserConnexion = ()=>{
      dispatch(connexion(singInUser))
      .then(res =>{
          if(typeof res.payload === "object"){
              navigate('/Dashboard')
           }
           else{
              alert("Login ou mots de passe incorrect")
           }
      })
      .catch(err =>console.log(err))
  }

    return(
        <div className="signin">
            
    <form class="form">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input type="email" placeholder="Enter email" onChange={(e)=>setsingInUser({...singInUser, email:e.target.value})}/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="Enter password" onChange={(e)=>setsingInUser({...singInUser, password:e.target.value})}/>
        </div>
         <button type="submit" class="submit" onClick={()=>singInUserConnexion()}>
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <Link to="/SignUp"><a >Sign up</a></Link>
      </p>
   </form>

        </div>
    )
}


export default SignIn