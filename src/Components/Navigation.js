import React from 'react'
import '../css/Navigation.css'

export default function Navigation(props) {

    return (
        <div>
            <nav>
                <ul>
                    <li id="rotationNav" onClick={()=> {
                        props.setRotation(true)
                        props.setAdjustment(false)
                        props.setSize(false)
                    }}> Rotation</li>
                    <li id="adjustmentNav" onClick={()=> {
                        props.setRotation(false)
                        props.setAdjustment(true)
                        props.setSize(false)
                    }}> Adjustment</li>
                    <li id="sizeNav" onClick={()=> {
                        props.setRotation(false)
                        props.setAdjustment(false)
                        props.setSize(true)
                    }}> Size</li>

                   
                </ul>
            </nav>
        </div>
    )
}
