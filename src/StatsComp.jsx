/**
 * Created by madhubhushan on 1/27/2017.
 */
import React from 'react';
import {calculateRating} from '../src/util/MRAUtil.js';

var Rating = require('react-rating');
var PolarAreaChart = require("react-chartjs").PolarArea;

var StatsComponent = React.createClass({
    render(){
        if(this.props.appData != '' && this.props.appData != undefined && this.props.appData != null) {
            const chartData = [
                {
                    value: this.props.appData.reviewsCount.goodCount,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Good"
                },
                {
                    value: this.props.appData.reviewsCount.badCount,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Bad"
                }
            ];
            var rating = calculateRating(this.props.appData.reviewsCount);
            return (
                <div id="stats-frame" className="well">
                    <h4>Overall Review Rating</h4>
                    <hr />
                    <PolarAreaChart data={chartData}/>
                    <div>
                        <Rating initialRate={rating} fractions={1} readonly={true} start={0} stop={5}
                                step={1} empty={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                            'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                            'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
                                full={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                                    'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                    'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}/>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div >
                    <div id="stats-frame" className="well">
                        <h4>Overall Review Rating</h4>
                        <hr/>
                        <div>
                            Click on any movie to load the Rating statistics...
                        </div>
                    </div>
                </div>
            );
        }
    }
});

export default StatsComponent;