/**
 * Created by madhubhushan on 1/27/2017.
 */
import React from 'react';
import {TagCloud} from 'react-tagcloud';

var WordCloudComponent = React.createClass({
    render(){
        const data = [
            { value: "Zootopia", count: 10 }, { value: "Star Wars", count: 13 },
            { value: "Deadpool", count: 15 },{ value: "Alice in Wonderland", count: 7 },
            { value: "Suicide Squad", count: 12 }, { value: "Captain America", count: 8 },
            { value: "La La Land", count: 13 }, { value: "Moana", count: 9 },
            { value: "Kungfu Panda", count: 14 }, { value: "Star Trek", count: 13 },
            { value: "Arrival", count: 12 }, { value: "X Men", count: 16 },
            { value: "Dr Strange", count: 14 }, { value: "Moonlight", count: 7 },
            { value: "The Jungle Book", count: 13 }, { value: "Lights Out", count: 11 }
        ];

        const options = {
            luminosity: 'light',
            hue: 'blue'
        };
        if(this.props.appData != '' && this.props.appData != undefined && this.props.appData != null) {
            return (
                <div id="wordcloud-frame" className="well">
                    <TagCloud minSize={12}
                              maxSize={35}
                              colorOptions={options}
                              tags={this.props.appData.cloudTagData}/>
                </div>
            );
        }
        else {
            return (
                <div id="wordcloud-frame" className="well">
                    <TagCloud minSize={12}
                              maxSize={35}
                              colorOptions={options}
                              tags={data}/>
                </div>
            );
        }
    }
});

export default WordCloudComponent;
