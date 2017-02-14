import React from 'react';
import {TagCloud} from 'react-tagcloud';
import Slider from 'react-slick';
import axios from 'axios';

import MovieSlider from '../src/MovieSlider.jsx';
import AllReviews from '../src/AllReviews.jsx';
import WordCloudComponent from '../src/WordCloud.jsx';
import StatsComponent from '../src/StatsComp.jsx';
import AddReview from '../src/AddReview.jsx';
import DataFromAPI from '../src/util/DataFromAPI.jsx';

import * as mraUtil from '../src/util/MRAUtil.js';
import * as mappingUtil from '../src/util/MRAMappingUtil.js';

var Rating = require('react-rating');
var PolarAreaChart = require("react-chartjs").PolarArea;

var MovieReview = React.createClass({
    getInitialState(){
        return{
            reviewAppData: '',
            movieName : '',
            reviewTxt : '',
            isVisible : false,
            movieData : []
        };

        this.getCompleteDataFromServer = this.getCompleteDataFromServer.bind();
    },

    /*componentDidMount(){
        axios.get('http://localhost:6060/reviewapplication/webapi/reviewstatus')
            .then((response) => {
                console.log(response.data);
                this.setState({movieData : response.data});
                console.log("Axios : MovieData:" + )
            })
            .catch(function (error) {
                console.log(error);
            });

    },*/

    getDataFromAPI(){
        console.log('in getDataFromAPI  method::', this.state);
        var data2 = mraUtil.getDataFromAPI(this.state.movieName, this.state.reviewTxt);

        reviewAppData = mappingUtil.getReviewAppData(data2);
    },

    getCompleteDataFromServer()
    {
           console.log('in getCompleteDataFromServer  method::', this.state);
            axios.get('http://localhost:6060/reviewapplication/webapi/reviewstatus')
            .then((response) => {
                console.log(response.data);
                this.setState({movieData : response.data});
                console.log("getCompleDataFromServer Movie Data:" + this.state.movieData);
            })
            .catch(function (error) {
                console.log(error);
            });

           var data = mraUtil.getDataFromServer(this.state.movieName, this.state.reviewTxt);

           var reviewAppData = mappingUtil.getReviewAppData(data);
            this.setState({
            reviewAppData : reviewAppData,
            reviewTxt : this.state.reviewTxt
        });

    },

    addReview(newReview)
    {
        console.log('got new review and refreshing things');
        this.setState({
            reviewTxt: newReview,
            isVisible : false
        });

        var url = "http://localhost:6060/reviewapplication/webapi/addreview"+"?movieName=\""+this.state.movieName+"\"&review=\""+ newReview+ "\"";
        console.log(url);
        axios.post(url,{
            movieName: this.state.movieName,
            review : newReview
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.getCompleteDataFromServer();
    },
    
    getMovieName(movie)
    {
        console.log('in get movie name method::', movie);
        this.setState({movieName: movie});
        this.setState({isVisible : true});
        console.log("Before Value" + movie );
        console.log("After Value" + this.state.movieName);
        this.getCompleteDataFromServer();
    },

    render(){
        return (
            <div className="col-lg-12 col-md-12">
                <MovieSlider getMovieName = {this.getMovieName}/>
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                            <AddReview addReview={this.addReview} movieName={this.state.movieName} isVisible={this.state.isVisible}/>
                            <AllReviews appData={this.state.movieData} currentMovieName={this.state.movieName}/>
                    </div>
                    <div className="col-lg-4 col-md-4">
                            <WordCloudComponent appData={this.state.reviewAppData}/>
                            <StatsComponent appData={this.state.reviewAppData}/>
                    </div>

                </div>
            </div>
        );
    }
});

export default MovieReview;


/*
this.setState({
    reviewAppData : reviewAppData,
    reviewTxt : this.state.reviewTxt
});*/
