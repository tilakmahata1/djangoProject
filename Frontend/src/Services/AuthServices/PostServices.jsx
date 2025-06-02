import React,{useState,useEffect, use} from 'react'
import axios from "axios"


const URL = "http://127.0.0.1:8000/api"
export const usePost = (email, username,password)=>{
    const[data,setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
}
useEffect(()=>{
    const fetchData = async () => {
        try {
            const response = await axios.post(`${URL}/register`, {
                email,
                username,
                password
            });
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}
, [email, username, password]);


