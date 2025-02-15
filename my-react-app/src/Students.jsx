import propTypes from 'prop-types'

function Students(props){
    return(
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Department : {props.department}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ?"yes" : "No"}</p>
        </div>
    )
}

Students.propTypes = {
    name : propTypes.String,
    department : propTypes.String,
    age : propTypes.intger
}

Students.defaulprops = {
    name : "Guest", 
    age : 0 ,
    isStudent : false,
}
export default Students;