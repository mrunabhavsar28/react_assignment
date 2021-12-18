import logo from './logo.svg';
import './App.css';



function App(props) {
  debugger
 const {employee}=props;
    
return(
  <div className="container">
  
  {/* Start your React code here */}
    <div className='profileImg_container'>
      <img className='Avatar' src={employee.profileImg} width="100" height="100"></img>
    </div>
    <div className='Name_Container'>
      <h1>{employee.name}</h1>
    </div>
    <div className="profile_info">
      <div className="loc">
        <label>
          Location
        </label>
        <strong>
          {employee.location}
        </strong>
      </div>
      <div className="bg">
        <label>
          Blood Group
        </label>
        <strong>
          {employee.bloodGroup}
        </strong>
      </div>
      <div className="age">
        <label>
          Age
        </label>
        <strong>
          {employee.age}
        </strong>
      </div>
    </div>
  </div>
)
}




export default App;
