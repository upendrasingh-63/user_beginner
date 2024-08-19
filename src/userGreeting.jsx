import PropTypes from 'prop-types'

function UserGreeting(props) {   
    const welcome=<h2 className="wel">Welcome {props.name}</h2>;
    const notwel=<h2 className="nwel">Please login to continue</h2>
    return(
        <>
            {props.isloggedin?welcome:notwel}
        </>
    )
}
 UserGreeting.PropTypes={
    isloggedin:PropTypes.bool,
    name:PropTypes.string
 }

 UserGreeting.defaultProps={
    isloggedin:true,
    name:"guest"
 }

export default UserGreeting;