import Axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import { LaunchPage } from './pages/launchPage';

function App() {

  const [data, setData]=useState([])

  useEffect(() => {
    Axios.get("http://localhost:8000").then((res)=>setData(res.data))
  })

  return (
    <div className='data'>
      <LaunchPage />

    {/* {data.map((value)=>(
      <div>
        <p><b><u>{value.name}</u></b>, {value.age}</p>
        <p>{value.city}</p>
        <p>{value.country}</p>
        <br></br>
      </div>
    ))} */}

    </div>
  );
}

export default App;
