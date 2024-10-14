import axios from "axios"
const BASE_URL = "https://fundoonotes.incubation.bridgelabz.com/api/"
export const LoginApi = async(payload) => {
    const res = await axios.post(BASE_URL+"user/login", payload
        )
    return res   
    // fetch() 
}

export const getAllNotesApi = async() => {
    return await axios.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList", {
        headers: {
            Authorization: localStorage.getItem('fundoo-token')
        }
    })
}