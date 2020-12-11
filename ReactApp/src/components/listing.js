import React,{useEffect,useState} from 'react';
import axios from 'axios';

export default function Listing() {
    const[pets,setPets] = useState([]);
    // component did mount
    useEffect(()=>{
        axios.get("http://localhost:8081/home").then((response)=>{
            setPets(response.data.pets);
        })
    },[]);
    return <ul>
        {pets.map((pets,index)=>{
            return <li key={pets._id}>{pets.name},{pets.species},{pets.breed}</li>
        })}            
        </ul>
}