import React from 'react'
import '../css/Filters.css'

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

        {/*SIZE SECTION */} 
            <div id="rotation" style={{display:'none'}}>
                <div className="flip">
                <label htmlFor="flip">Flip:</label>
                    <select name="flip" id="flip" onChange={handleUrl}>
                        <option value="none">None</option>
                        <option value="h">H</option>
                        <option value="v">V</option>
                        <option value="hv">HV</option>
                    </select>
                </div>
                <div className="orient">
                    <label htmlFor="orient">Orientation:</label>
                    <select name="orient" id="orient" onChange={handleUrl}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="90">90</option>
                        <option value="170">170</option>
                        <option value="280">280</option>
                    </select>
                </div>
                <div className="rot">
                    <label htmlFor="rot">Rotation:</label>
                    <input type="number" min="0" max="359" id="rot" onChange={handleUrl}/>
                </div>
            </div>

            {/*SIZE SECTION */}
            <div id="size" style={{display:'none'}}>
            <div className="height">
                    <label htmlFor="h">height:</label>
                    <input type="number" min="0" max="1920" id="h" onChange={handleUrl}/>
                </div>
            <div className="width">
                    <label htmlFor="w">Width:</label>
                    <input type="number"  min="0" max="1980" id="w" onChange={handleUrl}/>
                </div>
            </div>

            {/*ADJUSTMENT SECTION */} 
            <div id="adjustment" style={{display:'none'}}>
                <div className="bri">
                    <label htmlFor="bri">Brightness:</label>
                    <input type="number" min="-100" max="100" id="bri" onChange={handleUrl}/>
                </div>
                <div className="con">
                    <label htmlFor="bri">Contrast:</label>
                    <input type="number" min="-100" max="100" id="con" onChange={handleUrl}/>
                </div>
                <div className="exp">
                    <label htmlFor="bri">Exposure:</label>
                    <input type="number" min="-100" max="100" id="exp" onChange={handleUrl}/>
                </div>
                <div className="gam">
                    <label htmlFor="bri">Gamma:</label>
                    <input type="number" min="-100" max="100" id="gam" onChange={handleUrl}/>
                </div>
                <div className="high">
                    <label htmlFor="bri">Highlight:</label>
                    <input type="number" min="-100" max="0" id="high" onChange={handleUrl}/>
                </div>
                <div className="hue">
                    <label htmlFor="bri">Hue:</label>
                    <input type="number" min="0" max="360" id="hue" onChange={handleUrl}/>
                </div>
                <div className="invert">
                    <label htmlFor="bri">Invert:</label>
                    <input type="number" min="0" max="1" id="invert" onChange={handleUrl}/>
                </div>
                <div className="sat">
                    <label htmlFor="bri">Saturation:</label>
                    <input type="number" min="-100" max="100" id="sat" onChange={handleUrl}/>
                </div>
                <div className="shad">
                    <label htmlFor="bri">Shadow:</label>
                    <input type="number" min="0" max="100" id="shad" onChange={handleUrl}/>
                </div>
                <div className="sharp">
                    <label htmlFor="bri">Sharpen:</label>
                    <input type="number" min="0" max="100" id="sharp" onChange={handleUrl}/>
                </div>
                <div className="usm">
                <label htmlFor="bri">Unsharp Mask:</label>
                    <input type="number" min="-100" max="100" id="usm" onChange={handleUrl}/>
                </div>
                <div className="usmrad">
                    <label htmlFor="bri">Unsharp Mask Radius:</label>
                    <input type="number" min="0" max="500" id="usmrad" onChange={handleUrl}/>
                </div>
                <div className="vib">
                    <label htmlFor="bri">Vibrance:</label>
                    <input type="number" min="-100" max="100" id="vib" onChange={handleUrl}/>
                </div>
            </div>
        </div>
    )
}
