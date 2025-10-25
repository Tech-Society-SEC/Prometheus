import React, { useState, useEffect } from 'react'
import './styles/index.css'
import PromptBar from './components/PromptBar'
import Results from './components/Results'
import { augment } from './api/augment'

export default function App(){
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function toggleTheme(){
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  async function handleSubmit({ raw, model }){
    setLoading(true)
    setError(null)
    try{
      const data = await augment(raw, model)
      setResults(data.enhanced_prompts || [])
    }catch(err){
      setError(err.message || String(err))
      setResults([])
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="page-root">
      <header className="site-header">
        <div className="header-content">
          <h1 className="title">Prometheus</h1>
          <p className="tagline">You provide the prompt, we handle the enhancement</p>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </header>

      <main className="center-area">
        <PromptBar onSubmit={handleSubmit} loading={loading} />

        <section className="results-section">
          {error && <div className="error">{error}</div>}
          <Results items={results} loading={loading} />
        </section>
      </main>

      <footer className="site-footer"></footer>
    </div>
  )
}
