import { useEffect, useState } from "react";
import axios from 'axios'
import RecCards from "../components/RecCards";
import hero from '../assets/hero2.png'
import HeroImg from '../components/HeroImage'
import PostGlass from "../components/PostGlass";
import FilterComp from "../components/FilterComp";

const Glassar = () => {

    const [glassarna, setGlassar] = useState([])
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
        <HeroImg hero={hero}/>
        <PostGlass />
        <FilterComp glassarna={glassarna} recensioner={recensioner} />
        <RecCards recensioner={glassarna} />
    </div>
)
}
export default Glassar
