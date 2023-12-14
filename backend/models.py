from enum import Enum
from uuid import UUID, uuid4

# Dependencies
from pydantic import BaseModel
from typing import Optional


class Categories(str, Enum):
    gaming = "gaming"
    phones = "phones"
    cameras = "cameras"
    clothes = "clothes"
    food = 'food'


class Product(BaseModel):
    id: Optional[UUID] = uuid4()
    name: str
    price: int
    category: Categories
