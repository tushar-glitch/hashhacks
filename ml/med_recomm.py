from pydantic import BaseModel  

class med_rec(BaseModel):
    symptoms: str
