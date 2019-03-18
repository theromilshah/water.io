import React from 'react'
import aby from '../../../images/aby.jpg'
import './fourimg.css'

export default class Fourimg extends React.Component{
    render(){
        return(
            <div style={{padding:"2.4vw 2.4vw",overflow:"hidden"}}>
                <div className="proj">
                    <img style={{width:"37vw",height:"19.37vw",float:"left"}} src={aby} alt="Atal Bhujal Yojana"/>
                    <div className="proj_head">
                        <h3>Atal Bhujal Yojana (ABHY)</h3>
                        <h4> National Groundwater Management Improvement Program </h4>
                        <p>The development objective of Atal Bhujal Yojana (ABHY) - National Groundwater Management Improvement Program for India is to improve the management of groundwater resources in selected states.
                         The activities under the program are mapped to the two results areas.....
                          To continue reading ,please download the .pdf format of the file from the link given below</p>
                        <a target="_blank" href="http://documents.worldbank.org/curated/en/697581528428694246/pdf/India-PAD-126071-IN-05162018.pdf">
                            Click here to download the pdf file
                        </a>
                    </div>
                </div>
                <div className="proj">
                    <img style={{width:"37vw",height:"19.37vw",float:"right"}} src={aby} alt="Atal Bhujal Yojana"/>
                    <div className="proj_head" style={{paddingLeft:0}}>
                        <h3>Atal Bhujal Yojana (ABHY)</h3>
                        <h4> National Groundwater Management Improvement Program </h4>
                        <p>The development objective of Atal Bhujal Yojana (ABHY) - National Groundwater Management Improvement Program for India is to improve the management of groundwater resources in selected states.
                         The activities under the program are mapped to the two results areas.....
                          To continue reading ,please download the .pdf format of the file from the link given below</p>
                        <a target="_blank" href="http://documents.worldbank.org/curated/en/697581528428694246/pdf/India-PAD-126071-IN-05162018.pdf">
                            Click here to download the pdf file
                        </a>
                    </div>
                </div>
                        
                            
            </div>
        )
    }
}