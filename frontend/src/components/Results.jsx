import React from 'react'
import ResultCard from './ResultCard'

export default function Results({ items = [], loading }){
  if (loading) return <div className="results-placeholder">Looking for better prompts…</div>
  if (!items || items.length === 0) return null

  return (
    <div className="results-list">
      {items.map((it, idx)=>(<ResultCard key={idx} text={it} index={idx+1} />))}
    </div>
  )
}
