
import two from "../assets/images/c1.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"
import nine from "../assets/images/c9.jpg"


function Recommended() {
    return (
      <div className="recommended">
        <h1 className="recommended_title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">
  
          <div className="course-card">
            <img src={nine} alt="some"></img>
            <h3>2023 Python Data Visualisation Materclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1999</del></p>
  
          </div>
          <div className="course-card">
            <img src={two} alt="some"></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1000</del></p>
          </div>
  
  
          <div className="course-card">
            <img src={three} alt="some"></img>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Steele</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>449<del>999</del></p>
  
          </div>
          <div className="course-card">
            <img src={four} alt="some"></img>
            <h3>Basic to Advance Java Core Training</h3>
            <p>Col Steele</p>
            <p>4.7⭐⭐⭐</p>
            <p>449<del>1599</del></p>
  
          </div>
  
  
        </div>
      </div>
    )
  }
  export default Recommended