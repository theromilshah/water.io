import React from 'react'
import ImageBar from '../../Reusables/ImageBar'
import Fourimg from './fourimg'
import Services from './services'
import Nitin from '../../../images/nitin gadkari.jpg'
import Satyapal from '../../../images/satyapal.jpg'
import Arjun from '../../../images/arjun.jpg'
import News from './new'
import './index.css'

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <ImageBar/>
                <div style={{backgroundColor:'#fff',width:"100%",height:"11.3vw",textAlign:"center"}}>
                    <div id="cabinet">
                        <div className="ministers">
                            <img src={Satyapal} alt="Dr. Satya Pal Singh"/>
                            <h3>Hon'ble MoS</h3>
                            <p>Dr. Satya Pal Singh</p>
                        </div>
                        <div className="ministers">
                            <img src={Nitin} alt="Shri Nitin Jairam Gadkari"/>
                            <h3>Hon'ble Minister</h3>
                            <p>Shri Nitin Jairam Gadkari</p>
                        </div>
                        <div className="ministers">
                            <img src={Arjun} alt="Shri Arjun Ram Meghwal"/>
                            <h3>Hon'ble MoS</h3>
                            <p>Shri Arjun Ram Meghwal</p>
                        </div>
                    </div>
                </div>
                <div id="parallax1">
                    <h1 style={{fontFamily:"Georgia, serif"}}>Projects</h1>
                </div>
                <Fourimg/>
                <div id="parallax2">
                    <h1 style={{fontFamily:"Georgia, serif"}}>Services</h1>
                </div>
                <Services/>
                <div id="parallax3">
                    <h1 style={{fontFamily:"Georgia, serif"}}>News</h1>
                </div>
                <div>
                <div style={{fontFamily:"Georgia, serif"}}>
                  <News/>
                </div>
              </div>
            </div>
        )
    }
}