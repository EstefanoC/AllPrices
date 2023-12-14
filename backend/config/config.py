import os
from pathlib import Path
from dotenv import load_dotenv
from functools import lru_cache

# Get the path
BASEDIR = os.path.abspath(os.path.dirname(__file__))

# Get .env
load_dotenv(os.path.join(BASEDIR, '.env'))


class Settings:
    DB_HOST: str = os.getenv('DB_HOST')
    DB_NAME: str = os.getenv('DB_NAME')
    DB_USER: str = os.getenv('DB_USER')
    DB_PASSWORD: str = os.getenv('DB_PASSWORD')
    DB_PORT: str = os.getenv('DB_PORT')
    SECRET_KEY: str = os.getenv('SECRET_KEY')


@lru_cache()
def get_settings():
    return Settings
