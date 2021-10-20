import React,{useContext,useEffect,useState} from "react";
import { db, getDocs, collection, query, where } from '../Config/firebase';
import {Globalcontex} from "../Contex/contex"
function Mytweets(){
    const {state}=useContext(Globalcontex);
    const [mytweet,setmytweet]=useState([])
    useEffect(async () => {
        let TweetRef = collection(db, 'Tweets');
        let q = query(TweetRef, where("uid", "==", state.authuser.uid))
        let mytweets = await getDocs(q);
        let mytweetsClone = mytweet.slice(0);
        mytweets.forEach((doc) => {
            mytweetsClone.push(doc.data());
        });
        setmytweet(mytweetsClone);
    }, [])

    return(
        <div>
        {
            mytweet.map(({ uid, tweet, name }, index) => (
                <div key={index} >
                    <center>
                        <div style={{ width: "50%", backgroundColor: "#F4F8FB", height: "auto", borderRadius: "15px", border: "1px solid grey" }}>
                            <div style={{ display: "flex" }}>
                                <div ><img style={{ backgroundColor: "black", height: "50px", width: "50px", borderRadius: "30px", marginLeft: "8px" }} className="mt-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCZEvTmBLh0xuUk19qLq0PRUO4QaDCugt2Q&usqp=CAU" /></div>
                                <div className="mt-4" style={{ marginLeft: "5px" }}>
                                    <p>{name}</p>
                                </div>
                            </div>
                            <div>
                                <p>{tweet}</p>

                            </div>
                            <div style={{ display: "flex" }}>
                                <div><img style={{ width: "50px" }} onClick={()=>{alert("Like")}}  src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-like-icon-png-image_695362.jpg" /></div>
                                <div className="mt-2">< img style={{ width: "35px", marginLeft: "90px" }} onClick={()=>{alert("Disike")}} src="https://www.pngrepo.com/download/51827/dislike.png" /></div>
                            </div>
                        </div><br />
                    </center>
                </div >
            ))
        }
    </div >
    )
}
export default Mytweets;