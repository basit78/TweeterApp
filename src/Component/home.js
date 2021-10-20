import React, { useState, useContext, useEffect } from "react";
import { Globalcontex } from "../Contex/contex";
import { addDoc, db, collection, query, where, getDocs, doc } from "../Config/firebase"
function Home() {
    const { state } = useContext(Globalcontex)
    const [home, sethome] = useState('')
    const [alltweet, setalltweet] = useState([]);
    const [likecount,setlikecount]=useState(0);
    const [dislikecount,setdislikecount]=useState(0);
    useEffect(async () => {
        const tweetRef = collection(db, "Tweets");
        const docSnap = await getDocs(tweetRef);
        let alltweetclone = alltweet.slice(0);
        docSnap.forEach((doc) => {
            alltweetclone.push(doc.data());
            console.log(alltweet)

        })
        setalltweet(alltweetclone);
    }, [])
    let tweet = async () => {
        try {
            let tweet = {
                tweet: home,
                uid: state.authuser.uid,
                name: state.authuser.username
            }
            let TweetRef = collection(db, 'Tweets');
            await addDoc(TweetRef, tweet);
            alert("Reload the page:)")
        } catch (err) {
            console.error("Error=>", err);
        }
    }
    return (
        <>
            <>
                <center>
                    <div class="form-group">

                        <label style={{ color: "white" }}>My Tweets :</label>
                        <textarea className="form-control" maxLength="280" style={{ borderRadius: "10px", backgroundColor: "#F4F8FB", height: "100px", width: "50%", border: "1px solid #F4F8FB " }} onChange={(ev) => { sethome(ev.target.value) }}></textarea><br />
                        <button className="btn btn-success" style={{ backgroundColor: "#F4F8FB", color: "black" }} onClick={tweet}>Tweet</button>
                    </div>
                </center>
            </>
            <div>
                {
                    alltweet.map(({ uid, tweet, name }, index) => (
                        <div key={index} >
                            <center>
                                <div style={{ width: "50%", backgroundColor: "#F4F8FB", height: "auto", borderRadius: "15px", border: "1px solid grey" }}>
                                    <div style={{ display: "flex" }}>
                                        <div ><img style={{ backgroundColor: "black", height: "50px", width: "50px", borderRadius: "30px", marginLeft: "8px" }} className="mt-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCZEvTmBLh0xuUk19qLq0PRUO4QaDCugt2Q&usqp=CAU" /></div>
                                        <div className="mt-3" style={{ marginLeft: "5px" }}>
                                            <p>@{name}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{tweet}</p>

                                    </div>
                                    <div>
                                    <div style={{ display: "flex"}}>
                                        <div><img style={{ width: "30px",marginLeft:"220px" }} onClick={()=>{setlikecount(likecount+1)}}  src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-like-icon-png-image_695362.jpg" /></div>
                                        <div><img style={{ width: "30px",marginLeft:"100px" }} onClick={()=>{setdislikecount(dislikecount+1)}}  src="/dislike.jpg"  alt=""/></div>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <div style={{marginLeft:"220px"}}><p style={{fontSize:"13px"}}>Like  {likecount}</p></div>
                                        <div style={{marginLeft:"80px"}}><p style={{fontSize:"13px"}}>Dislike {dislikecount}</p></div>
                                    </div>
                                    </div>
                                </div><br />
                            </center>
                        </div >
                    ))
                }
            </div >


        </>
    )
}
export default Home;