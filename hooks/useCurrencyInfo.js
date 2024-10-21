import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/82a5da6494c33c4dc8942368/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;

