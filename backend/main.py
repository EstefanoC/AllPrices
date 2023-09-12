from ast import List
from typing import Union

from fastapi import FastAPI, Response
from pydantic import BaseModel
from dotenv import load_dotenv
import os

load_dotenv()

secret_key = os.getenv('SECRET_KEY')

print(secret_key)

app = FastAPI()


class Product(BaseModel):
    id: int
    name: str
    price: int


list = [
    Product(id=1, name="PS5 Console", price="499"),
    Product(id=2, name="XBOX Series S", price="399")
]


@app.get("/api/")
def read_root(response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return list


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


print("data")
