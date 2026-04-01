import { useContext, useEffect, useState } from 'react'
import './App.css'
import Parent from './components/Parent'
import postApi from './api/apiPost'
import { myContext } from './apiContext/Context'

function App() {

  const {name,age} = useContext(myContext)

  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [photos, setPhotos] = useState([])

  async function fetchPosts(){
    const response = await postApi.getPosts()
    setPosts(response.data)

    console.log(response)
  }

  async function fetchComments(){
    const response = await postApi.getComments()
    setComments(response.data)
    console.log(response)
  }

  async function getPhotos() {
    const response = await postApi.getPhotos()
    setPhotos(response.data)
    console.log(response)
  }

  useEffect(()=>{
    fetchPosts()
    fetchComments()
    getPhotos()
    }, [])

  return (
  <>
  {/* <Parent/> */}

  <div style={{color: 'red', fontSize:'30px'}}>
    {name} is my self and i am {age} years old
  </div>

  <div>
    {posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
  <div>
    {comments.map(comment => (
      <div key={comment.id}>
        <h2>{comment.name}</h2>
        <p>{comment.email}</p>
      </div>
    ))}
  </div>

  <div>
    {photos.map(photo => (
      <div key={photo.id}>
        <h1>sheraz photo</h1>
        <img src={photo.url} alt={photo.title} />
      </div>
    ))}
  </div>
  </>
  )
}

export default App
