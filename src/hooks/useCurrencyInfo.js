import axios from "axios";
import { useEffect, useState } from "react";


function useCurrencyInfo(){
    const [data,setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>{
            res.json()
        })
        .then((res)=>{
            setData(res)
        })
        .catch((error)=>{
            console.log("Error: ", error);
        })
    },[])
    return data;
}

export default useCurrencyInfo





// function useCurrencyInfo(){
//     const [currencyData, setCurrencyData] = useState({});
//     useEffect(async() => {
//         try {
//             const response = await axios(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//             setCurrencyData(response[currency])
//         } catch (error) {
//             console.log("Error :", error)
//         }
//     })
//     return currencyData
// }