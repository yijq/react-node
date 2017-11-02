import React from 'react';

const divStyle = {
    height: "100px",
    width: "100px",
    backgroundColor: "#ff0",
    psition: "absolute",
    top: "0"
}

const MovieDetail = ({match}) => (
    <div style={divStyle}>
        {match.params.id}
    </div>
)

export default MovieDetail;