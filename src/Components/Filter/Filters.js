import React from 'react'
import '../../css/Filters.css'
import Adjustment from './Adjustment'
import Rotation from './Rotation'
import Size from './Size'

export default function Filters(props) {
    //Initiate object with filters
    let filters ={
        flip: null,orient:null,rot:null,bri:null,con:null,exp:null,gam:null,high:null,hue:null,invert:null,sat:null,shad:null,sharp:null,usm:null,usmrad:null,vib:null,w:500,h:null
    }
    
//function runs onChange of an input tag
//updates filter key
//then maps through each key in filters object and if the value is not null, then it adds it to the queries string
  const handleUrl = (e) => {
      let filter = e.target.id;
      filters[filter] = e.target.value;
      let queries = '';
      for (const [key, value] of Object.entries(filters)) {
        if(value!=null) {
            queries === '' ? queries += '?'+key+'='+value : queries += '&'+key+'='+value 
        }
      }
      document.getElementById('img').src=props.src+queries;   
  }

    return (    
        <div>
            {props.size && <Size handleUrl={handleUrl}/> }
            {props.adjustment && <Adjustment handleUrl={handleUrl}/>}
            {props.rotation &&<Rotation handleUrl={handleUrl}/>}
        </div>
    )
}
