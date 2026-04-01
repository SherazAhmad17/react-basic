import api from "./axiosInstance"


const postApi = {
    getPosts: (limit = 10)=>{
        return api.get(`/posts?_limit=${limit}`)
    },
    getComments: (limit = 10)=>{
        return api.get(`/comments?_limit=${limit}`)
    },
    getPhotos: (count = 10)=>{
        return (
            api.get(`/photos`, {
                params:{
                    _limit: count
                }
            })
        )
    }
}

export default postApi
