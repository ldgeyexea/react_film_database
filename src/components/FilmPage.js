import React, {useEffect, useState} from "react";
import filmPageStyles from "../styles/filmPageStyles.css";
import placeholder from "../res/logo1.png";
import commonStyles from "../styles/commonStyles.css";
import {useNavigate, useParams} from "react-router-dom";


const FilmPage = () => {
    const { id } = useParams()
    const navigate=useNavigate()
    const [token,setToken]=useState('')
    const [user,setUser]=useState({uid:"",name:"",role:"",access:"",created:"",expires:""})
    const [inWatchList,setInWatchList]=useState(false)
    const [inWatchedList,setInWatchedList]=useState(false)

    const [filmData, setFilmData] = useState({
        title: "film",
        director: " rzeszyser 1",
        description:
            "To ejst opis fimu, słowa o różnej długości aby sprawdzic łamanie lini lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum ",
        rating: 4.2,
        imageURL:""
    });


    useEffect(() => {
        fetch("https://at.usermd.net/api/movies/"+id)
            .then((res) => res.json())
            .then((data) => {
               // console.log(data);
                updateFilmData(data)
            })

            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        setToken(localStorage.getItem("token"))


        // localStorage.removeItem("watched"+user.name)
        // localStorage.setItem("watched"+user.name,"")
        // localStorage.removeItem("planed"+user.name)
        // localStorage.setItem("planed"+user.name,"")

        if (token!=="") {
            readToken(token)
            if(localStorage.getItem("planed" + user.name)!==null) {
                if (localStorage.getItem("planed" + user.name).includes(filmData.id)) {
                    setInWatchList(true)
                } else {
                    setInWatchList(false)
                }
            }else{
                localStorage.setItem("planed" + user.name,'')
            }
            if(localStorage.getItem("watched" + user.name)!==null) {
                if (localStorage.getItem("watched" + user.name).includes(filmData.id)) {
                    setInWatchedList(true)
                } else {
                    setInWatchedList(false)
                }
            }else {
                localStorage.setItem("watched" + user.name,'')
            }
           console.log( localStorage.getItem("watched"+user.name)+"/"+localStorage.getItem("planed"+user.name))
        }


    },[filmData]);

    const readToken=async (jwt)=>{
        //console.log("onUserPage"+jwt)
        //console.log(JSON.parse(atob(token.split('.')[1])))
        await setUser(JSON.parse(atob(token.split('.')[1])))
        //logToken()
    }
    const logToken=()=>{
        console.log("full user obj")
        console.log(user)
    }


    const updateFilmData = (data) => {
        setFilmData({title:data.title,director: "test",description: data.content,rating:data.rate,imageURL:data.image,productionYear:data.productionYear,genre:data.genre,id:data.id})
    };

    const  deleteMovie=async()=>{

        //alert("delete movie with id:"+filmData.id)
        try {
            const reqOpts = {
                method: 'DELETE',
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token") },
            };
            const response = await fetch('https://at.usermd.net/api/movie/'+filmData.id, reqOpts);
            const data = await response.json();
            console.log("datafetched:"+data)
        } catch (e) {
            console.error("Error fetching data:", e);

        }finally {

            navigate('../')
            window.location.reload()
        }

    }
    const  addToPlaned=async()=>{
        if(localStorage.getItem("planed" + user.name)!==null)
        if(!inWatchList) {
            localStorage.setItem("planed" + user.name, localStorage.getItem("planed" + user.name) + "," + filmData.id)
            setInWatchList(true)
        }

        console.log("status planed"+localStorage.getItem("planed"+user.name))


    }
    const  addToWatched=async()=>{
        if(localStorage.getItem("watched" + user.name)!==null)
        if(!inWatchedList) {
            localStorage.setItem("watched" + user.name, localStorage.getItem("watched" + user.name) + "," + filmData.id)
            setInWatchedList(true)
        }

        console.log("status watched"+localStorage.getItem("watched"+user.name))

    }
    const removeFromWatched = ()=>{

        localStorage.setItem("watched" + user.name, localStorage.getItem("watched" + user.name).replace("," + filmData.id,"") )
        setInWatchedList(false)
    }
    const removeFromPlaned = ()=>{

        localStorage.setItem("planed" + user.name, localStorage.getItem("planed" + user.name).replace("," + filmData.id,"") )
        setInWatchList(false)
    }



    return (
        <div className={"filmContainer"}>
            <div className={"filmPageImageContainer"}>
                <img className={"filmPageImage"} src={filmData.imageURL} alt="Film Cover" />
                {token !== "" ? (
                    <div className={"buttonsContainer"}>
                        <button className={"btn btn-danger ButtonFilmPage"} onClick={deleteMovie}>
                            Delete movie
                        </button>
                        {!inWatchedList ? (
                            <button className={"btn btn-primary ButtonFilmPage"} onClick={addToWatched}>
                                Add to Watched
                            </button>
                        ) : (
                            <button className={"btn btn-danger ButtonFilmPage"} onClick={removeFromWatched} >
                                Remove from Watched
                            </button>
                        )}
                        {!inWatchList ? (
                            <button className={"btn btn-primary ButtonFilmPage"} onClick={addToPlaned}>
                                 Add to Watchlist
                            </button>
                        ) : (
                            <button className={"btn btn-danger ButtonFilmPage"} onClick={removeFromPlaned}>
                                Remove from Watchlist
                            </button>
                        )}
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div className={"filmPageInfoContainer"}>
                <div className={"filmInfo"}>
                    <p className={"filmSpecType"}>Tittle:</p>
                    <p className={"filmSpec"}>{filmData.title}</p>
                </div>
                <div className={"filmInfo"}>
                    <p className={"filmSpecType"}>Genre:</p>
                    <p className={"filmSpec"}>{filmData.genre}</p>
                </div>
                <div className={"filmInfo"}>
                    <p className={"filmSpecType"}>Rating:</p>
                    <p className={"filmSpec"}>{filmData.rating}</p>
                </div>
                <div className={"filmInfo"}>
                    <p className={"filmSpecType"}>Production Year:</p>
                    <p className={"filmSpec"}>{filmData.productionYear}</p>
                </div>
                <div className={"filmInfo"} style={{ display: "block" }}>
                    <p className={"filmSpecType"}>Description:</p>
                    <p className={"filmSpec description"}>{filmData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FilmPage;