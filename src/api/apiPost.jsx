import api from "./axiosInstance"


const postApi = {
    getPosts: ()=>{
        return api.get("/posts")
    }
}

export default postApi
