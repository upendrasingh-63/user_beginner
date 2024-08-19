import PropTypes from 'prop-types'

function Student(props) {
    return(
        <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>School: {props.isInSchool?"Yes":"No"}</p>
        <hr/>
        </div>
    );
}

Student.prototype={
    name:PropTypes.string,
    age:PropTypes.number,
    isInSchool:PropTypes.bool
}

Student.defaultProps={
    name:"Guest",
    age:30,
    isInSchool:false
}

export default Student;