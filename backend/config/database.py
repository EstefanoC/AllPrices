from functools import lru_cache
from contextlib import asynccontextmanager

# Dependencies
import psycopg2
from psycopg2 import extras

# Config
from . import config

settings = config.get_settings()

connection_info = {
    "host": settings.DB_HOST,
    "port": settings.DB_PORT,
    "user": settings.DB_USER,
    "password": settings.DB_PASSWORD,
    "database": settings.DB_NAME,
}


# Create Table
def create_table():
    try:
        connection = psycopg2.connect(**connection_info)

        cursor = connection.cursor()

        cursor.execute("""CREATE TABLE IF NOT EXISTS PRODUCT (
              id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
              name varchar(250),
              price INT,
              category varchar(50)
              )""")

        connection.commit()

    except (Exception, psycopg2.Error) as error:
        print("Error while fetching data from PostgreSQL", error)

    finally:
        # closing database connection.
        if connection:
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")


# Get All Rows on DB
@lru_cache
def get_all_DB():
    try:
        connection = psycopg2.connect(**connection_info)

        cursor = connection.cursor(cursor_factory=extras.RealDictCursor)
        insert_query = """
        SELECT * FROM PRODUCT
        """
        cursor.execute(insert_query)
        connection.commit()

        result = cursor.fetchall()

        print('Successfully connection to get All DB', result)
        return result

    except (Exception, psycopg2.Error) as error:
        connection.rollback()
        print("Error while fetching data from PostgreSQL", error)


# Write on DB
@lru_cache
def write_to_db(values):
    try:
        connection = psycopg2.connect(**connection_info)

        cursor = connection.cursor()
        insert_query = """
        INSERT INTO PRODUCT(name, price, category)
        VALUES (%s, %s, %s) RETURNING *;
        """
        cursor.execute(insert_query, values)
        result = cursor.fetchone()
        connection.commit()

        print('already write in the DB', result)
        return result

    except (Exception, psycopg2.Error) as error:
        connection.rollback()
        print("Error while fetching data from PostgreSQL", error)
