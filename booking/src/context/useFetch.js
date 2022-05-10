import axios from 'axios'
import react,{useEffect, useState} from 'react'

const useFetch =(url)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            try {
            const response = await axios.get(url)
            setData(response.data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        }
        fetchData();
    },[])
// If I remove the url dipendency then its gonna load data on search click on list item page

const reFetchData = async()=>{
    setLoading(true)
    try {
    const response = await axios.get(url)
    setData(response.data)
    } catch (err) {
        setError(err)
    }
    setLoading(false)
}

return {data,loading,reFetchData,error}

}

export default useFetch;