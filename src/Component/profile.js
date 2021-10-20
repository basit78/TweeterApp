import React,{useContext} from "react";
import { Globalcontex } from "../Contex/contex";
import "./profile.css"

function Profile(){
    const {state}=useContext(Globalcontex)
    return(
<div className="container d-flex justify-content-center align-items-center">
    <div className="card">
        <div className="upper"> <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" /> </div>
        <div className="user text-center">
            <div className="profile"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCZEvTmBLh0xuUk19qLq0PRUO4QaDCugt2Q&usqp=CAU" className="rounded-circle" width="80" /> </div>
        </div>
        <div className="mt-5 text-center">
            <label>
            
            <h4 className="mb-0"><b>UserName :</b>{state.authuser.username}</h4>
            <h4 className="mb-0"><b>Email :</b>{state.authuser.email}</h4>
            <h4 className="mb-0"><b>Password :</b>{state.authuser.password}</h4>
            </label>
         <button className="btn btn-primary btn-sm follow">Change Password</button>
            <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                
            </div>
        </div>
    </div>
</div>
    )
}
export default Profile;