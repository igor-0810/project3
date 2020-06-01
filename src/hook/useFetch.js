import  {useEffect, useState} from 'react';
import Axios from "axios";


const useFetch = (url) => {
    const [mainData, setMainData] = useState();


    useEffect(() => {
        Axios(url)
            .then(res => (
                setMainData(res.data)
            ));
    
    }, [url]);
    return (
        mainData
    )
}

export default useFetch;