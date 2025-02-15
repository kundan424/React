
import React, { useState } from "react";

function UpdateObjectState() {

    const [car, setCar] = useState({
                                    year: 2025,
                                    make: "ford",
                                    model: "mustung"

                                    })

function handleYearChange(event){
    setCar({...car , year : event.target.value})
}

function handleMakeChange(event){
    setCar({...car , make : event.target.value})
}

function handleModelChange(event){
    setCar({...car , model : event.target.value})
}

    return ( 
        <div> 
            <p> your favourite car is : { car.year} {car.make} {car.model}</p> 
            <div className="car-selctor"> 
                <input type="number" value={car.year} onChange={handleYearChange} />
                <input type="text" value={car.make} onChange={handleMakeChange} />
                <input  value={car.model} onChange={handleModelChange} />
            </div>
        </div>
    )
}

export default UpdateObjectState