import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

export default class Footer extends React.Component{
    render(){
        return(
            <div style={{width:"100%",height:"16vw",backgroundColor:"rgb(31, 31, 31)"}}>
                <div style={{padding:"1.3vw"}}>
                    <div style={{textAlign:"center"}}>
                        <ul id="footerlist">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/"><li>Tender</li></Link>
                            <Link to="/"><li>Terms Of Use</li></Link>
                            <Link to="/About"><li>Contact Us</li></Link>
                            <Link to="/"><li>Feedback</li></Link>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}