// import ProfilePic from './assets/intel.png';
import './static/Card.css'

function Card() {
    return (
        <div className="card-container">
            <img src="src/assets/intel.png" alt="Profile" className="profile-pic" />
            <h2 className="heading">This is me the coder</h2>
            <p className="description">Hello, I love to play video games, and there's no other option to live my life.</p>
        </div>
    );
}

export default Card