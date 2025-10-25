from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Prometheus Backend")

# CORS for local dev (Vite at 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
