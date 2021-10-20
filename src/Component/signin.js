import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import {auth,signInWithEmailAndPassword} from "../Config/firebase"
function Signin(){
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [error,seterror]=useState('')
    const history = useHistory();
    let signinuser= async()=>{
      try{
        
        let {user}=await signInWithEmailAndPassword(auth, email, password)
       
        history.push("./home")
        console.log(user.email,user.uid)

      }
      catch(err){
          seterror(err.message)
          setTimeout(()=>{
              seterror('')
          },3000)
      }
    }
    return(
        <center><div  className="mt-5 col-md-3" style={{border:"2px solid white",padding:"10px",borderRadius:"10px"}}>
        <h1 style={{textAlign:"center",color:"white"}}>Signin</h1>
        
        <form>
        <div className="form-group">
          <label style={{color:"white"}}>Email address</label>
          <input type="email" className="form-control"  style={{backgroundColor:"transparent",color:"white",borderRadius:"20px" }} placeholder="Enter email" onChange={(event)=>{setemail(event.target.value)}}/>
        </div><br/>
        <div className="form-group">
          <label style={{color:"white"}}>Password</label>
          <input type="password" className="form-control"  style={{backgroundColor:"transparent",color:"white",borderRadius:"20px" }} placeholder="Password" onChange={(event)=>{setpassword(event.target.value)}}/>
        </div><br/>
      </form>
        <button type="submit" className="btn" style={{backgroundColor:"#00acee"}} onClick={signinuser}>Sign In</button> 
        {error ? <p style={{color:"white"}}>{error}</p> : null}
      </div>
      </center>
      
    )

}
export default Signin;