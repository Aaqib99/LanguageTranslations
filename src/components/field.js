import React from 'react'
import Flower from './svg/flower'

function Field({ value, onChange }) {
    // console.log("onChange prop:", onChange); 
    return (
        <>
            <div className='field'>
                {/* <Flower className="flower-right" fill="rgb(110, 146, 119)" /> */}
                {/* <Flower className="flower-left" fill="rgb(249, 148, 59)" /> */}
                <h1>Translate App</h1>
                <label>Enter English</label>
                <input
                    type='text'
                    className='input'
                    value={value}
                    onChange={(e)=> onChange(e.target.value)}
                />
            </div>
        </>
    )
}

export default Field