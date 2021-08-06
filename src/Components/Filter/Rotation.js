import React from 'react';

function Rotation(props) {
    return (
        <div>
        <div className="flip">
        <label htmlFor="flip">Flip:</label>
            <select name="flip" id="flip" onChange={props.handleUrl}>
                <option value="none">None</option>
                <option value="h">H</option>
                <option value="v">V</option>
                <option value="hv">HV</option>
            </select>
        </div>
        <div className="orient">
            <label htmlFor="orient">Orientation:</label>
            <select name="orient" id="orient" onChange={props.handleUrl}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="90">90</option>
                <option value="180">180</option>
                <option value="270">270</option>
            </select>
        </div>
        <div className="rot">
            <label htmlFor="rot">Rotation:</label>
            <input type="number" min="0" max="359" id="rot" onChange={props.handleUrl}/>
        </div>
    </div>

    );
}

export default Rotation;