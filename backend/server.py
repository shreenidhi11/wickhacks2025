from fastapi import FastAPI, Form, File, UploadFile
from pydantic import BaseModel
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change "*" to specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ItemReport(BaseModel):
    personName: str
    email: str
    phoneNum: str
    itemName: str
    category: str
    color: str
    description: str
    datelost: str

# @app.post("/report-lost")
# async def report_lost(
#     personName: str = Form(...),
#     email: str = Form(...),
#     phoneNum: str = Form(...),
#     itemName: str = Form(...),
#     category: str = Form(...),
#     color: str = Form(...),
#     description: str = Form(...),
#     datelost: str = Form(...),
#     file: Optional[UploadFile] = File(None)  # Handles file upload
# ):
#     """
#     This endpoint receives lost item report details and an optional file.
#     """
#     data = {
#         "personName": personName,
#         "email": email,
#         "phoneNum": phoneNum,
#         "itemName": itemName,
#         "category": category,
#         "color": color,
#         "description": description,
#         "datelost": datelost,
#         "file": file.filename if file else None
#     }

@app.post("/report-lost")
async def report_lost(item: ItemReport):
    print(item)
    return {"message": "Lost item reported successfully!", "data": item}

    # return {"message": "Lost item reported successfully!", "data": data}