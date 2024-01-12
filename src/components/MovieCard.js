import React from "react";
import Card from "react-bootstrap/Card";
import placeholder from "../res/logo1.png";
import movieCardStyle from "../styles/movieCardStyles.css";
import { Link } from "react-router-dom";

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            director: props.director,
            id: props.id,
            img: props.imgSrc,
            genre: props.genre,
            productionYear:props.productionYear,
            rate:props.rate,
        };
    }

    render() {
        return (
            <Link to={`../movie/${this.state.id}`} className={"movieCardContainer"}>
                <Card
                    className={"card"}
                    style={{ width: "200px", height: "400px", backgroundColor:"#1B292FFF"}}
                >
                    <Card.Img className={"card_img"} variant="top" src={this.state.img} />
                    <Card.Body >
                        <Card.Title style={{color:"white"}} className={"cardText"}>{this.state.title}</Card.Title>
                        <Card.Text style={{color:"white"}} className={"cardTextSmall"}>
                            {this.state.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        );
    }
}

export default MovieCard;