### Phase 1: Foundation & Data Collection (Weeks 1-2) 🏗️

#### **Week 1: Project Kickstart & Scaffolding**
* **Primary Focus:** **Environment Setup.**
* **Tasks to Complete:**
    * Initialize the shared Git repository and finalize the `README.md` and `PROGRESS_LOG.md`.
    * Develop the initial version of the data scraper in `services/ingest/ingest.py` to pull raw text from at least two sources.
    * Set up the basic FastAPI backend with a "hello world" endpoint.
    * Create the skeleton for the React frontend application.

#### **Week 2: Data Refinement & Dataset Creation**
* **Primary Focus:** **Building High-Quality Datasets.**
* **Tasks to Complete:**
    * Refine the scraping script to clean the raw text, removing HTML artifacts and irrelevant content.
    * Create the initial batch (**200-300 examples**) of the fine-tuning dataset in the specified JSONL format. This involves manually writing or synthetically generating high-quality prompt transformations.

---

### Phase 2: Core Model Development (Weeks 3-5) 🧠

#### **Week 3: Building the Knowledge Base**
* **Primary Focus:** **Implementing the RAG System.**
* **Tasks to Complete:**
    * Set up the local Vector Database (ChromaDB).
    * Write the script to process the cleaned text files: chunk them, generate embeddings, and load them into the database.
    * Implement the core retrieval function that can fetch relevant context from the database based on a query.

#### **Week 4: Preparing for Fine-Tuning**
* **Primary Focus:** **Training Preparation.**
* **Tasks to Complete:**
    * Expand the fine-tuning dataset to the target size of **~1,000 examples**.
    * Set up the Google Colab notebook with all necessary libraries installed and Google Drive mounted.
    * Write the code to load the base model (e.g., Mistral-7B) using 4-bit quantization (QLoRA) and prepare the dataset for training.

#### **Week 5: Model Fine-Tuning**
* **Primary Focus:** **Training the Core LLM.**
* **Tasks to Complete:**
    * Execute the fine-tuning training job in Google Colab.
    * Monitor the training process and save checkpoints.
    * Perform initial quality checks on the model's outputs directly in the notebook.
    * Merge the trained LoRA adapter and save the final, complete model to Google Drive.

---

### Phase 3: Application & API (Weeks 6-7) 🔌

#### **Week 6: Backend Integration**
* **Primary Focus:** **Making the Model Usable via an API.**
* **Tasks to Complete:**
    * Download the fine-tuned model and place it in the `backend/models` directory.
    * Build the full logic for the `/enhance-prompt` API endpoint, integrating the RAG retrieval and model inference steps.
    * Rigorously test the API endpoint using tools like `curl` or Postman to ensure it works as expected.

#### **Week 7: Creating the MVP**
* **Primary Focus:** **Building a Functional End-to-End Application.**
* **Tasks to Complete:**
    * Connect the frontend UI to the backend API, allowing users to submit a prompt and see the result.
    * Implement UI loading/error states for a smooth user experience.
    * Create a `docker-compose.yml` file to allow the entire application (frontend and backend) to be launched with a single command.

---

### Phase 4: Testing & Deployment (Week 8) 📤

#### **Week 8: Polish, Test, and Ship**
* **Primary Focus:** **Launching Version 1.0.**
* **Tasks to Complete:**
    * Conduct thorough end-to-end testing of the full application from a user's perspective.
    * Identify and fix all critical bugs.
    * Finalize all project documentation, especially the main `README.md`.
    * Deploy the application to a cloud service (e.g., Hugging Face Spaces, Railway) and share it.

---
