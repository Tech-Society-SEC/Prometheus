# Project Prometheus - Progress Log 📜

*This log tracks our weekly progress. Newest week's summary is always on top.*

---

## 📌 Week 03 (October 28-29, 2025)

### Day 01 (October 28, 2025)
* **Key Accomplishments:** 
  - Created PDF-to-text conversion tool (`services/ingest/convert_pdfs_to_txt.py`) using PyPDF2.
  - Ran ingest pipeline on ChatGPT dataset: 3 PDFs → 513 validated chunks.
  - Ran ingest pipeline on Gemini dataset: 1 PDF → 148 validated chunks.
  - Downloaded 13 Claude documentation pages from docs.anthropic.com as HTML files.
  - Ran ingest pipeline on Claude dataset: 13 HTML pages → 150 validated chunks.
  - Merged all three datasets into unified file: `services/ingest/data/all_guidelines.jsonl` (811 total chunks).
  - Final validation: 100% valid entries across all models (ChatGPT: 513, Gemini: 148, Claude: 150).
  - **Target exceeded:** 811 chunks vs 200-300 target (270% achievement).

* **Goals for Next Day:** 
  - [ ] Install ChromaDB and sentence-transformers for vector database.
  - [ ] Create vector store and embeddings modules in `backend/app/rag/`.
  - [ ] Test vector store with sample inserts and queries.
  - [ ] Prepare population script for loading 811 chunks.

### Team Contributions
* **Jero** :
  - Implemented PDF-to-text conversion utility using PyPDF2.
  - Created `services/ingest/convert_pdfs_to_txt.py` with CLI support (--src-dir, --out-dir).
  - Executed ingest pipeline on Claude HTML documentation (13 pages).
  - Notes: enabled processing of both PDF and HTML sources with error handling.

* **Kabe** :
  - Ran ingest pipeline on ChatGPT dataset (3 PDFs → 513 chunks).
  - Merged all three JSONL files (ChatGPT, Gemini, Claude) into unified dataset.
  - Ran final validation on merged file: 811/811 valid entries.
  - Notes: ChatGPT dataset represents 63% of total chunks.

* **Bala** :
  - Ran ingest pipeline on Gemini dataset (1 PDF → 148 chunks).
  - Downloaded 13 Claude documentation pages from docs.anthropic.com.
  - Organized Claude HTML files in `docs/Datasets/Claude/` with numbered filenames.
  - Notes: covered complete prompt engineering guide (01-overview through 13-extended-thinking).

* **Junjar** : 
  - Set up backend Python environment and installed dependencies (beautifulsoup4, lxml, PyPDF2).
  - Configured ingest pipeline CLI parameters and validated JSONL schema.
  - Updated Timeline.md with completed Day 1-2 tasks and actual results.
  - Updated Progress Log.md with Week 03 accomplishments.
  - Notes: prepared infrastructure for multi-model dataset generation and tracked progress.

### Dataset Summary
| Model | Source Type | Chunks | Status |
|-------|-------------|--------|--------|
| ChatGPT | 3 PDFs | 513 | ✅ Complete |
| Gemini | 1 PDF | 148 | ✅ Complete |
| Claude | 13 HTML pages | 150 | ✅ Complete |
| **Total** | **17 sources** | **811** | ✅ **Target exceeded (200-300)** |

---

### Day 02 (October 29, 2025)
* **Key Accomplishments:** 
  - Installed ChromaDB and sentence-transformers: `pip install chromadb sentence-transformers`.
  - Created RAG module structure: `backend/app/rag/__init__.py`.
  - Implemented `backend/app/rag/vector_store.py` with ChromaDB persistent client.
  - Implemented `backend/app/rag/embeddings.py` with sentence-transformer model (all-MiniLM-L6-v2).
  - Tested vector store with sample document inserts and similarity queries.

* **Goals for Next Day:** 
  - [ ] Create `backend/app/rag/populate_db.py` to load 811 chunks into ChromaDB.
  - [ ] Run population script and verify collection count.
  - [ ] Implement retrieval function with model-specific filtering.
  - [ ] Test retrieval quality with sample queries.

### Team Contributions
* **Jero** :
  - Installed ChromaDB and sentence-transformers dependencies.
  - Created `backend/app/rag/__init__.py` module marker.
  - Notes: prepared environment for vector database integration.

* **Kabe** :
  - Implemented `backend/app/rag/vector_store.py` with ChromaDB client initialization.
  - Created `add_documents()` function for inserting text + embeddings + metadata.
  - Created `search()` function for query → embedding → top-k similarity results.
  - Notes: configured persistent storage and collection schema.

* **Bala** :
  - Implemented `backend/app/rag/embeddings.py` with sentence-transformer model loading.
  - Created `generate_embedding()` function for single text.
  - Created `batch_generate_embeddings()` function for efficiency.
  - Notes: used all-MiniLM-L6-v2 model for 384-dimensional embeddings.

* **Junjar** : 
  - Tested vector store with sample inserts and queries.
  - Verified embedding generation and similarity search functionality.
  - Documented vector store API and usage examples.
  - Notes: confirmed ChromaDB setup working correctly before population.

---

## 📌 Week 02 (20/10 & 21/10 - 2025)

* **Key Accomplishments:** 
  - Ingest Pipeline: implemented cleaning, chunking, and JSONL export pipeline in services/ingest/ingest.py with metadata generation.
  - Validation: created validate_jsonl.py to check dataset quality and required fields.
  - Datasets: collected and organized prompting guides and examples in docs/Datasets for ChatGPT, Gemini, and Claude.
  - Development: improved ingest tooling with CLI support for source directories, chunk size, and target model configuration.

* **Goals for Next Week:** 
  - [ ] Generate 200-300 JSONL examples using the ingest pipeline.
  - [ ] Manually review and enhance 50 seed prompts.
  - [ ] Set up basic RAG retrieval prototype.
  - [ ] Connect backend to vector database (Chroma/FAISS).

### Team Contributions
* **Jero** :
  - Implemented text cleaning and normalization functions in ingest.py.
  - Added HTML artifact removal and whitespace handling.
  - Notes: used BeautifulSoup for robust HTML parsing with plain-text fallback.

* **Kabe** :
  - Implemented chunking logic with sentence-boundary preservation.
  - Added deduplication and filtering for chunk quality control.
  - Notes: configured max_chars parameter for flexible chunk sizing.

* **Bala** :
  - Collected and organized dataset files in docs/Datasets.
  - Gathered prompting guides for ChatGPT, Gemini, and Claude.
  - Notes: prepared source materials for JSONL generation and annotation.

* **Junjar** : 
  - Implemented JSONL export with metadata generation (chunk_id, timestamps, target_model).
  - Created validate_jsonl.py for dataset quality checking.
  - Notes: added CLI argument parsing and validation reporting with per-model statistics.

---

## 📌 Week 01 (October 13 & October 14, 2025)

### Day 01
* **Key Accomplishments:** 
    - Frontend: scaffolded React app and components; created frontend/src/App.jsx, frontend/src/main.jsx, frontend/index.html; verified Vite dev server.
    - Backend: implemented FastAPI scaffold and POST /augment stub; added backend/Dockerfile and backend/requirements.txt; defined AugmentRequest/AugmentResponse.
    - Ingest/RAG: added services/ingest/ingest.py and README; drafted ingest plan and metadata schema; researched Chroma/FAISS/Pinecone trade-offs.
    - Research & Prompt Engineering: collected official model docs and vendor guides; summarized prompt-engineering fundamentals and example transformations; produced seed guidelines for fine-tuning and RAG content.
    - Dev tooling: wired docker-compose.yml and added .vscode/tasks.json to run frontend + backend locally.
* **Goals for Next Day:** 
  - [ ] Implement a retriever stub in backend to return top KB passages for a given target_model.
  - [x] Wire a hosted LLM API call (environment-configurable) into the augment flow for MVP generation.
  - [x] Run the ingestion script on initial seed documents and index vectors locally (Chroma/FAISS prototype).
  - [x] Enhance frontend: connect model-selection to API, display retrieved context, and add thumbs up/down feedback UI.
  - [ ] Add basic unit/smoke tests and a short CI/dev README; verify end-to-end with docker-compose.

### Team Contributions
* **Jero** :
  - Implemented frontend scaffold tasks and components.
  - Created/updated files: frontend/src/App.jsx, frontend/src/main.jsx, frontend/index.html.
  - Verified dev server build locally with Vite; documented startup steps.
  - Notes: focused on UX skeleton and model-selection UI placeholder.

* **Kabe** :
  - Implemented backend scaffold and API stub.
  - Created/updated files: backend/app/main.py (POST /augment stub), backend/Dockerfile, backend/requirements.txt.
  - Performed preliminary prompt-engineering study: summarized fundamentals, best practices, and example transformations.
  - Notes: added API contract (AugmentRequest/AugmentResponse) and basic validation.

* **Bala** :
  - Set up ingestion & RAG placeholders and documentation.
  - Created/updated files: services/ingest/ingest.py, services/ingest/README.md, docs/templates/arch_diagram.md.
  - Researched vector DB options (Chroma, FAISS, Pinecone) and documented trade-offs.
  - Notes: prepared sample ingest plan and metadata schema for KB.

* **Junjar** :
  - Collected official model & prompting documentation and performed initial research.
  - Assembled sources: vendor docs, blogs, and academic references; added links to docs/Project Document.md notes.
  - Notes: produced a short guideline to be used for initial fine-tuning dataset and RAG seed content.
  - Wired docker-compose.yml to expose backend service and added .vscode task for compose up.

---
### Day 02
* **Key Accomplishments:** 
  - Frontend: built minimal UI with dark/light theme toggle; created React components (PromptBar, Results, ResultCard); added custom fonts (BBH Sans Hegarty, Montserrat) and 3D textarea effects; updated models to ChatGPT, Gemini, Claude.
  - Development: set up Python venv and Node.js environment; created mock backend for standalone frontend development; configured Vite dev server with CORS support.
  - Documentation: created .github/copilot-instructions.md for AI agent guidance with quick-start commands and project conventions.
  - Knowledge Base: collected prompting guides for ChatGPT, Gemini, and Claude to support future RAG implementation.

* **Goals for Next Week:** 
  - [ ] Refine the scraping script to clean raw text and remove HTML artifacts.
  - [ ] Create initial batch (200-300 examples) of fine-tuning dataset in JSONL format.
  - [ ] Implement basic text preprocessing and chunking logic for RAG pipeline.
  - [x] Complete the backlogs of Week 1


### Team Contributions
* **Jero** :
  - Set up Python venv and Node.js environment.
  - Created mock backend for standalone frontend development.
  - Configured Vite dev server with CORS support.
  - Notes: enabled hot reload workflow for live development.

* **Kabe** :
  - Built minimal UI with dark/light theme toggle.
  - Created React components (PromptBar, Results, ResultCard).
  - Added custom fonts (BBH Sans Hegarty, Montserrat) and 3D textarea effects.
  - Updated models to ChatGPT, Gemini, Claude.
  - Notes: implemented responsive layout and keyboard shortcuts (Enter to submit).

* **Bala** :
  - Collected prompting guides for ChatGPT, Gemini, and Claude.
  - Organized knowledge base content to support future RAG implementation.
  - Notes: gathered official documentation and best practices for each model.

* **Junjar** : 
  - Set up Python venv and Node.js environment.
  - Created mock backend for standalone frontend development.
  - Configured Vite dev server with CORS support.
  - Created .github/copilot-instructions.md for AI agent guidance.
  - Notes: documented quick-start commands and project conventions.

## Designed UI
![Initial UI](images/InitialUI.png)

---
