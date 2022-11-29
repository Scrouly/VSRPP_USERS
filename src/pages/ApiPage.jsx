import Post from 'components/Post'
import { useState, useEffect } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const ApiPage = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '15px' }}>Posts</h1>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  )
}

export default ApiPage
