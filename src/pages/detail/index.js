import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import MovieDetailPlus from "../../components/movie-detail-plus";

export default class DetailPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieDetail: {}
        }
    }
    componentDidMount () {
        let that = this
        let id = this.props.match.params.id
        console.log("match.params.id",id)
        fetch('http://192.168.1.108:3000/detail?id='+id,{mode: "cors"})
        .then(response => { console.log(response);return response.text()})
        .then(json => {
            console.log(json)
            that.setState({
                movieDetail: JSON.parse(json)
            })            

        })
    }
    render() {
        return (
            <MovieDetailPlus movieDetail={this.state.movieDetail} />
        )
    }
}