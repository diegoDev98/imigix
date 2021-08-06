import React from 'react';

function Adjustment(props) {
    return (
        <div>
        <div className="bri">
            <label htmlFor="bri">Brightness:</label>
            <input type="number" min="-100" max="100" id="bri" onChange={props.handleUrl}/>
        </div>
        <div className="con">
            <label htmlFor="bri">Contrast:</label>
            <input type="number" min="-100" max="100" id="con" onChange={props.handleUrl}/>
        </div>
        <div className="exp">
            <label htmlFor="bri">Exposure:</label>
            <input type="number" min="-100" max="100" id="exp" onChange={props.handleUrl}/>
        </div>
        <div className="gam">
            <label htmlFor="bri">Gamma:</label>
            <input type="number" min="-100" max="100" id="gam" onChange={props.handleUrl}/>
        </div>
        <div className="high">
            <label htmlFor="bri">Highlight:</label>
            <input type="number" min="-100" max="0" id="high" onChange={props.handleUrl}/>
        </div>
        <div className="hue">
            <label htmlFor="bri">Hue:</label>
            <input type="number" min="0" max="360" id="hue" onChange={props.handleUrl}/>
        </div>
        <div className="invert">
            <label htmlFor="bri">Invert:</label>
            <input type="number" min="0" max="1" id="invert" onChange={props.handleUrl}/>
        </div>
        <div className="sat">
            <label htmlFor="bri">Saturation:</label>
            <input type="number" min="-100" max="100" id="sat" onChange={props.handleUrl}/>
        </div>
        <div className="shad">
            <label htmlFor="bri">Shadow:</label>
            <input type="number" min="0" max="100" id="shad" onChange={props.handleUrl}/>
        </div>
        <div className="sharp">
            <label htmlFor="bri">Sharpen:</label>
            <input type="number" min="0" max="100" id="sharp" onChange={props.handleUrl}/>
        </div>
        <div className="usm">
        <label htmlFor="bri">Unsharp Mask:</label>
            <input type="number" min="-100" max="100" id="usm" onChange={props.handleUrl}/>
        </div>
        <div className="usmrad">
            <label htmlFor="bri">Unsharp Mask Radius:</label>
            <input type="number" min="0" max="500" id="usmrad" onChange={props.handleUrl}/>
        </div>
        <div className="vib">
            <label htmlFor="bri">Vibrance:</label>
            <input type="number" min="-100" max="100" id="vib" onChange={props.handleUrl}/>
        </div>
    </div>
    
    );
}

export default Adjustment;