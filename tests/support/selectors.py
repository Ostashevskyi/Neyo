from playwright.sync_api import Page

LOGO_ALT = "Neyo site logo"

def header_logo(page: Page):
    return page.get_by_role("banner").get_by_role("img", name=LOGO_ALT)

def footer_logo(page: Page):
    return page.get_by_role("contentinfo").get_by_role("img", name=LOGO_ALT)
