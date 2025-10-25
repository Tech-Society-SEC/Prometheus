const BASE = (import.meta.env && import.meta.env.VITE_API_BASE) || ''

export async function augment(rawPrompt, targetModel = 'gpt-4o'){
  const url = `${BASE}/augment`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ raw_prompt: rawPrompt, target_model: targetModel })
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`augment failed: ${res.status} ${text}`)
  }
  return res.json()
}

export default { augment }
