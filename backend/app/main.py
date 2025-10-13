from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Prometheus Backend")

class AugmentRequest(BaseModel):
    raw_prompt: str
    target_model: str

class AugmentResponse(BaseModel):
    enhanced_prompts: list[str]

@app.post("/augment", response_model=AugmentResponse)
async def augment(req: AugmentRequest):
    # TODO: integrate RAG + fine-tuned model
    enhanced = [f"[ENHANCED for {req.target_model}] {req.raw_prompt}"]
    return {"enhanced_prompts": enhanced}
