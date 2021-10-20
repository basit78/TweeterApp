import React, { useState, useContext } from "react";
import "./signup.css"
import { auth, createUserWithEmailAndPassword } from "../Config/firebase"
import { Globalcontex } from "../Contex/contex";
import { doc, setDoc, db} from "../Config/firebase"
function Signup() {
  const { state, dispatch } = useContext(Globalcontex)
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [errMsg, seterrMsg] = useState('')
  const [profile, setprofile] = useState([])
  let signup = async () => {
    try {        
       let {user}=await createUserWithEmailAndPassword(auth, email, password);

      let dataRef=doc(db,'Signup Users',user.uid)
       await setDoc(dataRef,{
        username : username,
        email : user.email,
        password: password,
        uid : user.uid
      })



    }
    catch (err) {
      seterrMsg(err.message)
      setTimeout = (() => {
        seterrMsg('')
      }, 3000)

    }
    console.log(profile)
    console.log(profile.name)
  }

  return (
    <center><div className="mt-5 col-md-3" style={{border:"2px solid white",padding:"10px",borderRadius:"10px"}}>
      <h1 style={{ textAlign: "center", color: "white" }}>Signup</h1>

      <form>
        <div style={{color:"white"}}><br/>
        <label>Profile Picture </label><br/>
      <input type="file" onChange={(ev)=>{setprofile(ev.target.files[0])}}/>
        </div>
      {/* <div class="imgcontainer">
            <label>
                <img src="avatar.png" alt="Avatar" class="avatar" />
                <input type="file" placeholder="Upload Image" onchange={(ev)=>{console.log(ev.target.files[0])}} name="upload-image" required
                    id="upload-image" />
            </label>
        </div> */}
        <div className="form-group">
          <label style={{ color: "white" }}>User Name</label>
          <input type="text" className="form-control" style={{ backgroundColor: "transparent", color: "white", borderRadius: "20px" }} placeholder="User Name" onChange={(event) => { setusername(event.target.value) }} value={username} />
        </div><br /><br />
        <div className="form-group">
          <label style={{ color: "white" }}>Email address</label>
          <input type="email" className="form-control" style={{ backgroundColor: "transparent", color: "white", borderRadius: "20px" }} placeholder="Enter email" onChange={(event) => { setemail(event.target.value) }} value={email} />
        </div><br /><br />
        <div className="form-group">
          <label style={{ color: "white" }}>Password</label>
          <input type="password" style={{ backgroundColor: "transparent", color: "white", borderRadius: "20px" }} className="form-control" placeholder="Password" onChange={(event) => { setpassword(event.target.value) }} value={password} />
        </div><br /><br />
      </form>
      <button type="submit" className="btn" style={{ backgroundColor: "#00acee" }} onClick={signup}>Sign up</button>
      {errMsg ? <p style={{ color: "white" }}>{errMsg}</p> : null}
    </div>
    </center>
  )
}
export default Signup;