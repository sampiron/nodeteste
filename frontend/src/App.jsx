import { useState } from 'react'

function App() {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchHello = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/hello')
      const data = await res.json()
      setResponse(data)
    } catch (error) {
      setResponse({ message: 'Erro ao conectar com a API', error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Node Test App</h1>
      <p>Clique no botão para consultar a API</p>

      <button onClick={fetchHello} disabled={loading}>
        {loading ? 'Carregando...' : 'Consultar API'}
      </button>

      {response && (
        <div className="response">
          <h2>Resposta da API:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default App
