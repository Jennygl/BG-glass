import { useEffect, useState } from "react";
import axios from 'axios'
// import styled from 'styled-components'
// import {Link} from 'react-router-dom'

const Glassar = () => {
const [glassar, setGlassar] = useState([])
useEffect(()=>{
    const fetchGlassar = async() =>{
        try {
            const res = await axios.get("http://localhost:8800/glassar")
        setGlassar(res.data)
        }
        catch (err){
            console.log(err);
        }
    }
fetchGlassar()
},[])

return(

    <div>

        <h1>Glassar</h1>
        <div className="glassar">
        {glassar.map((glass)=>(
        <div key={glass.id} className="glass">
            <h3>{glass.namn}</h3>
            <p>Smakar {glass.smak}</p>
            <p>Laktos: {glass.laktos}</p>
            <p>Nötter: {glass.notter}</p>
        </div>
        ))}

    </div>
    </div>
)
}
export default Glassar
