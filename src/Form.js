import React,{useState} from 'react'
import "./App.css"
import axios from "axios"

function Form() {
  const [data,setData] = useState('')

  const handleSubmit = (e)=>{
   e.preventDefault();
   axios.post("http://localhost:5000/data/add",{"data": data})
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
    setData("")
  }

    return (
        <div className="form">
            <form onSubmit={handleSubmit} >
                <input value={data} onChange={(e)=>setData(e.target.value)} type="text"/>
                <button type="submit">Submmit</button>
            </form>
        </div>
    )
}

export default Form
