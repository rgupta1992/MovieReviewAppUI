import React from 'react';
import axios from 'axios';

var DataFromAPI = React.createClass({

    getInitialState(){
        return{
            myData: []
        }
    },

    componentDidMount(){
        axios.get('http://localhost:6060/reviewapplication/webapi/reviewstatus')
            .then((response) => {
                console.log(response.data);
                this.setState({myData : response.data});
            })
            .catch(function (error) {
                console.log(error);
            });

    },
    loadCommentsFromServer: function() {
            console.log("Clicked");
    },

    render(){
        var movieList = this.state.myData.map((eachMovie) =>{

            return(
                <div>
                    Movie Review: <span>{eachMovie.review}</span>
                    IsPositive: <span>{eachMovie.isPositive}</span>
                    <br/>
                    <br/>
                </div>
            );
        });
        return(
            <div>
                <button type="button" onClick={this.loadCommentsFromServer()}>Get Data</button>
                {movieList}
            </div>
        );
    }
});

export default DataFromAPI;