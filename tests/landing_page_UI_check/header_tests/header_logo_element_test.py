from playwright.sync_api import expect
from tests.support.site import header_logo
from tests.support.selectors import header_logo, footer_logo


def test_header_logo_visible(home):
    logo = header_logo(home)
    expect(logo).to_have_count(1)
    expect(logo).to_be_visible()
