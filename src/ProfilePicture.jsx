

function ProfilePicture(props) {

    const imgurl='./src/assets/profile.png'

    const   handelClick=(e)=>{
        e.target.style.display="none"
    }

    return(<img onClick={(e)=>handelClick(e)} src={imgurl}></img>)
}

export default ProfilePicture;