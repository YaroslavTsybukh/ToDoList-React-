export const useHttp = () => {
    const request = async (url , method = "GET" , body= null , headers = {"Content-Type": "application/json"} , ) => {

        try{
            const response = await fetch(url , {method , body , headers })
            if(response.ok){
                return await response.json()
            }else{
                throw new Error("Что-то пошло нет")
            }
        }catch(e){
            throw e
        }
    }

    return {request}
}