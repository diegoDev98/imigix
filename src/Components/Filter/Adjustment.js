import React from 'react';

const minMax = [
    {min:-100,max:100,names:['Vibrance','Brightness','Contrast','Exposure','Gamma','Saturation','Unsharp Mask'],id:['vib','bri','con','exp','gam','sat','usm']},
    {min:0,max:500,names:['Unsharp Mask Radius'],id:['usmrad']},
    {min:-100,max:0,names:['Highlight'],id:['high']},
    {min:0,max:360,names:['Hue'],id:['hue']},
    {min:0,max:1,names:['Invert'],id:['inv']},
    {min:0,max:100,names:['Shadow','Sharpen'],id:['shad','sharp']}
]
    

function Adjustment(props) {
    return (
    <div>
        {minMax.map(item=>{
            return (
                <div>
                    {
                       item.names.map(el=>{
                        return(
                               <div>
                                   <label htmlFor={el}>{el}:</label>
                                    <input type="number" min={item.min} max={item.max} id={el} onChange={props.handleUrl}/>
                                </div>
                        )
                     }) 
                    }
                </div>
            )
        })}
    </div>
    )
}

export default Adjustment;