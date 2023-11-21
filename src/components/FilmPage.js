import React from "react";
import filmPageStyles from "../styles/filmPageStyles.css"
import placeholder from "../res/logo1.png"
import commonStyles from "../styles/commonStyles.css"

class FilmPage extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            title:"Tytuł filmu:film",
            director:" rzeszyser 1",
            description:"lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum  lorem impsum ",
            rating:4.2,
        }
    }

    render() {
        return (
            <div className={"filmContainer"}>
                <div className={"filmPageImageContainer"}>
                    <img className={"filmPageImage"} src={placeholder}/>
                </div>
                <div className={"filmPageInfoContainer"}>
                    <h3 className={"headingLeft"}>Tittle:{this.state.title}</h3>
                    <h3 className={"headingLeft"}>Tittle:{this.state.director}</h3>
                    <h3 className={"headingLeft"}>Tittle:{this.state.description}</h3>
                    <h3 className={"headingLeft"}>Rating:{this.state.rating}</h3>

                </div>
            </div>
        )
    }


}

export default FilmPage