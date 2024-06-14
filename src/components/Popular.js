
import two from "../assets/images/c1.jpg"

import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"

import five from "../assets/images/c5.jpg"
import eight from "../assets/images/c8.jpg"
import nine from "../assets/images/c9.jpg"
import ten from "../assets/images/c10.jpg"
import onee from "../assets/images/c11.jpg"


function Popular() {
    return (
      <div className="popular">
        <h1 className="popular__title">Most popular</h1>
        <p className="popular__subtitle">Pick the Best</p>
        <div className="popular__container">
  
          <div className="course-card">
            <img src={two} alt="some"></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1999</del></p>
  
          </div>
          <div className="course-card">
            <img src={onee} alt="some"></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1000</del></p>
  
          </div>
          <div className="course-card">
            <img src={ten} alt="some"></img>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Steele</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>449<del>999</del></p>
  
          </div>
          <div className="course-card">
            <img src={nine} alt="some"></img>
            <h3>Basic to Advance Java Core Training</h3>
            <p>Col Steele</p>
            <p>4.7⭐⭐⭐</p>
            <p>449<del>1599</del></p>
  
          </div>
          <div className="course-card">
            <img src={five} alt="some"></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1999</del></p>
  
          </div>
          <div className="course-card">
            <img src={four} alt="some"></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1999</del></p>
  
          </div>
          <div className="course-card">
            <img src={three} alt="some"></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1999</del></p>
  
          </div>
          <div className="course-card">
            <img src={two} alt="some"></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1999</del></p>
  
          </div>
          <div className="course-card">
            <img src={eight} alt="some"></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1999</del></p>
  
          </div>
          <div className="course-card">
            <img src={five} alt="some"></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1999</del></p>
  
          </div>
        </div>
      </div>
    )
  }
  export default Popular