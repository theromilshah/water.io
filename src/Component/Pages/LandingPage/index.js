import React from 'react'
import NavBar from '../../Reusables/NavBar'
import ListBar from '../../Reusables/ListBar'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Home from '../Home/index'
import Tender from '../Tender/index'
import About from '../About/index'
import Footer from '../../Reusables/footer'
import './footer.css'
import {Button} from '@material-ui/core'
import logoz from './logo.jpg'

export default class LandingPage extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    {/*<div style={{position:"absolute",zIndex:"-1",width:"100%",height:"100%",background: "linear-gradient(135deg, rgb(200,200,200) 0%,  #283593 100%)"}}>
                    <Particles width="100%" height="100%" style={{top:'0', bottom:'0', left:'0', right:'0', position: 'absolute'}}
                    params={{
                        "particles": {
                            "number": {
                                "value": 150
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                                // "onclick": {
                                //     "enable": true,
                                //     "mode": "repulse"
                                // }
                            }
                        }
                    }} />
                </div>*/}
                    <NavBar/>
                    <ListBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/tender" component={Tender}/>
                        <Route exact path="/About" component={About}/>
                    </Switch>
                    <div>
                    <footer class="footer-distributed">

                    <div class="footer-left">
            
                        <img src={logoz} style={{width:"150px",height:"40px"}} />
            
                        {/*<h3>Company<span>logo</span></h3> */}
            
                        <p class="footer-links">
                            <a href="#">Home</a>
                            ·
                            <a href="#">Tender</a>
                            ·
                            <a href="#">About Us</a>
                            ·
                            <a href="#">Contact Us</a>
                        </p>
            
                        <p class="footer-company-name">Water.IO &copy; 2019</p>

                    
                        <a style={{textDecoration:"none",marginTop:"30px",}} href="/admin/login">
                            <Button style={{backgroundColor:"rgb(1, 87, 155)"}}>Admin Login</Button>
                        </a>

                    </div>

            
                    <div class="footer-center">
            
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p><span>No. U-15, J.V.P.D. Scheme,Bhaktivedanta Swami Rd</span> Vile Parle, Mumbai, Maharashtra 400056</p>
                        </div>
            
                        <div>
                            <i class="fa fa-phone"></i>
                            <p>+91-88551 95847</p>
                        </div>
            
                        <div>
                            <i class="fa fa-envelope"></i>
                            <p><a href="mailto:support@water.io.com">support@water.io.com</a></p>
                        </div>
            
                    </div>
            
                    <div class="footer-right">
            
                        <p class="footer-company-about">
                            <h3><span>About the company</span></h3>
                           <h5 style={{color:"white"}}>This was made for Smart India Hackathon 2019 - Software Edition</h5>   
                        </p>
            
                        <div class="footer-icons">
            
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-github"></i></a>
            
                        </div>
            
                    </div>
            
                </footer>
                    </div>

                </div>
            </BrowserRouter>
        )
    }
}