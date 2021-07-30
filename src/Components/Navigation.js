import React from 'react'
import '../css/Navigation.css'

export default function Navigation() {

    function displayFilters(e) {
        console.log(e.target.id);
        if(e.target.id==="rotationNav") {
            document.getElementById('rotation').style.display='block'
            document.getElementById('adjustment').style.display='none'
            document.getElementById('size').style.display='none'
        }
        else if(e.target.id==="sizeNav"){

            document.getElementById('size').style.display='block'
            document.getElementById('rotation').style.display='none'
            document.getElementById('adjustment').style.display='none'
        }
        else {
            document.getElementById('rotation').style.display='none'
            document.getElementById('size').style.display='none'
            document.getElementById('adjustment').style.display='block'
        }
    }
    return (
        <div>
            <nav>
                <ul>
                    <li id="rotationNav" onClick={displayFilters}>Rotation</li>
                    <li id="adjustmentNav" onClick={displayFilters}>Adjustment</li>
                    <li id="sizeNav" onClick={displayFilters}>Size</li>
                </ul>
            </nav>
        </div>
    )
}
