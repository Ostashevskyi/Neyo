from playwright.sync_api import Page, expect


def test_homepage_has_non_empty_title(page: Page, base_url: str):
    page.goto(base_url + "/")
    title = page.title()
    assert title and title.strip(), f"Title is empty or whitespace only: '{title}'"