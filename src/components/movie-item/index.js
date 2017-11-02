import React from "react";
import { Link } from "react-router-dom";
import "./movie-item.css";

export default class MovieItem extends React.Component {
    render() {
        let divStyle = {
            height: "200px",
            backgroundColor: "#fff",
            marginBottom: "20px"
        }

        return (
            <div className="item-box" style={divStyle}>
               <div> {this.props.title} </div>
                <div><Link to={"/detail/"+this.props.id} >detail</Link></div>
                {/* <div><Link to={"/detail"} >detail</Link></div>  */}
            </div>
        )
    }
}