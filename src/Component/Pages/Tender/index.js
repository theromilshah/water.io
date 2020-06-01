import React from 'react'

export default class Tender extends React.Component{
    render(){
        return(
            <div>
                <div class="bread"><nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item "><a href="tender.html">Archive Tenders</a></li>
          <li class="breadcrumb-item active" aria-current="page">Active Tenders</li>
        </ol>
      </nav>
       </div>
  <div class="contain" >
        <div class="heads"><h1 style={{fontFamily: "sans-serif", lineHeight: "3vw"}}>ARCHIVE TENDERS</h1></div>
        <ul type="disc">
          <li style={{backgroundColor: "gray"}}>
        <div class="tends"><a class="link" href="http://mowr.gov.in/sites/default/files/Tender_CWDT_Oct_2018.pdf">Short term tender notice for auction of old & used T&P and miscellaneous items in Cauvery Water Disputes Tribunal</a></div>
            </li>
        <li style={{backgroundColor: "lightgray"}}><div class="tends"><a class="link" href="http://mowr.gov.in/sites/default/files/filefield_paths/Tender_Document_VWDT_Sep_2018_1.pdf">Short term tender notice for auction of old & used miscellaneous items in Vansadhara Water Disputes Tribunal (Last Date: 10.12.2018)</a></div></li>
        <li style={{backgroundColor: "gray"}}><div class="tends"><a class="link" href="http://mowr.gov.in/sites/default/files/CWDT-Sep2018.pdf">Tender Notice for Sale of Old & used misc items of Cauvery Water Disputes Tribunal</a></div></li>
 </ul>
      </div>
            </div>
        )
    }
}