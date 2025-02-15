
import React, { useState } from "react"



function ColorPicker() {

    const [color, setColor] = useState("#FFFFF")

    function handleColorChange(event) {
        setColor(event.target.value)
    }

    return (
        <>
            <div className="color-picker-container">
                <h1>color picker</h1>
                <div className="color-display" style={{ backgroundColor: color }}>
                    <p> <b> selected colour : {color}</b></p>
                </div>
                <label>set color : </label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </>
    )
}

export default ColorPicker