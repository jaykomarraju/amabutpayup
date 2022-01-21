import Axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  const [data, setData]=useState([])

  useEffect(() => {
    Axios.get("http://localhost:8000").then((res)=>setData(res.data))
  })

  return (
    <div>

{data.map((value)=>(
  <div>
    <h3>{value.name}</h3>
    <p>{value.age}</p>
    <p>{value.city}</p>
    <p>{value.country}</p>
  </div>
))}

    </div>
  );
}

export default App;
