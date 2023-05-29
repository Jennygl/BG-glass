import { useEffect, useState } from "react";
import axios from 'axios'
import RecCards from "../components/RecCards";
// import styled from 'styled-components'
// import {Link} from 'react-router-dom'

const Glassar = () => {

    const [glassar, setGlassar] = useState([])
    const [recensioner, setRecensioner] = useState([])

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

    useEffect(()=>{
        const fetchRecensioner = async() =>{
            try {
                const res = await axios.get("http://localhost:8800/recensioner")
            setRecensioner(res.data)
            }
            catch (err){
                console.log(err);
            }
        }
    fetchRecensioner()
    },[])

return(

    <div>
        <RecCards recensioner={recensioner} />
    </div>
)
}
export default Glassar
