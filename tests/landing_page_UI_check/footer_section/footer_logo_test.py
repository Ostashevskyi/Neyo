from playwright.sync_api import Page, expect
import re

def test_footer_logo_visible(page: Page, base_url: str):
    page.goto(base_url + "/")

    # Prefer landmark; fallback to <footer>
    footer = page.get_by_role("contentinfo")
    if footer.count() == 0:
        footer = page.locator("footer")

    # If footer is off-screen, bring it into view
    footer.scroll_into_view_if_needed()

    # Robust locators for the logo (alt may differ in footer)
    logo = (
        footer.get_by_role("img", name=re.compile(r"^Neyo site logo$", re.I))
        .or_(footer.locator('img[alt="Neyo site logo"]'))
        .or_(footer.locator('img[alt*="Neyo"]'))
    ).first
    logo.highlight()
    page.pause()
    expect(logo).to_be_visible()