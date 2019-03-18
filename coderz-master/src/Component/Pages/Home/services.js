import React from 'react'
import './services.css'
import fcard from '../../../images/graph.png'
import scard from '../../../images/data.jpg'

export default class Services extends React.Component{
    render(){
        return(
            <a  href="user/login" style={{textDecoration:"none",color:"#fff"}}>
                <div id="servicemethod" style={{padding:"2.4vw 2.4vw",backgroundColor:"#eee"}}>
                    <div className="servicecards">
                        <div className="card text-center" style={{width:"25vw",borderRadius:"10px"}}>
                            <img src={fcard} style={{width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}/>
                            <div className="card-body">
                                <h5 className="card-title"> GroundWater Trends</h5>
                                <p className="card-text">Enter to See the ground water level trends of different regions.</p>
                                <a href="#" className="btn btn-primary">Enter Now</a>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div id="visible">
                        <h6>You need to be logged in to access this part</h6>
                        <h6>Click here to Login</h6>
                    </div>
                    <div className="servicecards">
                        <div className="card text-center" style={{width:"25vw",borderRadius:"10px"}}>
                            <img src={scard} style={{width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
                            <div className="card-body">
                                <h5 className="card-title">GroundWater Predicton</h5>
                                <p className="card-text">Enter if you wish to see the ground water level forecast.</p>
                                <a href="#" class="btn btn-primary">Enter Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}