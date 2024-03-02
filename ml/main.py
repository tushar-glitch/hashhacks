from fastapi import FastAPI, Body
import google.generativeai as genai
import json
import base64
import pathlib
import pprint
import requests
import mimetypes
from IPython.display import Markdown

app = FastAPI()

# Replace with your Google Generative AI API Key
API_KEY = "AIzaSyChmxi4BAyPPvgrnoB2oQPn2CERpIfaIo0"

# Configure the model
generation_config = {
    "temperature": 0.9,
    "top_p": 1,
    "top_k": 1,
    "max_output_tokens": 2048,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
]

model = genai.GenerativeModel(model_name="gemini-1.0-pro",
                              generation_config=generation_config,
                              safety_settings=safety_settings)

convo = model.start_chat(history=[
    # ... Existing conversation history ...
])


@app.post("/chat")
async def chat(user_input: str = Body(...)):
    convo.send_message(user_input)
    response = convo.last.text
    return {"chatbot_response": response}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
