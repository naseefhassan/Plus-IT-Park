import axios from "axios"

const Instance = axios.create({
    baseURL:"https://interview-plus.onrender.com/"
})


export default Instance