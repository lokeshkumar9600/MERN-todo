import React,{useState} from 'react'
import axios from "axios"

function RenderData() {

    const [todoData,setData] = useState([]);


    axios.get("http://localhost:5000/data")
       .then((res)=>{
        setData(res.data);
       }) //check for error
       .catch((err)=>console.log(err))

    return (
        <div className="form">
            
         <div>  
             <ul>   
          {todoData.map((todo)=>
          <div className="form">
          <li>{todo.data}</li>
          <button>delete</button>
          </div>
          )}
          </ul>
        </div>
        </div>
    )
}

export default RenderData;
