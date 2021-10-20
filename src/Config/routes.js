import React,{useContext,useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import { Globalcontex } from "../Contex/contex";
  import { auth,onAuthStateChanged,db,getDoc,doc  } from "./firebase";
  import Navbar from "../Component/navbar"
  import Signup from "../Component/signup"
  import Signin from "../Component/signin"
  import Home from "../Component/home"
  import Mytweets from "../Component/mytweets"
  import Profile from "../Component/profile"
  function Routes(){
      const { state, dispatch } = useContext(Globalcontex);
  
      useEffect(() => {
          onAuthStateChanged(auth, (user) => {
              if (user) {
                  fetchUserInfo(user.uid);
                  console.log("user found")
              }
              else {
                  console.log('user not found');
              }
          })
      }, []);
      const fetchUserInfo=async(uid)=>{
        let UserRef=doc(db,'Signup Users',uid)
        let Userinfo=await getDoc(UserRef);
        Userinfo=Userinfo.data();
        // console.log(Userinfo)
        dispatch({type:"AUTH-USER" ,payload : Userinfo})


      }
      return(
          <Router>
                 <Navbar/>  
              <Switch>
                  {
                    state.authuser ? 
                    <>
                  <Route path="/Home">
                    <Home />
                  </Route>
                  <Route path="/Mytweets">
                    <Mytweets />
                  </Route>
                  <Route path="/Profile">
                    <Profile />
                  </Route>
                  </>
                  
                     :
                    <>
                  <Route path="/signup">
                    <Signup/>
                  </Route>
                  <Route path="/signin">
                    <Signin/>
                  </Route>
                    </>
                  }
              </Switch>
          </Router>
      )
  }
  export default Routes;