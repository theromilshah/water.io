import React from 'react'
import {Link} from 'react-router-dom'
import firstslide from '../../images/imagebar/firstslide.jpg'
import secondslide from '../../images/imagebar/secondslide.jpg'
import thirdslide from '../../images/imagebar/thirdslide.jpg'
import './imagebar.css'

export default class ImageBar extends React.Component{
    render(){
        return(
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a target="_blank" href='https://transformingindia.mygov.in/'>
                            <img className="d-block w-100" src={firstslide} alt="First slide"/>
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a target="_blank" href='https://www.mygov.in/task/national-water-awards/'>
                            <img className="d-block w-100" src={secondslide} alt="Second slide"/>
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a target="_blank" href='https://gandhi.gov.in/'>
                            <img className="d-block w-100" src={thirdslide} alt="Third slide"/>
                        </a>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}