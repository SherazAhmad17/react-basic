import api from "./axiosInstance"


const postApi = {
    getPosts: (limit = 10)=>{
        return api.get(`/posts?_limit=${limit}`)
    },
    getComments: (limit = 10)=>{
        return api.get(`/comments?_limit=${limit}`)
    }
}

export default postApi
