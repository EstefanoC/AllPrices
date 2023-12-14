# set PYTHONPATH=%PYTHONPATH%;C:\path\to\your\project\

# Dependencies
from psycopg.rows import class_row
from fastapi import FastAPI

import sys
import os

# sys.path.append(os.path.abspath(os.path.join('', 'models')))
1
# Models
from . import models  # nopep8
# from models import Product  # nopep8

# sys.path.append(os.path.abspath(os.path.join('', 'config')))

# config
import config.database as DB  # nopep8


app = FastAPI(prefix="/v1/api/product")

pool = DB.get_async_pool()


@app.get("")
async def get_products(response: models.Product):
    response.headers["Access-Control-Allow-Origin"] = "*"
    try:
        async with pool.connection() as conn, conn.cursor(row_factory=class_row(models.Product)) as cur:
            await cur.execute("SELECT * FROM product")
            data = await cur.fetchall()
            return data
    except (Exception) as error:
        print("Error while fetching router of get all products data from PostgreSQL", error)
