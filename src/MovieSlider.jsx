/**
 * Created by madhubhushan on 1/27/2017.
 */
import React from 'react';

var MovieSlider = React.createClass({
    handleClick(e){
        this.props.getMovieName(e.target.id);
        console.log(e.target.id);
    },

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="latest-product">
                        <br /><br />
                        <h2 className="section-title">Movies</h2>
                        <div className="product-carousel">
                            <div className="single-product">
                                <div className="product-f-image">
                                    <img  id="Dr. Strange" src="./img/drstrange.jpg" alt="" onClick={this.handleClick}/>
                                </div>
                                <h2>Dr. Strange</h2>
                            </div>
                            <div className="single-product">
                                <div className="product-f-image">
                                    <img id="Batman Vs Superman" src="./img/bvs.jpg" alt="" onClick={this.handleClick}/>
                                </div>
                                <h2>Batman Vs Superman</h2>
                            </div>
                            <div className="single-product">
                                <div className="product-f-image">
                                    <img id="Conjuring 2" src="./img/conjuring.jpg" alt="" onClick={this.handleClick}/>
                                </div>
                                <h2>Conjuring 2</h2>
                            </div>
                            <div className="single-product">
                                <div className="product-f-image">
                                    <img id="The Jungle Book" src="./img/thejunglebook.jpg" alt="" onClick={this.handleClick}/>
                                </div>
                                <h2>The Jungle Book</h2>
                            </div>

                            <div className="single-product">
                                <div className="product-f-image">
                                    <img id="Lights Out" src="./img/lightsout.jpg" alt="" onClick={this.handleClick}/>
                                </div>
                                <h2>Lights Out</h2>
                            </div>
                            <div className="single-product">
                                <div className="product-f-image">
                                    <img id="Alice in Wonderland" src="./img/alice.jpg" alt="" onClick={this.handleClick}/>
                                </div>
                                <h2>Alice in Wonderland</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default MovieSlider;