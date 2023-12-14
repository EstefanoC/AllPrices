import asyncio

from uuid import uuid4

# Dependencies
from typing import Union
from fastapi import APIRouter, FastAPI, Response

# Models
from models import Product, Categories

# config
import config.database as DB

# Routers
import routers


router = APIRouter(prefix="/v1/api")

# Create Table
DB.create_table()

list = [
    Product(id=uuid4(), name="PS5 Console",
            price="499", category=Categories.gaming),
    Product(id=uuid4(), name="XBOX Series S",
            price="399", category=Categories.gaming)
]


@router.get("/")
async def read_root(response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return DB.get_all_DB()


@router.get("/item/{item_id}")
def read_item(item_id: str, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


app = FastAPI()
app.include_router(router)
