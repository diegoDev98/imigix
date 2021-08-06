import React from 'react';

function Size(props) {
    return (
        <div >
            <div className="height">
                <label htmlFor="h">height:</label>
                <input type="number" min="0" max="1920" id="h" onChange={props.handleUrl}/>
            </div>
            <div className="width">
                <label htmlFor="w">Width:</label>
                <input type="number"  min="0" max="1980" id="w" onChange={props.handleUrl}/>
            </div>
        </div>
    );
}

export default Size;