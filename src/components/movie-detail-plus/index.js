import React from "react";

const imgStyle = {
    height: "400px",
    width: "300px"
}
const MovieDetailPlus = ({movieDetail})=>(
    <div>
        <h3>movieDetail</h3>
        <img src={movieDetail.imgUrl} style={imgStyle}/>
        <h4 >Download Address:</h4>
        <p>{movieDetail.movieSrc}</p>
    </div>
)

export default MovieDetailPlus;

