import { useEffect, useState } from 'react'
import './App.css'
import Parent from './components/Parent'
import postApi from './api/apiPost'

function App() {

  const [posts, setPosts] = useState([])

  async function fetchPosts(){
    const response = await postApi.getPosts()
    setPosts(response.data)

    console.log(response)
  }

  useEffect(()=>{
    fetchPosts()
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
  </>
  )
}

export default App
