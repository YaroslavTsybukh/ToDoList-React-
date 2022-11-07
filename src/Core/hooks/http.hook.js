import {useState} from "react";

export const useHttp = () => {
    const [process , setProcess] = useState("loading")

    const request = async (url , method = "GET" , headers = {"Content-Type": "application/json"} , body= null) => {
        setProcess("loading")
        try{
            const response = await fetch(url , {method , headers , body})
            if(response.ok){
                return await response.json()
            }else{
                throw new Error("Что-то пошло нет")
            }
        }catch(e){
            setProcess("error")
            throw e
        }
    }

    return {request , process , setProcess}
}