import React, {useEffect, useState} from "react";
import filmPageStyles from "../styles/filmPageStyles.css";
import placeholder from "../res/logo1.png";
import commonStyles from "../styles/commonStyles.css";
import {useNavigate, useParams} from "react-router-dom";

const FilmPage = () => {
    const { id } = useParams()
    const navigate=useNavigate()
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
                console.log(data);
                updateFilmData(data)
            })

            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    });



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


    return (
        <div className={"filmContainer"}>
            <div className={"filmPageImageContainer"}>
                <img className={"filmPageImage"} src={filmData.imageURL} alt="Film Cover" />

                <button  className={"btn btn-danger"} onClick={deleteMovie}>
                    delete movie
                </button>
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