import React from "react";
import Card from "react-bootstrap/Card";
import placeholder from "../res/logo1.png"
import movieCardStyle from "../styles/movieCardStyles.css"
import {Link} from "react-router-dom";
class MovieCard extends React.Component{




    constructor(props) {
        super(props);
        this.state={
            title:props.title,
            description: props.description,
            director: props.director,
        }

    }
    render() {
        return(

           <Link to={"../movie"} className={"movieCardContainer"}>

                <Card  className={"card"}>
                    <Card.Img className={"card_img"} variant="top" src={placeholder} />
                    <Card.Body>
                        <Card.Title className={"cardText"}>{this.state.title}</Card.Title>
                        <Card.Text className={"cardTextSmall"}>
                            {this.state.description}
                        </Card.Text>
                    </Card.Body>
                </Card>


           </Link>

        )
    }
}
export default MovieCard