import React, { useState } from "react"


/*
function ArrayUpdate() {

    const [foods, setFoods] = useState(["grapes", "mango", "gauva"])

    function HandleAddedFood(event) {
        // setFoods( ...foods , event.target.value)
        const newFood = document.getElementById("foodInput").value.trim() // trim to remove extra space
        document.getElementById("foodInput").value = ""
            

        if ( newFood !== ""){
        setFoods(f => [...f, newFood])
        }
    }

    function HandleRemovedFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }
        
    return (
        <div>
            <h2>list of food </h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => HandleRemovedFood(index)}>
                        {food}
                    </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="which food you want to add" />
            <button onClick={HandleAddedFood} >Add </button>
        </div>
    )

}

*/
//  ARRAY OF OBJECTS 

function ArrayUpdate() {
    const [cars, setCar] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")


    function HandleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel }
        setCar(c => [...c , newCar] )
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")

    }

    function HandleRemoveCar() {
        setCar(c => c.filter(element , i) !== index)
    }

    function HandleYearChange(event) {
        setCarYear(event.target.value)
    }

    function HandleMakeChange(event) {
        setCarMake(event.target.value)

    }

    function HandleModelChange(event) {
        setCarModel(event.target.value)
    }

    return (
        <div>
            <h2> car collection</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={ () => HandleRemoveCar}> {car.year}  {car.make} {car.model}
                    </li>)}
            </ul>
            <div className="car-input">
                <input type="number" value={carYear} onChange={HandleYearChange} />
                <input type="text" value={carMake} placeholder="enter car make" 
                       onChange={HandleMakeChange} />
                <input type="text" value={carModel} placeholder="enter car model" 
                       onChange={HandleModelChange} />
            </div>
            <button onClick={HandleAddCar}>Add car</button>
        </div>
    )
}


export default ArrayUpdate