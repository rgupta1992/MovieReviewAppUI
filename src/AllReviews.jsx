/**
 * Created by madhubhushan on 1/27/2017.
 */
import React from 'react';


var AllReviews = React.createClass({
    render(){
        var selectedMovie = this.props.currentMovieName;
        console.log("All Review: Before render" + selectedMovie);
        if(this.props.appData != '' && this.props.appData != undefined && this.props.appData != null) {

            console.log("Inside All Reviews:" + this.props.appData);
            console.log("Inside All Reviews: SelectedMovieName" + this.props.currentMovieName);
            var allReviews = this.props.appData.map(function (ReviewData) {
                console.log("All Review: Single Movie:" + ReviewData);
                var statusGood = <span><img src="./img/good.png" height="20px" width="20px"/> </span>
                var statusBad = <span><img src="./img/bad.png" height="25px" width="25px"/> </span>
                var smileGood = <span><img src="./img/smileyup.png" height="40px" width="40px"/> </span>
                var smileBad = <span><img src="./img/smileydown.png" height="35px" width="35px"/> </span>
                var status;
                var smile;
                console.log("ReviewData: Before if:" + ReviewData.review);

                if (ReviewData.movieName == selectedMovie) {

                    if (ReviewData.isPositive == "ThumbsUp") {
                        status = statusGood;
                        smile = smileGood;
                    }
                    else {
                        status = statusBad;
                        smile = smileBad;
                    }

                    const spanStyle = {
                        display: 'block',
                        float: 'right'
                    };
                    return (
                        <div>
                            <span>{ReviewData.review}</span>
                            <span style={spanStyle}>
                                {status} {smile}
                            </span>
                            <hr/>
                        </div>
                    );
                }
            });

            if (allReviews != '' && allReviews != undefined && allReviews != null) {
                return (
                    <div >
                        <div className="well">
                            <h4>Reviews</h4>
                            <hr/>
                            <div>
                                {allReviews}
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return (
                <div >
                    <div className="well">
                        <h4>Reviews</h4>
                        <hr/>
                        <div>
                            No Reviews for this movie till now..
                            be the first to write one..
                        </div>
                    </div>
                </div>
                );
            }
        }

        else{
            return (
                <div >
                    <div className="well">
                        <h4>Reviews</h4>
                        <hr/>
                        <div>
                            Click on any movie to load the Reviews...
                        </div>
                    </div>
                </div>
            );
        }

    }
});

export default AllReviews;

/*
var status = ReviewData.isPositive ? statusGood : statusBad;
var smile = ReviewData.isPositive ? smileGood : smileBad;*/

/*
else{
    <div >
        <div className="well">
            <h4>Reviews</h4>
            <hr/>
            <div>
                No Reviews for this movie till now..
                be the first to write one..
            </div>
        </div>
    </div>
}
}*/
