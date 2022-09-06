import React, { useState } from "react";
import { Auth } from "firebase/";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";



 function Forgot(){
const [email,setEmail] = useState('');
const forgotPassword = (()=>{
    sendPasswordResetEmail(auth,email)
.then(()=>{
    alert('check your email')
})
.catch((error)=>{
    const errorCode = error.code;
    const errorMassage = error.massage;
})
})

return(
    <form className="loginform">
        <div className="login">
            <h1 className="lmove">Forget Password</h1>
            <input onChange={(event) => setEmail(event.target.value)} type='' className="rinput" placeholder="Email"></input>
          

        </div>
    </form>
)
}
export default Forgot;