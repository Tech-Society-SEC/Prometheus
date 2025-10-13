import React, {useState} from 'react'

export default function App(){
  const [raw, setRaw] = useState('')
  const [model, setModel] = useState('gpt-4o')
  const [result, setResult] = useState([])

  async function submit(e){
    e.preventDefault()
    const res = await fetch('/api/augment', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({raw_prompt: raw, target_model: model})
    })
    const data = await res.json()
    setResult(data.enhanced_prompts || [])
  }

  return (
    <div style={{maxWidth:800, margin:'2rem auto', fontFamily:'sans-serif'}}>
      <h1>Prometheus — Prompt Enhancer</h1>
      <form onSubmit={submit}>
        <div>
          <label>Raw Prompt</label>
          <textarea rows={6} value={raw} onChange={e=>setRaw(e.target.value)} style={{width:'100%'}} />
        </div>
        <div>
          <label>Target Model</label>
          <input value={model} onChange={e=>setModel(e.target.value)} />
        </div>
        <button type="submit">Enhance</button>
      </form>

      <h2>Results</h2>
      <ul>
        {result.map((r,i)=>(<li key={i}><pre>{r}</pre></li>))}
      </ul>
    </div>
  )
}
