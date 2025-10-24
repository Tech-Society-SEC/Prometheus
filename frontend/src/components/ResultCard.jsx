import React from 'react'

export default function ResultCard({ text, index }){
  return (
    <article className="result-card">
      <div className="result-meta">Suggestion {index}</div>
      <pre className="result-body">{text}</pre>
    </article>
  )
}
