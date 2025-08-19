from playwright.sync_api import Page, expect
import re

def test_homepage_title(page: Page, base_url: str):
    page.goto(base_url + "/")
    # Перевірка заголовка або будь-якого видимого елемента
    expect(page).to_have_title(re.compile("Neyo"))
