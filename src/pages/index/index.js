import React from "react";
import MovieItem from "../../components/movie-item";
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
//   } from 'react-router-dom';
// import MovieDetail from "../../components/movie-detail";

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moiveInfo:[]
        }
    }

    componentDidMount() {
        let that = this
        fetch('http://192.168.1.108:3000/index',{mode: "cors"})
        .then(response => { console.log(response);return response.text()})
        .then(json => {
            console.log(json)
            that.setState({
                moiveInfo: JSON.parse(json)
            })            

        })
    }

    render() {
        let movieItemList = []; 
        if( this.state.moiveInfo.length > 0 ){
            movieItemList = this.state.moiveInfo.map((v,i)=>{
                return (
                    <MovieItem title={v.title} id={i} key={i}/>
                )
            });
        }
        // console.log(movieItemList)
        let divStyle = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            backgroundColor: "#233",
            padding: "50px"
        }
        return (
        //    <Router>
                <div style={divStyle}>
                    {movieItemList}
                    {/* <Route path="/:id" component={MovieDetail}/> */}
                </div>
        //    </Router>
        )
    }
}  