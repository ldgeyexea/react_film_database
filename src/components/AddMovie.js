import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import placeholder from "../res/logo1.png";
import movieCardStyle from "../styles/movieCardStyles.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import loginStyles from "../styles/loginStyles.css";

const AddMovie = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [genre,setGenre]= useState("")
    const [productionYear,setProductionYear]= useState("2023")
    const [rate,setRating]= useState("5")
    const [errorOcured, setErrorOcured] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        //alert("name:"+title+'\n'+"img:"+image+'\n'+"description:"+content)
        if (title === "" || image === "" || content === ""||genre===""||rate===""||productionYear==="") {
            setTitle("");
            setImage("");
            setContent("");
            setRating("5");
            setProductionYear("2023");
            setGenre("")
            setErrorOcured("empty");
        } else {

            try {
                const reqOpts = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({title, image, content,rate,genre,productionYear})
                };
                const response = await fetch('https://at.usermd.net/api/movies', reqOpts);
                const data = await response.json();

                console.log("datafetched:"+data)
            } catch (e) {
                console.error("Error fetching data:", e);
                setTitle("");
                setImage("");
                setContent("");
                setRating("5");
                setProductionYear("2023");
                setGenre("")
                setErrorOcured("error while adding, try again");
            }finally {
                setTitle("");
                setImage("");
                setContent("");
                setRating("5");
                setProductionYear("2023");
                setGenre("")
                setErrorOcured("");
            }
        }
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        if (id === "title") {
            setTitle(value);
        } else if (id === "image") {
            setImage(value);
        }
        else if (id === "content") {
            setContent(value);
        }
        else if (id === "rate") {
            if(value>=1&&value<=10)
            {
                setRating(value);
            }
        }
        else if (id === "genre") {
            setGenre(value)
        }
        else if (id === "productionYear") {
            if(value>=1800&&value<(new Date().getFullYear()+1))
            {
                setProductionYear(value);
            }
        }
    };

    return (
        <div className={"container"}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">image</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        placeholder="imageLink"
                        value={image}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">genre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="genre"
                        placeholder="genre"
                        value={genre}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rate">rating</label>
                    <input
                        type="number"
                        className="form-control"
                        id="rate"
                        placeholder="3"
                        value={rate}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productionYear">production Year</label>
                    <input
                        type="number"
                        className="form-control"
                        id="productionYear"
                        placeholder="2023"
                        value={productionYear}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Dessription</label>
                    <textarea
                        className={"form-control"}
                        placeholder={"description"}
                        id="content"
                        value={content}
                        onChange={handleChange}
                    ></textarea>
                </div>


                    <button type="submit" className={"btn btn-primary"}>
                        add
                    </button>

            </form>
            <h1 style={{ color: 'red' }}>{errorOcured === "" ? "" : "error:" + errorOcured}</h1>
        </div>
    );
};

export default AddMovie;
