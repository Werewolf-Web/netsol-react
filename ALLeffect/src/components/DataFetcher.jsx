import { useState, useEffect } from 'react'
import '../styles/DataFetcher.css'

function DataFetcher() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await response.json()
        
        if (isMounted) {
          setUsers([data])
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
      console.log('Cleanup: Preventing state update if component unmounted')
    }
  }, [userId])

  return (
    <div className="component-card">
      <h2>Data Fetcher</h2>
      <p className="description">This component demonstrates useEffect for data fetching</p>

      <div className="user-selector">
        <label htmlFor="userId">Select User ID:</label>
        <select 
          id="userId"
          value={userId} 
          onChange={(e) => setUserId(parseInt(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => (
            <option key={id} value={id}>User {id}</option>
          ))}
        </select>
      </div>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}

      {users.length > 0 && (
        <div className="user-card">
          {users.map(user => (
            <div key={user.id} className="user-info">
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
            </div>
          ))}
        </div>
      )}

      <div className="info-box">
        <h3>How it works:</h3>
        <ul>
          <li>Effect fetches data when userId changes (dependency array)</li>
          <li>The isMounted flag prevents state updates if component unmounts</li>
          <li>This avoids the "Memory leak warning" when component unmounts during fetch</li>
          <li>Use AbortController for a cleaner approach in modern code</li>
        </ul>
      </div>
    </div>
  )
}

export default DataFetcher
