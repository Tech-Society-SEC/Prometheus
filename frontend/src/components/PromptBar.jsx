import React, { useState } from 'react'

export default function PromptBar({ onSubmit, loading }){
  const [raw, setRaw] = useState('')
  const [model, setModel] = useState('ChatGPT')

  function handleSubmit(e){
    e.preventDefault()
    if (!raw.trim()) return
    onSubmit({ raw, model })
  }

  return (
    <form className="prompt-bar" onSubmit={handleSubmit}>
      <textarea
        className="prompt-input"
        placeholder="Type a prompt (e.g. 'Explain how DNS works')"
        value={raw}
        onChange={e=>setRaw(e.target.value)}
        rows={4}
        onKeyDown={(e)=>{
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e)
          }
        }}
      />

      <div className="prompt-controls">
        <select className="model-select" value={model} onChange={e=>setModel(e.target.value)}>
          <option value="ChatGPT">ChatGPT</option>
          <option value="Gemini">Gemini</option>
          <option value="Claude">Claude</option>
        </select>

        <button className="submit-btn" type="submit" disabled={loading}>{loading ? 'Thinking…' : 'Enhance'}</button>
      </div>
    </form>
  )
}
