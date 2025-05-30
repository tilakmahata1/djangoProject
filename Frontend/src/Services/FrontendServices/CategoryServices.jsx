import React from 'react'
import axios from 'axios'

const URL = "http://127.0.0.1:8000/api"
const getAllCategories = async()=>{
    const response = await axios.get(`${URL}/category/`)
    return response.data
}

export{getAllCategories}