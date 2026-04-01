import { useEffect, useState } from 'react'
import './App.css'
import Parent from './components/Parent'
import postApi from './api/apiPost'

function App() {

  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

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

  useEffect(()=>{
    fetchPosts()
    fetchComments()
  }, [])

  return (
  <>
  {/* <Parent/> */}

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
  </>
  )
}

export default App
