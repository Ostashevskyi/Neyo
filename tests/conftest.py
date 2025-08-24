import os
import pytest

@pytest.fixture(scope="session")
def base_url():
    # Можна передати BASE_URL з CI (наприклад, прев’ю з Vercel).
    return os.getenv("BASE_URL", "http://localhost:3000")

@pytest.fixture
def home(page, base_url):
    page.goto(base_url + "/")
    return page
