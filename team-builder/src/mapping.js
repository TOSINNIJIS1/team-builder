import React, {useState} from 'react';

const Users = props => {
    const [Data, setData] = useState({
        fname: "",
        lname: "",
        sch: ""
      });
    

      const onInputChange = e => {
        setData({
          ...Data, 
          [e.target.name]: e.target.value,
          
        });
      };
    
      const onFormSubmit = e => {  
        e.preventDefault();
        props.newData(Data)
        // setData({fname: "", lname: "", sch: "" })
      }
      
    
      return (
          <form onSubmit = {onFormSubmit}>
            <label>
              First Name: 
              <input 
              placeholder="Enter First Name Here"
              name= "fname" 
              onChange={onInputChange}
              value={Data.fname}
               />
            </label>
    
            <label>
              Last Name: 
              <input cl
              placeholder="Enter Last Name Here"
              name= "lname" 
              onChange={onInputChange} 
              value={Data.lname}
              />
              
            </label>
    
            <label>
              School: 
              <input className="school"
              placeholder="Enter School Here"
              name= "sch" 
              onChange={onInputChange} />
            </label>
    
            <label> 
              <input className="btn" type="submit" />
            </label>
          </form>
      )}
      

export default Users