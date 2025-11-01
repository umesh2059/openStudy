from fastapi import FastAPI,Request
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

import os
import google.generativeai as genai
load_dotenv()
api=os.getenv("API_KEY")
print(api)
genai.configure(api_key=api)
model=genai.GenerativeModel("gemini-2.5-flash")


app=FastAPI()# Allow CORS (so your React frontend can call this API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # replace with your frontend URL in production
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def greeting():
    return {"message":"hello world"}

@app.post("/ask")
async def askqxm(request:Request):
    data=await request.json()
    
    question=data.get("message","")
    if not question:
        return{"error":"field cannot be empty"}
    
    prompt = f"""
You are an AI assistant whose job is to answer questions only using the PDF notes provided. 
Do not provide information outside these notes. 

The notes currently available are:
- Notes from Jain University
- Covers all departments (CSE, ECE, Mechanical, Civil, etc.)
- Semesters 1 to 8
- Topics include all subjects provided in the PDFs

When answering a user query:
1. Base your answer strictly on the content of these notes.
2. If the answer is not in the notes, politely say: "Sorry, I don't have that information in the notes."
3. Keep answers concise and relevant.
4. Use simple language suitable for students referring to the notes.

user question:{question}
"""
  
    response=model.generate_content(prompt)
    return{"answer":response.text}
