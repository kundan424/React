import React , {useState} from "react";


function MyComponent(){

    /*
    // onclick
    const [name , setName] = useState("Guest");
    const [age , setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false);

    const updateName = () => {
        setName("spongebob");
    }

    const updateAge = () => {
        setAge(age + 1)
    }

    const ToggleEmployStatus = () => {
        setisEmployed(!isEmployed)
    } 

    return(
       
       <div>
             <p> Name : {name} </p>
            <button onClick = {updateName}> set Name </button>
             
             <p> Age : {age} </p>
            <button onClick = {updateAge}> increamentAge </button>
             
             <p> is Employed  : {isEmployed ? "Yes": "No" } </p>
            <button onClick = {ToggleEmployStatus}> Toggle Status </button>
             
        </div>
       
    )
        */
// onchange :-  event handler is primarly used with form elements like  <input> <select> <textarea> <radio>
//             triggers a function every time the value will change 

const [name , setName] = useState("your name");
const [quantity , setQuantity] = useState(1);
const [comment , setComment] = useState("");
const [course , setCourse] = useState("");
const [shipping, setShipping] = useState("");

function nameChangeHandler(event) {
    setName(event.target.value)
}

function quantityChangeHandler(event) {
    setQuantity(event.target.value)
}

function commentHandler( event){
    setComment(event.target.value)
}

function handleCourse(event){
    setCourse(event.target.value)
}

function handleShipping(event){
    setShipping(event.target.value);
}

return(
    <>
    <div>
        <input value={name} onChange={nameChangeHandler} type="text" />
            <p>Name : {name} </p>
    </div>
     
     <div>
        <input type="number" value={quantity} onChange={quantityChangeHandler} />
            <p>Quantity : {quantity}</p>
     </div>

     <div>
        <textarea type="text" value={comment} onChange={commentHandler} placeholder="write your review here" />
            <p> Comment : {comment}</p>
     </div>
    
     <div>
        <select value={course} onChange={handleCourse}>
            <option value="">Select your course</option>
            <option value="Bsc">Bsc</option>
            <option value="BE">BE</option>
            <option value="B.tech">B.tech</option>
        </select>
        <p>course : {course}</p>
     </div>

  
        <label>
            <input type="radio" value = "pick-up"
             checked = {shipping === "pick-up"}
             onChange={handleShipping}/>
             pick-Up
        </label>
        <br />
        <label>
        <input type="radio" value = "delivery"
             checked = {shipping === "delivery"}
             onChange={handleShipping}/>
             Delivery
        </label>
        <p> Shipping : {shipping} </p>

    </>   
)

}

export default MyComponent