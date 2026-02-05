import {FaBookmark} from "react-icons/fa"
import './card.css'
function Card({logo,company,time,role,type,level,salary,location}){
    return(
        <div className="card">
            <div className="header">
                <img src={logo}/>
                <button>Save<span><FaBookmark size={10} color="gray" /></span></button>
            </div>
            <div className="content">
                <h3>{company}<span>{time}</span></h3>
                <h2>{role}</h2>
                <div className="tags">
                    <p>{type}</p>
                    <p>{level}</p>
                </div>
                
            </div>
            <div className="footer">
                <div className="footer-tags">
                <h3>{salary}</h3>
                <p>{location}</p>
                </div>
                <div>
                    <button>Apply Now</button>
                </div>

            </div>
        </div>
    )
}

export default Card;