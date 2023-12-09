import React from "react";
import filmPageStyles from "../styles/filmPageStyles.css"
import placeholder from "../res/logo1.png"
import commonStyles from "../styles/commonStyles.css"

class FilmPage extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            title: "film",
            director: " rzeszyser 1",
            description: "To ejst opis fimu, słowa o różnej długości aby sprawdzic łamanie lini lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum ",
            rating: 4.2,
        }
    }

    render() {
        return (
            <div className={"filmContainer"}>
                <div className={"filmPageImageContainer"}>
                    <img className={"filmPageImage"} src={placeholder}/>
                </div>
                <div className={"filmPageInfoContainer"}>
                    <div className={"filmInfo"}>
                        <p className={"filmSpecType"}>Tittle:</p>
                        <p className={"filmSpec"}>{this.state.title}</p>
                    </div>
                    <div className={"filmInfo"}>
                        <p className={"filmSpecType"}>Director:</p>
                        <p className={"filmSpec"}>{this.state.director}</p>
                    </div>
                    <div className={"filmInfo"}>
                        <p className={"filmSpecType"}>Rating:</p>
                        <p className={"filmSpec"}>{this.state.rating}</p>
                    </div>

                    <div className={"filmInfo"} style={{display:"block"}}>
                        <p className={"filmSpecType"}>Description:</p>
                        <p className={"filmSpec description"}>{this.state.description}</p>
                    </div>



                </div>
            </div>
        )
    }


}

export default FilmPage